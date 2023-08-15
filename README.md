# ExpressAuth-JWT 

This Node.js project is a basic authentication system using JSON Web Tokens (JWT) implemented using Express. It allows users to register, log in, and access a dashboard with authorized data using JWT-based authentication.

## Getting Started

You have two options to experience this project:

### Option 1: Visit the Deployed Site

You can explore the deployed version of this project by visiting [project-site-url](https://example.com). 

### Option 2: Clone and Run Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   To configure the application's environment, create a `config` folder in the root directory of the project. Inside the `config` folder, create a file named `config.env`. In the `config.env` file, define the following environment variables:

   ```plaintext
   # config/config.env

   # Define the port on which the server will run (default: 3000)
   PORT=3000

   # Set a secret key for JWT token generation (e.g., replace 'somethingimpossibletoguessandlong' with your own secret)
   JWT_SECRET=somethingimpossibletoguessandlong
   ```

   Replace `'somethingimpossibletoguessandlong'` with a long and secure string that is impossible to guess. This secret is used to sign and verify JWT tokens, adding an essential layer of security to your authentication system.

4. Start the server:

   ```bash
   npm start
   ```

   The server will start on the specified port (default is 3000). You can access the API using `http://localhost:<port>`.

## Project Structure

- `app.js`: Main entry point of the application. Sets up the Express app, middleware, and starts the server.
- `controllers/main.js`: Contains controller functions for user login and dashboard access.
- `middleware/auth.js`: Defines the authentication middleware to verify JWT tokens and protect routes.
- `middleware/error-handler.js`: Handles errors and sends appropriate responses.
- `middleware/not-found.js`: Handles routes that are not found and sends a 404 response.
- `routes/main.js`: Defines API routes for login and dashboard access.
- `config/config.env`: Configuration file for environment variables.
- `db.js`: Handles database connection using Mongoose.
- `errors/`: Directory containing custom error classes.
  - `custom-error.js`: Custom error class for extending error functionality.
  - `bad-request.js`: Error class for bad request responses.
  - `unauthenticated.js`: Error class for unauthenticated responses.

## API Endpoints

### POST /api/v1/login

User login endpoint. Requires a valid username and password in the request body.

#### Request Body

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

#### Response

```json
{
  "msg": "user created",
  "token": "your_generated_jwt_token"
}
```

### GET /api/v1/dashboard

Dashboard access endpoint. Requires a valid JWT token in the `Authorization` header.

#### Request Headers

```plaintext
Authorization: Bearer your_jwt_token
```

#### Response

```json
{
  "msg": "Hello, your_username",
  "secret": "Here is your authorized data, your lucky number is <random_number>"
}
```

## Dependencies

- `express`: Web framework for Node.js.
- `express-async-errors`: Handles asynchronous errors in Express.
- `dotenv`: Loads environment variables from a `.env` file.
- `jsonwebtoken`: Creates and verifies JWT tokens.
- `mongoose`: MongoDB object modeling tool.

## Author

We can connect on Twitter, 
[Favour Markson](https://twitter.com/MarksonFavour1)

## Acknowledgments

I would like to express my heartfelt gratitude to my dedicated tutor, [John Smilga](https://johnsmilga.com/), for their invaluable guidance and support throughout the development of this project. Their expertise and insights played a significant role in shaping this application. 

