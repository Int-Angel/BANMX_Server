"use strict";

const { app, db } = require("../db");
const Referral = require("../models/Referral");
//const firestore = firebase.firestore();

const addOneToRefferral = async (req, res, next) => {
  console.log("Add one to referral");
};

module.exports = {
  addOneToRefferral,
};
