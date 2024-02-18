<br />
<p align="center">
  <h3 align="center">Quiz App Backend</h3>
  <p align="center">
    <a href="https://github.com/AnandaFPP/Quiz-app-BE.git"><strong>Explore the docs »</strong></a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
  - [Related Project](#related-project)

# About The Project

Quiz App is a backend API for a quiz application that provides essential functionalities for user authentication and authorization. The API includes features for user registration, login, and token generation. It serves as the backend infrastructure to securely manage user accounts and authentication tokens for the Quiz App frontend.

## Built With

These are the technologies and libraries used in building the Quiz App backend:

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [ElephantSQL](https://www.elephantsql.com/)
- [Json Web Token (JWT)](https://jwt.io)

# Installation

Follow these steps to run the server locally:

1. Clone this repository

```sh
git clone https://github.com/AnandaFPP/Quiz-app-BE.git
```

2. Change directory to Quiz-app-BE

```sh
cd quiz-app-BE
```

3. Install all of the required modules

```sh
npm install
```

4. Create ElephantSQL database in the website below

```sh
https://www.elephantsql.com/
```

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Ensure to provide necessary credentials for authentication and authorization
- Example: DB_CONNECTION_STRING, JWT_SECRET, etc.
```

6. Run this command to run the server

```sh
npm run start
```

- Or run this command for running in development environment

```sh
npm run dev
```

- Run this command for debugging and finding errors

```sh
npm run lint
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [ElephantSQL database query](./query.sql)


## Related Project

:rocket: [`Backend Quiz App`](https://github.com/AnandaFPP/Quiz-app-BE.git)

:rocket: [`Frontend Quiz App`](https://github.com/AnandaFPP/Quiz-app.git)

:rocket: [`Demo Quiz App`](https://github.com/AnandaFPP/Quiz-app-BE.git)

Project link : [https://github.com/AnandaFPP/Quiz-app-BE.git](https://github.com/AnandaFPP/Quiz-app-BE.git)
