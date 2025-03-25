var express = require("express");
var router = express.Router();
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://maira:1234maira@package-items.zxdmt.mongodb.net/package-items?retryWrites=true&w=majority";

router.get("/", function (req, res, next) {
  console.log("here I am");
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    console.log("connected to mongo");
    const mycollection = client.db("package-items").collection("items-name");
    // insert a document to the collection:
    // mycollection.insertOne({
    //   package1: [],
    //   package2: [],
    //   package3: [],
    // });

    mycollection
      .find()
      .toArray()
      .then((results) => {
        console.log(results);
        res.send(results);
      })
      .catch((error) => console.error(error));
  });

  client.close();
});

module.exports = router;
