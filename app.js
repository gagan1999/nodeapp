const express = require('express');
const cors = require("cors");
const app = express();

app.get("/no-cors", (req, res) => {
    console.info("GET /no-cors");
    res.json({
      text: "You should not see this via a CORS request."
    });
  });

app.get("/simple-cors", cors(), (req, res) => {
    res.json({
        text: "Simple CORS requests are working. [GET]"
      });
  });

const port = process.env.port || 3000;
app.listen(port,() =>{
    console.log('Deployment Project');
});

