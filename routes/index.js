var express = require("express");
var router = express.Router();
var MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/data", (req, res) => {
  myMongoLib
    .getDocs()
    .then(docs => {
      console.log("docs");
      res.send(docs);
    })
    .catch(err => res.send(req.toString()));
});

router.post("/insert", (req, res) => {
  let body = req.body;
  myMongoLib
    .insertDocument(body)
    .then(() => res.send({ msg: "Inserto" }))
    .catch(err => res.send({ err: true, msg: err }));
});

module.exports = router;
