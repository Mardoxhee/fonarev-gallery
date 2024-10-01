async function getFromAPi(url: URL, cacheTime?: number) {
    try {
        const options: RequestInit = {
            method: "GET",
            headers: {
                accept: "application/json",
            },
            next: {
                revalidate: 5
            },
        };
        const response = await fetch(url.toString(), options);
        if (!response.ok) {
            throw new Error(`API call failed avec erreur status ${response.status}`);
        }
        const data = (await response.json());
        console.log(JSON.stringify(data, null, 2))
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function getEvents(page = 1) {
    const url = new URL(`https://api-gallery.fona-vps.cloud/wp-json/wp/v2/events?acf_format=standard&_fields=id,title,acf,excerpt,featured_media&per_page=6&page=${page}`);
    const data = await getFromAPi(url);
    return data;
}