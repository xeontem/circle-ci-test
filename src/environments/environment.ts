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


// curl -X POST -H "Authorization: AIzaSyBZKj2TXF1S12liuUSV7uILNqqzq1jnQlc" -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "FCM Message",
//     "body": "This is an FCM Message",
//   },
//   "token": "fjkXdR05TEw:APA91bHVjRfFaPv2fMhHB_xcpxr7uzNler78ZTei59C0MhEHii62OxiReMXFvbDimi8S7NrMSvCVG8IdLC-lAU7lgEQDJQn6Sn_wu2OfYrfcA3-P8m-CfTGGJhfxtaft2BcVsflpAH3W"
// }' "https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send HTTP/1.1"
