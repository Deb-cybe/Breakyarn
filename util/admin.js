var admin = require("firebase-admin");

var serviceAccount = require("../newsletter-3ccb1-firebase-adminsdk-lvpud-be2d78e805.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };
