"use strict";

const { updateDoc, increment, query, where, collection, getDocs, limit} = require("firebase/firestore");
const { app, db, doc, setDoc } = require("../db");


async function updateDonations(amount, id){
  const donations = collection(db, "donations");
      const snapshot = await getDocs(query(donations, where("user", "==",id)))
      
      snapshot.forEach(function(document) {
              console.log(document.id, " => ", document.data());
              updateDoc(document.ref, {referals:document.data().referals + amount, total: document.data().donations+document.data().referals});
          });
}
async function getUser(id){
  const users = collection(db, "users");
      const snapshot = await getDocs(query(users, where("uid", "==", id ), limit(1)))
      
      let response;
      snapshot.forEach(function(document) {
              console.log(document.id, " => ", document.data());
              response = document.data()["username"]
          });
      return response;
}

const addOneToRefferral = async (req, res, next) => {
  // Test: http://localhost:8080/descargar/referral/?id=OKxszO5DwlZyOKVbVF9021ZIGSm1
  console.log("id: " + req.query.id);
  const userData = await getUser(req.query.id);
  const updateData = await updateDonations(1, userData);
  console.log(userData);
  // try {
  //   const reff = doc(db, "donations", req.query.id);
  //   await updateDoc(reff, {
  //     referals: increment(1),
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  res.redirect("https://play.google.com");
};

module.exports = {
  addOneToRefferral,
};
