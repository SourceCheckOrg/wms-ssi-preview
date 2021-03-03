import dynamic from 'next/dynamic';
import Head from "next/head";
import Preview from "../../components/preview";
import { getAllPublicationIds, getPublicationData } from "../../lib/publications";
const PdfViewer = dynamic(() => import('../../components/PdfViewer/PdfViewer.js'), { ssr: false });

const API_HOST=process.env.NEXT_PUBLIC_API_HOST;

export default function Publication({ publicationData }) {
  return (
    <Preview>
      <Head>
        <title>{publicationData.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SourceCheck Publication Preview" />
        <meta name="monetization" content={publicationData.account}></meta>
      </Head>
      <PdfViewer url={`${API_HOST}${publicationData.pdf_raw.url}`} pageNumber={1} />
    </Preview>
  );
}

export async function getStaticProps({ params }) {
  const publicationData = await getPublicationData(params.publisher, params.title);
  console.log('PUBLICATION_DATA', publicationData);
  return {
    props: {
      publicationData: publicationData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPublicationIds();
  return {
    paths,
    fallback: false,
  };
}
