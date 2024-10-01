let etagCache: string | null = null;

async function getFromAPi(url: URL, cacheTime?: number) {
    try {
        const options: RequestInit = {
            method: "GET",
            headers: {
                accept: "application/json",
                ...(etagCache ? { 'If-None-Match': etagCache } : {}), // Envoi l'ETag s'il existe
            },
            next: {
                revalidate: 1, // ISR toujours en place, mais on contrôle la révalidation avec ETag
            },
        };

        const response = await fetch(url.toString(), options);

        if (response.status === 304) {
            // Les données n'ont pas changé
            console.log('No changes in API data');
            return null; // Ou retourne des données mises en cache localement
        }

        if (!response.ok) {
            throw new Error(`API call failed avec erreur status ${response.status}`);
        }

        // Récupérer l'ETag des nouvelles données
        const newEtag = response.headers.get('ETag');
        if (newEtag) {
            etagCache = newEtag; // Met à jour l'ETag local
        }

        const data = await response.json();
        console.log('Fetching new data from API:', JSON.stringify(data, null, 2));

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