import { API_URL } from "./config";

const getAllBooks = async () => {
    const response = await fetch(API_URL);
    return await response.json();
}


export { getAllBooks }