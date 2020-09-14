# Backend

This sub-dir hosts the back-end part of feminist bible. Below is the current
project structure. Most of the dirs are self-explanatory. Feel free to rise an
issue if you find anything wrong

```
.
├── app.js
├── controllers
│   ├── authController.js
│   └── userController.js
├── .env
├── .env.example
├── .gitignore
├── models
│   └── userModel.js
├── package.json
├── README.md
├── routes
│   ├── authRoutes.js
│   └── userRoutes.js
├── server.js
└── yarn.lock
```

### Contributing

1. Fork this repository in your own github profile
2. clone the forked repository
3. make changes, commit and push
4. make a pull request

> use yarn, because it is [faster](https://www.cubui.com/blog/javascript/why-yarn-is-better-than-npm/) then npm

### Usage

1. `cd` to locally locally cloned repository
2. `cd` to back-end dir (i.e. fb-phase2-backend)
3. run `yarn`. this should install all required dependencies
4. copy `.env.example` to `.env` and fill it with appropriate details
5. start project with `yarn dev`

before making a PR, make sure test cases are not failing. to run all test cases
from specs/ dir, just run `yarn test`. you shall see a test coverage report
along with passing/failing tests

#### Database

this project uses MongoDB as primary database. you can either install mongodb
locally, or use database-as-a-service from MLab or similar providers. choice is
yours

#### Status Code

- 200: OK
- 201: Created
- 204: No Content
- 400: Bad request
- 401: Unauthorised
- 404: Not found
- 500: Internal server error

### Using yarn

- install a package: `yarn add PACKAGE_NAME`
- install a package globally: `yarn global add PACKAGE_NAME`
- install all packages from package.json: `yarn`
- run a script from package.json: `yarn SCRIPT_NAME`
- run a binary from node_modules: `yarn BINARY_NAME`

... more on [yarnpkg.com](https://yarnpkg.com/)

### Code Formatting

This project uses Prettier for code formatting. Developers are expected to
format their code before pushing it to remote repository.

To make the process easier, a pre-commit hook has been added which would format
messy codes for you.
