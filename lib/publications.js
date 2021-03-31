const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const PUBLICATIONS_PATH = process.env.NEXT_PUBLIC_PUBLICATION_PATH;
const PUBLICATIONS_URL = `${API_HOST}${PUBLICATIONS_PATH}`;

// TODO handle errors
export async function getPublicationData(publisher, title) {
  const url = `${PUBLICATIONS_URL}/preview?publisher=${publisher}&title=${title}`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
