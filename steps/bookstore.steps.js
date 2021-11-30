import bookstoreService from '../services/bookstore.service'

const booksGET = '/BookStore/v1/Books';
const booksPOST = "/BookStore/v1/Books";
const deleteBooks = "/BookStore/v1/Books";
const bookGET = "/BookStore/v1/Book";
const bookDELETE = "/BookStore/v1/Book";
const booksPUT = "/BookStore/v1/Books/{ISBN}";


const books = {
    "userId": "string",
    "collectionOfIsbns": [
        {
            "isbn": "string"
        }
    ]
}

const deleteBook = {
    "isbn": "string",
    "userId": "string"
}

const replaceBook = {
    "userId": "string",
    "isbn": "string"
}

class BookstoreSteps {

    async getBook() {
        const response = await browser.call(async () => await bookstoreService.get(bookGET))
        console.log(`LOG ${response.data}`) //a7a74415-d8ba-4983-8c26-fa2e3599658b - 36
        console.log(`LOG ${Object.keys(response.data)}`)
        // await expect(response.status).toEqual(201);
        // await expect(response.data.username).toEqual(login)
    }


    async getBooks() {
        const response = await browser.call(async () => await bookstoreService.get(booksGET))
        console.log(`LOG ${response.data}`) //a7a74415-d8ba-4983-8c26-fa2e3599658b - 36
        console.log(`LOG ${Object.keys(response.data)}`)
        // await expect(response.status).toEqual(201);
        // await expect(response.data.username).toEqual(login)
    }

}

export default new BookstoreSteps();