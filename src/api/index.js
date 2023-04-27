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
export async function changeContact(userId, info) {
    const url = API_URL + "/users/1";
    return await fetchData(url, { method: "PUT", body: info });
}

export async function removeContact(userId) {
    const url = API_URL + "/users/1";
    return await fetchData(url, { method: "DELETE" });
}
