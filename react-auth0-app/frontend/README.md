- Ref
  - [auth0-react-sample](https://github.com/auth0-blog/auth0-react-sample)

## Set Up

```bash
$ firebase login

$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/gri-user/appclub-wrksp/App-Club-Basic-Auth-App/auth0-frontend-app

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up Git
Hub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: something (something)
i  Using project something (something)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File public/index.html already exists. Overwrite? No
i  Skipping write of public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

## Add Project Alias

```bash
$ firebase use --add
? Which project do you want to add? something
? What alias do you want to use for this project? (e.g. staging) scroll

Created alias scroll for something.
Now using alias scroll (something)
```

## Build

```bash
$ time yarn build
```

## Change Deploy Target

```bash
$ firebase target
Resource targets for something:


$ firebase use scroll
Now using alias scroll (something)

$ firebase target
Resource targets for something:

```

## Deploy

```bash
$ time firebase deploy

=== Deploying to 'something'...

i  deploying hosting
i  hosting[something]: beginning deploy...
i  hosting[something]: found 11 files in build
✔  hosting[something]: file upload complete
i  hosting[something]: finalizing version...
✔  hosting[something]: version finalized
i  hosting[something]: releasing new version...
✔  hosting[something]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/something/overview
Hosting URL: https://something.web.app

real    0m12.145s
user    0m3.805s
sys     0m0.311s
```
