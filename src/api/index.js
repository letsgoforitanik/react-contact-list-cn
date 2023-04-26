import { fetchData } from "../utils/fetchData";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getContacts() {
    const url = API_URL + "/users";
    return await fetchData(url, { method: "GET" });
}

export async function addContact(info) {
    const url = API_URL + "/users";
    return await fetchData(url, { method: "POST", body: info });
}
