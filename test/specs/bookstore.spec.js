import bookstoreSteps from '../../steps/bookstore.steps'


describe('Book store suite', () => {

    it('create new user with success', async () => {
        await bookstoreSteps.getBooks()
    })

    // it('create existing user with error message', async () => {
    //     await accountSteps.createExistingUser()
    // })

    // it('authorize user', async () => {
    //     await accountSteps.login()
    // })

    // it('fail to authorize user', async () => {
    //     await accountSteps.failLogin()
    // })

    // it('generate token', async () => {
    //     await accountSteps.generateToken()
    // })

    // it('fail to generate token', async () => {
    //     await accountSteps.failToGenerateToken()
    // })

    // it('get user bu UUID', async () => {
    //     await accountSteps.getUserByUUID()
    // })

});