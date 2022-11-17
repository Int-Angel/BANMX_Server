const express = require("express");
const { addOneToRefferral } = require("../controllers/ReferralController");

const router = express.Router();

router.get("/referral", addOneToRefferral);

module.exports = {
  routes: router,
};
