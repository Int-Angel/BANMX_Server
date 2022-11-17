"use strict";

const { updateDoc, increment } = require("firebase/firestore");
const { app, db, doc, setDoc } = require("../db");
const Referral = require("../models/Referral");

const addOneToRefferral = async (req, res, next) => {
  // Test: http://localhost:8080/descargar/referral/?id=OKxszO5DwlZyOKVbVF9021ZIGSm1
  console.log("id: " + req.query.id);

  try {
    const reff = doc(db, "referrals", req.query.id);
    await updateDoc(reff, {
      referidos: increment(1),
    });
  } catch (error) {
    console.log(error);
  }

  res.redirect("https://play.google.com");
};

module.exports = {
  addOneToRefferral,
};
