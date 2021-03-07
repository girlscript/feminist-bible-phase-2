# Backend

This sub-dir hosts the back-end part of feminist bible. Below is the current
project structure. Most of the dirs are self-explanatory. Feel free to rise an
issue if you find anything wrong

```
.
├── app.js
├── controllers
│   ├── adminController.js
│   └── authController.js
|   └── forumController.js
|   └── orgController.js
|   └── projectController.js
|   └── storyController.js
|   └── userController.js

├── .env
├── .env.example
├── .gitignore
├── database
    └── models
    │   └── adminModel.js
    │   └── forumPostCommentModel.js
    │   └── forumPostModel.js
    │   └── orgModel.js
    │   └── postModel.js
    │   └── projectModel.js
    │   └── storyModel.js
    │   └── userModel.js
    └── index.js

├── package.json
├── README.md
├── routes
│   ├── adminRoutes.js
│   └── authRoutes.js
│   └── forumRoutes.js
│   └── orgRoutes.js
│   └── projectRoutes.js
│   └── storyRoutes.js
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

### How to Download & Install MongoDB

## Step 1 — Download the MongoDB MSI Installer Package

Head over https://www.mongodb.com/try/download/community and download the current version of MongoDB. Make sure you select MSI as the package you want to download.

## Step 2 — Install MongoDB with the Installation Wizard

A. Make sure you are logged in as a user with Admin privileges. Then navigate to your downloads folder and double click on the .msi package you just downloaded. This will launch the installation wizard.
B. Click Next to start installation.
C. Accept the licence agreement then click Next.
D. Select the Complete setup.
E. Select “Run service as Network Service user” and make a note of the data directory, we’ll need this later.
F. We won’t need Mongo Compass, so deselect it and click Next.
G. Click Install to begin installation.
F. Hit Finish to complete installation.

## Step 3— Create the Data Folders to Store our Databases

A. Navigate to the C Drive on your computer using Explorer and create a new folder called data here.
B. Inside the data folder you just created, create another folder called db.

## Step 4 — Setup Alias Shortcuts for Mongo and Mongod

Once installation is complete, we’ll need to set up MongoDB on the local system.
A. Open up your Hyper terminal running Git Bash.
B. Change directory to your home directory with the following command:
cd ~
C. Here, we’re going to create a file called .bash_profile using the following command:
touch .bash_profile
D. Open the newly created .bash_profile with vim using the following command:
vim .bash_profile
E. In vim, hit the I key on the keyboard to enter insert mode.
F. In your explorer go to C → Program Files → MongoDB → Server
Now you should see the version of your MongoDB.
G. Paste in the following code into vim, make sure your replace the 4.0 with your version that you see in explorer
alias mongod="/c/Program\ files/MongoDB/Server/4.0/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe"
F. Hit the Escape key on your keyboard to exit the insert mode. Then type
:wq!
to save and exit Vim.

## Step 5 — Verify That Setup was Successful

A. Close down the current Hyper terminal and quit the application.
B. Re-launch Hyper.
C. Type the following commands into the Hyper terminal:
mongo --version

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
