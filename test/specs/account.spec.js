import accountSteps from '../../steps/account.steps'

describe('Account test suite', () => {

    it('create new user with success', async () => {
        await accountSteps.createNewUser()
    })

    it('create existing user with error message', async () => {
        await accountSteps.createExistingUser()
    })

    it('generate token', async () => {
        await accountSteps.generateToken()
    })

    it('fail to generate token', async () => {
        await accountSteps.failToGenerateToken()
    })

    it('authorize user', async () => {
        await accountSteps.aгthorizedUser()
    })

    it('fail to authorize user', async () => {
        await accountSteps.failAгthorizeUser()
    })

    it('get user by UUID', async () => {
        await accountSteps.getUserByUUID()
    })

    it('delete user by UUID', async () => {
        await accountSteps.deleteUserByUUID()
    })

});