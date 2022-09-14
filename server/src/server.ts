import express from "express";

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: "Abúncio 1" },
    { id: 2, name: "Abúncio 2" },
    { id: 3, name: "Abúncio 3" },
  ]);
});

app.listen(3333);