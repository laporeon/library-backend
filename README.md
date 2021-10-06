<h1 align="center">Library Management system</h1>

## 📋 About

This is a challenge from <a href="https://www.devchallenge.com.br/">DevChallenge</a>. It's an API that simulates a management system for a library. You can see all details for the challenge <a href="https://www.devchallenge.com.br/challenges/5f0b43f5a5fec43156149043/details">here</a>.

--- 
### 🚀 Technologies
- Node.js
- Express
- Mongoose

--- 

### 🛠️ Install
```bash
# Clone the repository
git clone https://github.com/laporeon/library-backend

# Navigate to project folder
cd library-backend

# Install the dependencies
npm i

# Start server
npm start

```
Server will start at port :3000 - access `http://localhost:3000`

--- 

### 📌 Routes

**[GET]** /obras : Lists all the books stored at database.

**[POST]** /obras : Create and store at database a new book.

**[PUT]** /obras/:id : Edit informations from a stored book based on its ID.

**[DELETE]** /obras/:id : Delete a book from database using its ID as a parameter.

--- 

### 💻 Preview

<h4>[GET]</h6>

![get](https://user-images.githubusercontent.com/34722707/136246114-8c6c6ffc-150d-4c9c-8de1-7e83fee70d95.png)


<h4>[POST]</h6>

![post](https://user-images.githubusercontent.com/34722707/136246111-30877022-0fdd-4c1a-b17c-451867ca6ea7.png)

<h4>[PUT]</h6>

![put](https://user-images.githubusercontent.com/34722707/136246117-9a85ddaa-5e96-49ac-b0a2-6197d4b250c2.png)

<h4>[DELETE]</h6>

![delete](https://user-images.githubusercontent.com/34722707/136246109-ca79ab1a-fdd5-45cd-ad83-c2b2239d0f4d.png)


