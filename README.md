# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```shell
yarn
```

```shell
// For starting NextJs Server run
yarn dev
```

NextJs Server will start in `localhost:3000`

Available routes are below

```shell
/app
/appmodern
/appclassic
/appminimal
/saas
/saasmodern
/saasclassic
/saasminimal
/saasminimal2
/hosting
/hostingmodern
/portfolio
/ride
/crypto
/cryptomodern
/charity
/interior
/agency
/agencymodern
/agencydigital


...
```

## Folder Structure

```shell
/packages
 /landing
```

## Stack We Have Used

- Lerna (A tool for managing JavaScript projects with multiple packages. <https://lernajs.io>)
- Yarn Workspace
- React Js and Next Js
- Styled System and Styled Components
- Firebase Deployment.

## Development

Follow the below procedure to go with the development process.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `_app.js`, `_documents.js` and `_error.js`. That mean in your `/pages` folder you will have four files `index.js`, `_app.js`, `_documents.js` and `error.js`
2. From `/landing/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/data/` folder you can delete all other folder except `App`.
5. From `/common/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

## Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

## Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

```shell
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

If you want to host the static html version of your nextjs project then run the below command to build static version

```shell
yarn next-export
```

## Running with Docker

To run the SuperProps Next.js app in docker

```shell
yarn next-export
docker build -t superprops/landing-next -f ./packages/landing/Dockerfile .
docker run -it -p 3000:3000 superprops/landing-next:latest
Open http://localhost:3000
```

## Deployment Support

### Firebase

Add your project ID at `packages/landing/.firebaserc`

Then, To deploy to your site, run the following command from the `packages/landing` directory.

```shell
yarn deploy
```

### Netlify

At first, open an account on netlify and go to `sites` tab.

Run the below command to make the project netlify deploy ready from `packages/landing`.

```shell
yarn export
```

After running the above command go to `/landing` folder. You will find a `out` folder there. Drag
and drop this `out` folder on netlify `sites` tab. Now after finishing the upload you are ready to go.
