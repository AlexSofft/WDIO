import bookstoreService from '../services/bookstore.service'
const expectChai = require('chai').expect;

const createUser = "/Account/v1/User"
const booksGET = '/BookStore/v1/Books';
const booksPOST = "/BookStore/v1/Books";
const booksDELETE = (uuid) => { return `/BookStore/v1/Books?UserId=${uuid}` }
const bookGET = (isbn) => { return `/BookStore/v1/Book?ISBN=${isbn}` };
const bookDELETE = "/BookStore/v1/Book";
const booksPUT = (isbn) => { return `/BookStore/v1/Books/${isbn}` };
const userGET = (uuid) => { return `/Account/v1/User/${uuid}` }
const generateToken = "/Account/v1/GenerateToken"


let ISBN;
let userId;
let token;
let newISBN;

const userName = 'Eric124';

const loginData = {
    "userName": `${userName}`,
    "password": "1234Tes!"
};

const headers = {
    "content-type": "application/json",
};

const books = (isbn) => {
    return {
        "userId": `${userId}`,
        "collectionOfIsbns": [
            {
                "isbn": `${isbn}`
            }
        ]
    }
}

const headersBarierToken = (tkn) => {
    return {
        "content-type": "application/json",
        "Authorization": `Bearer ${tkn}`
    };
}

const replaceBook = (userid, newisbn) => {
    return {
        "userId": `${userid}`,
        "isbn": `${newisbn}`
    }
}

const deleteBook = (isbn, userid) => {
    return {
        "isbn": `${isbn}`,
        "userId": `${userid}`
    }
}

class BookstoreSteps {

    async getBooks() {
        const response = await browser.call(async () => await bookstoreService.get(booksGET, headers))
        ISBN = response.data.books[0].isbn
        newISBN = response.data.books[1].isbn
        console.log(`LOG ISBN ${ISBN}`)
        console.log(`LOG ISBN ${newISBN}`)
        await expect(response.status).toEqual(200);
        expectChai(response.data.books).to.have.lengthOf.above(7)
    }

    async getBook() {
        const response = await browser.call(async () => await bookstoreService.get(bookGET(ISBN), headers))
        console.log(`LOG get book by isbn ${ISBN}`)
        console.log(`LOG ${Object.keys(response.data)}`)
        console.log(`LOG get book isbn  ${response.data.isbn}`)
        await expect(response.status).toEqual(200);
        await expect(response.data.isbn).toEqual(ISBN);
    }

    async addBooks() {
        // create user
        const createUserResponse = await browser.call(async () => await bookstoreService.post(createUser, loginData, headers))
        userId = createUserResponse.data.userID
        console.log(`LOG userID ${userId}`)
        await expect(createUserResponse.status).toEqual(201);
        await expect(createUserResponse.data.username).toEqual(userName)

        //generate token
        const responseToken = await browser.call(async () => await bookstoreService.post(generateToken, loginData, headers))
        token = responseToken.data.token
        console.log(`LOG create token ${token}`)
        await expect(responseToken.status).toEqual(200);
        await expect(responseToken.data.result).toEqual("User authorized successfully.");

        //add Books
        const response = await browser.call(async () => await bookstoreService.post(booksPOST, books(ISBN), headersBarierToken(token)))
        console.log(`LOG addBooks ${Object.keys(response.data)}`)
        console.log(`LOG added isbn ${response.data.books[0].isbn}`)
        await expect(response.status).toEqual(201);
        await expect(response.data.books[response.data.books.length - 1].isbn).toEqual(ISBN);

        //get user books check the added book ISBN
        const userInfoResponse = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG getUserID ${userInfoResponse.data.userId}`)
        console.log(`LOG getUser last isbn in books ${userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn}`)
        await expect(userInfoResponse.status).toEqual(200);
        await expect(userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn).toEqual(ISBN);
    }

    async replaceBook() {
        const response = await browser.call(async () =>
            await bookstoreService.put(booksPUT(ISBN), replaceBook(userId, newISBN), headersBarierToken(token)))
        console.log(`LOG replace isbn ${response.data.books[response.data.books.length - 1].isbn}`)
        await expect(await response.status).toEqual(200);
        await expect(await response.data.books[response.data.books.length - 1].isbn).toEqual(newISBN);

        //get user books to check the replaced book ISBN
        const userInfoResponse = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG getUserID ${userInfoResponse.data.userId}`)
        console.log(`LOG new ISBN ${userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn}`)
        await expect(userInfoResponse.status).toEqual(200);
        await expect(userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn).toEqual(newISBN);
    }

    async deleteBookByUUID() {
        //delete book by new ISBN
        const deleteBookResponse = await browser.call(async () =>
            await bookstoreService.delete(bookDELETE, deleteBook(newISBN, userId), headersBarierToken(token)))
        console.log(`LOG bookDELETE response keys ${Object.keys(deleteBookResponse)}`)
        await expect(await deleteBookResponse.status).toEqual(204);
        await expect(await deleteBookResponse.statusText).toEqual('No Content');

        // user book list is empty
        const infoUserBooksResponse = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG list length ${infoUserBooksResponse.data.books.length}`)
        await expect(infoUserBooksResponse.status).toEqual(200);
        await expect(infoUserBooksResponse.data.books.length).toEqual(0);
    }

    async deleteAllBooksByUUID() {
        //add Books
        const response = await browser.call(async () => await bookstoreService.post(booksPOST, books(ISBN), headersBarierToken(token)))
        console.log(`LOG addBooks ${Object.keys(response.data)}`)
        console.log(`LOG added isbn ${response.data.books[0].isbn}`)
        await expect(response.status).toEqual(201);
        await expect(response.data.books[response.data.books.length - 1].isbn).toEqual(ISBN);

        //get user books check the added book ISBN
        const userInfoResponse = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG getUser last isbn in books ${userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn}`)
        await expect(userInfoResponse.status).toEqual(200);
        await expect(userInfoResponse.data.books[userInfoResponse.data.books.length - 1].isbn).toEqual(ISBN);

        const booksDeleteResponse = await browser.call(async () => await bookstoreService.delete(booksDELETE(userId), {}, headersBarierToken(token)))
        console.log(`LOG bookDELETE response keys ${Object.keys(booksDeleteResponse)}`)
        await expect(await booksDeleteResponse.status).toEqual(204);
        await expect(await booksDeleteResponse.statusText).toEqual('No Content');

        // user book list is empty
        const infoUserBooksResponse = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG books list length ${infoUserBooksResponse.data.books.length}`)
        await expect(infoUserBooksResponse.status).toEqual(200);
        await expect(infoUserBooksResponse.data.books.length).toEqual(0);

        //delete user
        const deleteUserResponse = await browser.call(async () => await bookstoreService.delete(userGET(userId), {}, headersBarierToken(token)))
        console.log(`LOG status ${deleteUserResponse.status}`)
        await expect(await deleteUserResponse.status).toEqual(204);
        await expect(await deleteUserResponse.statusText).toEqual('No Content');
    }
}

export default new BookstoreSteps();