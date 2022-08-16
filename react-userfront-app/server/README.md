- Ref
  - [userfront-react-tutorial](https://github.com/codebubb/userfront-react-tutorial)

## Set Up

Firebase Functionsを初期化

```bash
$ cd server
$ firebase init functions

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/gri-user/gri-wrksp/App-Club-Basic-Auth-App/react-userfront-app/server


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
? Do you want to install dependencies with npm now? Yes

> protobufjs@6.11.2 postinstall /home/gri-user/gri-wrksp/App-Club-Basic-Auth-App/react-userfront-app/server/functions/node_modules/protobufjs
> node scripts/postinstall

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN @firebase/database-compat@0.1.7 requires a peer of @firebase/app-compat@0.x but none is installed. You must install peer dependencies yourself.

added 226 packages from 203 contributors and audited 226 packages in 24.085s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


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
✔  functions: required API cloudfunctions.googleapis.com is enabled
✔  functions: required API cloudbuild.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged /home/gri-user/gri-wrksp/App-Club-Basic-Auth-App/react-userfront-app/server/functions (42.81 KB) for uploading
✔  functions: functions folder uploaded successfully

The following functions are found in your project but do not exist in your local source code:
        addMessage(asia-northeast1)
        getMessage(asia-northeast1)

If you are renaming a function or changing its region, it is recommended that you create the new function first before deleting the old one to prevent event loss. For more info, visit https://firebase.google.com/docs/functions/manage-functions#modify

? Would you like to proceed with deletion? Selecting no will continue the rest of the deployments. No
i  functions: creating Node.js 16 function helloWorld(asia-northeast1)...
✔  functions[helloWorld(asia-northeast1)] Successful create operation.
Function URL (helloWorld(asia-northeast1)): https://asia-northeast1-something.cloudfunctions.net/helloWorld
i  functions: cleaning up build files...

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/something/overview
Done in 144.21s.

real    2m24.397s
user    0m8.047s
sys     0m1.259s
```

## Check After Deploy

```bash
$ curl -sL 'https://asia-northeast1-something.cloudfunctions.net/helloWorld' | awk 4
Hello from Firebase!
```

## Clean Up

```bash
$ cd functions
$ time firebase functions:delete helloWorld --region asia-northeast1
? You are about to delete the following Cloud Functions:
        helloWorld(asia-northeast1)
  Are you sure? Yes
i  functions: deleting Node.js 16 function helloWorld(asia-northeast1)...
✔  functions[helloWorld(asia-northeast1)] Successful delete operation.
i  functions: cleaning up build files...

real    0m14.752s
user    0m2.922s
sys     0m0.347s
```