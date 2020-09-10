# backend

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

### contributing

1. Fork this repository in your own github profile
2. clone the forked repository
3. make changes, commit and push
4. make a pull request

> use yarn, because it is [faster](https://www.cubui.com/blog/javascript/why-yarn-is-better-than-npm/) then npm

### usage

1. `cd` to locally locally cloned repository
2. `cd` to back-end dir (i.e. fb-phase2-backend)
3. run `yarn`. this should install all required dependencies
4. copy `.env.example` to `.env` and fill it with appropriate details
5. start project with `yarn dev`

#### database

this project uses MongoDB as primary database. you can either install mongodb
locally, or use database-as-a-service from MLab or similar providers. choice is
yours
