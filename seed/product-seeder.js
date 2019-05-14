var Product = require("../models/product");

var mongoose = require("mongoose");

// DB Config
const db = require("../config/keys").mongoURI;

mongoose.Promise = global.Promise;
//Connect to Mongo

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

var products = [
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!!",
    price: 10
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/252950/header_alt_assets_5.jpg?t=1545247725",
    title: "Rocket League® Video Game",
    description: "Rocket League® Awesome Game!!!!",
    price: 20
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/883710/header.jpg?t=1545269519",
    title: "Resident Evil 2 Video Game",
    description: "Resident Evil 2 Awesome Game!!!!",
    price: 30
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/768470/header.jpg?t=1546431068",
    title: "Battlemage VR Video Game",
    description: "Battlemage VR Awesome Game!!!!",
    price: 40
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/379430/header.jpg?t=1546611332",
    title: "Kingdom Come Video Game",
    description: "Kingdom Come Awesome Game!!!!",
    price: 50
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/872790/header.jpg?t=1544427064",
    title: "Football manager Video Game",
    description: "Football manager Awesome Game!!!!",
    price: 60
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/853200/header.jpg?t=1545829418",
    title: "Shred! 2 - Freeride Mountainbiking Video Game",
    description: "Shred! 2 Awesome Game!!!!",
    price: 70
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1544815097",
    title: "GTA 5 Video Game",
    description: "GTA 5 Awesome Game!!!!",
    price: 80
  }),

  new Product({
    imagePath:
      "https://steamcdn-a.akamaihd.net/steam/apps/203160/header.jpg?t=1536940808",
    title: "Tomb Raider Video Game",
    description: "Tomb Raider Awesome Game!!!!",
    price: 90
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done == products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
