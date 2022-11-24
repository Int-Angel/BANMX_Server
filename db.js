const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { doc, setDoc, collection } = require("firebase/firestore");
const config = require("./config");

const app = initializeApp(config.firebaseConfig);
const db = getFirestore();

module.exports = {
  app,
  db,
  doc,
  setDoc, 
  collection
};
