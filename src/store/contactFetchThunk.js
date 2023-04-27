import { getContacts } from "../api";
import { addContacts } from "./contactSlice";

// this function will be executed by a redux middleware
// the job of this function is to fetch all contacts
// and then dispatch proper action for storing in redux store
export const contactFetchThunk = async function (dispatch) {
    const contacts = await getContacts();
    dispatch(addContacts(contacts));
};
