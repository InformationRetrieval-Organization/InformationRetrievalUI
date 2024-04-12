//const baseUrl = process.env.IR_API_URL;
const baseUrl = 'https://informationretrievalapi-prod-app.azurewebsites.net';

export async function getVectorSpaceArticles(url: string): Promise<ArticleResult[]> {  
    const response = await fetch(`${baseUrl}${url}`);

    const data = await response.json();
    const articles: ArticleResult[] = data as ArticleResult[];

    console.log(response);
    console.log(data);

    return articles;
}

export async function getBooleanArticles(url: string, filters: Filter[]): Promise<ArticleResult[]>{
    const response = await fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
    });

    const data = await response.json();
    const articles: ArticleResult[] = data as ArticleResult[];

    console.log(response);
    console.log(data);

    return articles;
}