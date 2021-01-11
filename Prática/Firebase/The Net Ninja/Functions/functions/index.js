const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // http request 1
// exports.randomNumber = functions.https.onRequest((req, res) => {
//   const number = Math.round(Math.random() * 100);
//   res.send(number.toString());
// });

// // http request 2
// exports.toTheDojo = functions.https.onRequest((req, res) => {
//   res.redirect("https://www.thenetninja.co.uk");
// });

// // http callable function
// exports.sayHello = functions.https.onCall((data, context) => {
//   const name = data.name;
//   return `hello ${name} :)`;
// });

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate((user) => {
  return admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete((user) => {
  const doc = admin.firestore().collection("users").doc(user.uid);
  doc.delete();
});

// http callable function (adding tutorial request)
exports.addRequest = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "Only authenticated users can add requests"
    );
  }

  if (data.text.length > 30) {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "Request must be 30 characters or less"
    );
  }

  return admin.firestore().collection("requests").add({
    text: data.text,
    upvotes: 0,
  });
});
