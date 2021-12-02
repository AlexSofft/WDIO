import axios from "axios";
const BASE_URL = 'https://demoqa.com'

class BookstoreService {

    async get(url, headers) {
        let response;
        try {
            console.log(`HEADERS values get ${Object.values(headers)}`)
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
            console.log(`HEADERS values post ${Object.values(headers)}`)
            console.log(`DATA values post ${Object.values(data)}`)
            response = await axios.post(BASE_URL + url, data, { headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }

    async put(url, data, headers) {
        let response;
        try {
            console.log(`HEADERS put ${Object.values(headers)}`)
            console.log(`DATA put ${Object.values(data)}`)
            response = await axios.put(BASE_URL + url, data, { headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }

    async delete(url, data, headers) {
        let response;
        try {
            console.log(`HEADERS delete ${Object.values(headers)}`)
            console.log(`DATA delete ${Object.values(data)}`)
            response = await axios.delete(BASE_URL + url, { data, headers })
            return response;
        } catch (err) {
            console.log(`Error ${err}`)
            return err;
        }
    }
}

export default new BookstoreService();