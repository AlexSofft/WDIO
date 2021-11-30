This project is meant to test DemoQa BookStore API

1) install npm (there should be node_modules folder to run the tests)
2) use "npx cypress open" command to open cypress runner
3) choose a test you want to run and click on a spec file from the list
4) you may run all tests by pressing "Run X integration specs" in the runner

Account

1. 'POST' /Account/v1/User check that user is created successfully (positive)
	send user name and password of a new user as payload
	expected result:
	status code is 201 created
	returns new user object (userId, username, array of books)
	
2. 'POST' /Account/v1/User check that handles "user exists" error properly (negative)
	send user name and password of an already existing user
	expected result:
	status code is 406 not acceptable
	returns "User exists!" message
	
	
3. 'POST' /Account​/v1​/GenerateToken check that auth token is generated (positive)
	send  user name and password of an existing user as payload
	expected result:
	status code is 200
	should have token in response body
	should have status "Success" in response body
	should have result "User authorized successfully"
	
	
4. 'POST' /Account​/v1​/GenerateToken check that handles error when there are no credentials in the payload (negative)
	send an empty payload
	expected result:
	status code is 400 bad request
	returns "UserName and Password required." message
	



5. 'POST' /Account/v1/Authorized check that user is authorized (positive)
	send user name and password of authorized user as payload 
	expected result: 
	status code is 200
	returns true
	
6. 'POST' /Account/v1/Authorized check that handles "user not found" error (negative)
	send user name and password of non-existing user as payload
	expected result:
	status code is 404
	returns "User not found!" message
	
	


7. 'GET' /Account/v1/User/{UUID} check that returns user info (positive)
	send a request with user id of an already existing user in the end-point
	expected result:
	status code is 200
	returns user object (userId, username, array of books)
	
8. 'GET' /Account/v1/User/{UUID} check that handles "unauthorized" error (negative)
    send a request with user id of not yet authorized user in the end-point
	expected result:
	status code is 401 unauthorized
	returns "User not authorized!" message



	
9. 'DELETE' /Account/v1/User/{UUID}	check that user was deleted (positive)
	send a request with user id of an already existing user in the end-point
	send another request to get user info

	expected result:
	status code is 204 no content
	user info request "User not found!" returns

10. 'DELETE' /Account/v1/User/{UUID} check that handles "unauthorized" error (negative)
	send a request with user id of not yet authorized user in the end-point
	expected result:
	status code is 401 unauthorized
	returns "User not authorized!" message



Books

1. 'GET' /BookStore/v1/Books check that returns an array of books existing in the shop (positive)
	send an empty request
	expected result:
	status code is 200
	should return an object with info on books

	
	

2. 'GET' /BookStore/v1/Book check that returns info on a book by ISBN (positive)
	send a request with ISBN of a book existing in the shop as query ( Book?ISBN={ISBN} )
	expected result:
	status code is 200
	should return an object with info on the book
	
3. 'GET' /BookStore/v1/Book check that handles "not found" error (negative)
	send a request with some random ISBN, book does not exist in the shop as query ( Book?ISBN={ISBN} )
	expected result:
	status code is 400 bad request
	returns "ISBN supplied is not available in Books Collection!" message
	
	
	
4. 'POST' /BookStore​/v1​/Books check that the book is added to User's Collection (positive)
	send a request with user id and ISBN of a book in the shop as payload
	{"userId": "string", "collectionOfIsbns": [{"isbn": "string"}]}
	send another request to get user info

	expected result:
	status code is 201 created
	returns books object with ISBN of the book added
	user info response should contain the book added in books array
	
5. 'POST' /BookStore​/v1​/Book check that handles "already present" error (negative)
	send a request with user id and ISBN of a book already added to the cart as payload
	{"userId": "string", "collectionOfIsbns": [{"isbn": "string"}]}
	
	expected result:
	status code is 400 bad request
	returns "ISBN already present in the User's Collection!" message




6. 'PUT' /BookStore​/v1​/Books​/{ISBN} check that book is replaced successfully (positive)
  preconditon: add a book to the cart
	send a request with ISBN of the book added to the cart in the end-point
	pass user id and ISBN of a book you want to replace with to the payload
	send another request to get user info

	expected result:
	status code is 200
	returns a payload containing userId, username, info on a new book
	user info response should contain an updated book in books array


7. 'PUT' /BookStore​/v1​/Books​/{ISBN} check that handles "not available" error (negative)
	send a request with ISBN of a book not added to the cart in the end-point
	pass user id and ISBN of a book you want to replace with to the payload
	expected result:
	status code is 400 bad request
	returns "ISBN supplied is not available in User's Collection!" message
	
	
	
	
8. 'DELETE' /BookStore/v1/Books check that all books are deleted from the cart (positive)
	preconditon: book or books are in the cart
	send a request with user id as query ( Books?UserId={{userID}} )
	send another request to get user info

	expected result:
	status code is 204 no content
	books array in user info response should be empty 


9. 'DELETE' /BookStore/v1/Books check that handles "unauthorized" error (negative)
	send a request with id of unathorized user as query ( Books?UserId={{userID}} )
	expected result:
	status code is 401 unauthorized
	returns "User not authorized!" message
	



10. 'DELETE' /BookStore/v1/Book check that the book is deleted from the cart (positive)
	preconditon: book is in the cart
	pass ISBN of the book in the cart and user id to the payload
	send a request
	send another request to get user info

	expected result:
	status code is 204 no content
	books array in user info response should be empty 

	
11. 'DELETE' /BookStore/v1/Book check that handles "not available" error (negative)
	pass user id and ISBN of a book, which is not in the cart, to the payload
	send a request
	expected result:
	status code is 400 bad request
	returns "ISBN supplied is not available in User's Collection!" message
	
