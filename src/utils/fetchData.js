export async function fetchData(url, config) {
    if (config.body) config.body = JSON.stringify(config.body);
    if (config.method === "POST") config.headers = { "Content-type": "application/json; charset=UTF-8" };
    const response = await fetch(url, config);
    return await response.json();
}
