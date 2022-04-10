post('http://localhost:5000/api/auth/register/shelter', json={'email': 'abcde', 'password': 'abc', 'name': 'Shelter1','phone_number': '123456789'})
post('http://localhost:5000/api/auth/register/client', json={'email': 'abcd', 'password': 'abc', 'name': 'John', 'surname': 'Doe' })

post('http://localhost:5000/api/auth/login', json={'email': 'abcd', 'password': 'abc'})
post('http://localhost:5000/api/auth/register/client', json={'email': 'abcd', 'password': 'abc', 'name': 'John', 'surname': 'Doe', 'phone_number': '123456789'})