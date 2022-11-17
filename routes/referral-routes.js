const express = require("express");
const { addOneToRefferral } = require("../controllers/ReferralController");

const router = express.Router();

router.put("/referral/:id", addOneToRefferral);

module.exports = {
  routes: router,
};
