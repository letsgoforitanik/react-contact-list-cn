import { getContacts } from "../api";
import { addContacts } from "./contactSlice";

export const contactFetchThunk = async function (dispatch) {
    const contacts = await getContacts();
    dispatch(addContacts(contacts));
};
