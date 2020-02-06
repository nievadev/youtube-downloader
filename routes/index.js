const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render("index");
});

router.post("/", (request, response) => {
    response.render("index");
    console.log(request.body.url);
});

module.exports = router;
