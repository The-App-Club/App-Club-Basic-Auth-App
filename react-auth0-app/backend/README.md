- Ref
  - [auth0-express-js-sample](https://github.com/auth0-blog/auth0-express-js-sample)
  - [react-userfront-app](https://github.com/GRI-Inc/App-Club-Basic-Auth-App/tree/main/react-userfront-app)
  - [firebase hosting functions](https://firebase.google.com/docs/hosting/functions?hl=ja)

## Set Up

```bash
$ firebase login
```

## Initialize

```bash
$ firebase init functions

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/gri-user/appclub-wrksp/App-Club-Basic-Auth-App/react-auth0-app/backend


=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: something (something)
i  Using project something (something)

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? No

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

## Serve Dev

```bash
$ cd functions
$ yarn serve
```

## Deploy
既に関数がある場合は洗い替えするかと聞かれるが、残したいので、Noと答える

```bash
$ cd functions
$ time yarn deploy
yarn run v1.22.18
warning package.json: No license field
$ firebase deploy --only functions

=== Deploying to 'something'...

i  deploying functions
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
i  functions: Loaded environment variables from .env.
i  functions: preparing functions directory for uploading...
i  functions: packaged /home/gri-user/appclub-wrksp/App-Club-Basic-Auth-App/react-auth0-app/backend/functions (33.83 KB) for uploading
✔  functions: functions folder uploaded successfully

The following functions are found in your project but do not exist in your local source code:
        addMessage(asia-northeast1)
        cool(asia-northeast1)
        getMessage(asia-northeast1)

If you are renaming a function or changing its region, it is recommended that you create the new function first before deleting the old one to prevent event loss. For more info, visit https://firebase.google.com/docs/functions/manage-functions#modify

? Would you like to proceed with deletion? Selecting no will continue the rest of the deployments. No
i  functions: creating Node.js 16 function bebop(asia-northeast1)...
✔  functions[bebop(asia-northeast1)] Successful create operation.
Function URL (bebop(asia-northeast1)): https://asia-northeast1-something.cloudfunctions.net/bebop
i  functions: cleaning up build files...

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/something/overview
Done in 137.66s.

real    2m17.841s
user    0m6.100s
sys     0m0.843s
```

## Check After Deploy

```bash

```

## Clean Up

```bash
$ cd functions
$ time firebase functions:delete bebop --region asia-northeast1
```