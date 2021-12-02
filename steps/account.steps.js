import bookstoreService from '../services/bookstore.service'

const userName = 'Eric124';
const createUser = "/Account/v1/User"
const authorizeUser = "/Account/v1/Authorized"
const generateToken = "/Account/v1/GenerateToken"
const userGET = (UUID) => { return `/Account/v1/User/${UUID}` }

let userId; //UUID
let token;

const loginData = {
    "userName": `${userName}`,
    "password": "1234Tes!"
};

const falseLoginData = {
    "userName": `${userName}`,
    "password": "fail"
};

const headers = {
    "content-type": "application/json",
};

const headersBarierToken = (tkn) => {
    return {
        "content-type": "application/json",
        "Authorization": `Bearer ${tkn}`
    };
}

class AccountSteps {

    async createNewUser() {
        const response = await browser.call(async () => await bookstoreService.post(createUser, loginData, headers))
        userId = response.data.userID
        console.log(`LOG keys ${Object.keys(response.data)}`)
        console.log(`LOG create userID ${userId}`)
        await expect(response.status).toEqual(201);
        await expect(response.data.username).toEqual(userName)
    }

    async createExistingUser() {
        const response = await browser.call(async () => await bookstoreService.post(createUser, loginData, headers))
        await expect(response.response.status).toEqual(406);
        await expect(response.response.data.message).toEqual("User exists!")
    }

    async generateToken() {
        const response = await browser.call(async () => await bookstoreService.post(generateToken, loginData, headers))
        token = response.data.token
        console.log(`LOG create token ${token}`)
        await expect(response.status).toEqual(200);
        await expect(response.data.result).toEqual("User authorized successfully.");
    }

    async failToGenerateToken() {
        const response = await browser.call(async () => await bookstoreService.post(generateToken, falseLoginData, headers))
        await expect(await response.status).toEqual(200);
        await expect(response.data.result).toEqual("User authorization failed.");
    }

    //есть ли у него токен в системе (нужно сначала сгенерить токен generateToken())
    async aгthorizedUser() {
        const response = await browser.call(async () => await bookstoreService.post(authorizeUser, loginData, headers))
        console.log(`LOG authorize ${response.data}`)
        await expect(response.status).toEqual(200);
        await expect(response.data).toEqual(true);
    }

    async failAгthorizeUser() {
        const response = await browser.call(async () => await bookstoreService.post(authorizeUser, falseLoginData, headers))
        console.log(`LOG fali authorize ${response.response.data.message}`)
        await expect(response.response.status).toEqual(404);
        await expect(response.response.data.message).toEqual("User not found!")
    }

    async getUserByUUID() {
        const response = await browser.call(async () => await bookstoreService.get(userGET(userId), headersBarierToken(token)))
        console.log(`LOG getUser ${Object.keys(response.data)}`)
        console.log(`LOG getUserID ${response.data.userId}`)
        await expect(await response.status).toEqual(200);
        await expect(await response.data.username).toEqual(userName);
    }

    async deleteUserByUUID() {
        const response = await browser.call(async () => await bookstoreService.delete(userGET(userId), {}, headersBarierToken(token)))
        console.log(`LOG getUser keys ${Object.keys(response)}`)
        console.log(`LOG getUser values ${Object.values(response)}`)
        console.log(`LOG status ${response.status}`)
        await expect(await response.status).toEqual(204);
        await expect(await response.statusText).toEqual('No Content');
    }
}

export default new AccountSteps();