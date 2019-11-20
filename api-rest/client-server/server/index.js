const express = require("express");
const noticias = require("./noticias.json");

var cors = require("cors");

var app = express();

app.use(cors());

app.get("/api/v1/noticias", (req, res) => {
  console.log(req.query);

  let response = noticias;
  if (req.query.id) {
    response = noticias.filter(el => el.id == req.query.id);
  }

  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: response
  });
});


app.get("/api/v1/noticias/full-descriptions", (req, res) => {
  const MAX_LENGTH = 20;
  const response = noticias.filter(el => el.description.legth > MAX_LENGTH);

  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: noticias
  });
});

app.get("/api/v1/noticias/titles", (req, res) => {

  const response = noticias.map(el => el.title);

  res.status(200).send({ succes: true, response })//Status 200 todo ok

});



const port = 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
