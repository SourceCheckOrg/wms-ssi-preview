const API_HOST=process.env.NEXT_PUBLIC_API_HOST;
const PUBLICATIONS_PATH=process.env.NEXT_PUBLIC_PUBLICATION_PATH;
const PUBLICATIONS_URL=`${API_HOST}${PUBLICATIONS_PATH}`;

export async function getAllPublicationIds() {
    let response = await fetch(PUBLICATIONS_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let publications = await response.json();

    console.log('PUBLICATIONS', publications)

    let ids = publications.map(({publisher, title}) => {
        return {
            params: { 
                publisher,
                title
            },
        };
    });
    return ids;
}

export async function getPublicationData(publisher, title) {
    console.log('publisher', publisher)
    console.log('title', title)
    let response = await fetch(`${PUBLICATIONS_URL}?publisher=${publisher}&title=${title}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let publications = await response.json();
    console.log('FILTERED_PUBLICATIONS', publications);
    return await publications[0];
}
