// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZKj2TXF1S12liuUSV7uILNqqzq1jnQlc",
    authDomain: "circle-ci-test-31dfc.firebaseapp.com",
    databaseURL: "https://circle-ci-test-31dfc.firebaseio.com",
    projectId: "circle-ci-test-31dfc",
    storageBucket: "circle-ci-test-31dfc.appspot.com",
    messagingSenderId: "350049236638"
  }
};
