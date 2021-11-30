import axios from "axios";
const BASE_URL = 'https://demoqa.com'

class BookstoreService {

    async get(url, headers) {
        let response;
        try {
            console.log(`HEADERS get ${headers}`)
            response = await axios.get(BASE_URL + url, { headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }

    async post(url, data, headers) {
        let response;
        try {
            console.log(`HEADERS post ${headers}`)
            response = await axios.post(BASE_URL + url, data, { headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }

    async delete(url, headers) {
        let response;
        try {
            console.log(`HEADERS delete ${headers}`)
            response = await axios.delete(BASE_URL + url, { headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }


}

export default new BookstoreService();