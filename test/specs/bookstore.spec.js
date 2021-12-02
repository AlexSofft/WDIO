import bookstoreSteps from '../../steps/bookstore.steps'

describe('Books suite', () => {

    it('get books', async () => {
        await bookstoreSteps.getBooks()
    })

    it('get book', async () => {
        await bookstoreSteps.getBook()
    })

    it('add books', async () => {
        await bookstoreSteps.addBooks()
    })

    it('replace book', async () => {
        await bookstoreSteps.replaceBook()
    })

    it('delete book', async () => {
        await bookstoreSteps.deleteBookByUUID()
    })

    it('delete all books', async () => {
        await bookstoreSteps.deleteAllBooksByUUID()
    })

});