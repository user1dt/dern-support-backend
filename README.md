
# Learn Express

A beginner-friendly guide to setting up a backend with Express and Prisma.

## Getting Started

Follow these steps to get your backend up and running:

### Prerequisites

- Node.js installed on your machine
- Basic understanding of JavaScript and npm

### Installing

1. **Initialize npm:**
   ```bash
   npm init
   ```

2. **Create an index.js file:**
   ```bash
   touch index.js
   ```

3. **Install Express:**
   ```bash
   npm install express
   ```

4. **Install nodemon (optional, for automatic server reloading):**
   ```bash
   npm install nodemon --save-dev
   ```





### Setting Up Express

1. **Set up the server:**

   ```javascript
   // index.js
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

2. **Define Routes and Controllers:**

   - Create a `routes` folder for defining routes.
   - Create a `controllers` folder for handling business logic.
   

3.  **Run Your Server:**
   ```bash
   npm run dev
   ```



### Integrating Prisma for Database Management

1. **Install Prisma:**
   ```bash
   npm install prisma --save-dev
   ```

2. **Initialize Prisma with mysql:**
   ```bash
   npx prisma init --datasource-provider mysql
   ```

3. **Define Models and Run Migrations:**
   
   - Define your models in the `schema.prisma` file.
   - Generate a migration:
     ```bash
     npx prisma migrate dev --name init
     ```

4. **Install Prisma Client:**
   ```bash
   npm install @prisma/client
   ```

## For more About Prisma, Follow Prisma documentation:
https://www.prisma.io/docs/getting-started/quickstart
  


### Configuration and Middleware

1. **Set up configuration files:**

   - Create a `config` folder for configuration files.
   - Example: `prisma.js` for Prisma configuration.

2. ###  `prisma.js` Prisma Configuration

```javascript
//prisma.js
const {PrismaClient} = require("@prisma/client")

const prisma  = new PrismaClient();

module.exports = prisma;

```



3. **Add Middleware:**

   ```javascript
   // index.js
   const express = require('express');
   const app = express();

   // Middleware
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   // Routes
   // Define your routes here

   // Start the server
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```


### Additional configuration and Informations


## `package.json` Configuration

```json
{
  "name": "express-teach",
  "version": "1.0.0",
  "description": "A beginner-friendly guide to setting up a backend with Express and Prisma.",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^5.15.1",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.3",
    "prisma": "^5.15.0"
  }
}
```


# Package Descriptions

- **bcrypt**: Library for hashing passwords securely.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file into `process.env`.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWTs - usefull For Auth).
- **multer**: Middleware for handling multipart/form-data, primarily used for file uploads(Useful for file uploads).





### File Structure

Organize your project files as follows:

```
- config/
  - prisma.js
- controllers/
- middleware/
- routes/
- storage/
- index.js
- package.json
- .env
```

### Optional Folders

- `helpers/`: Reusable helper functions.
- `utils/`: Utility functions.
- `models/`: Database models.




## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.


## License

This project is licensed under the [MIT License](LICENSE).

# dern-support-backend
# dern-support-back
