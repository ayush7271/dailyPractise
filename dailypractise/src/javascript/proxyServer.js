const express = require("express");
const axios = require("axios");
const cors = require("cors");

  const app = express();
  app.use(cors()); // Allow all origins (optional)
  app.use(express.json());

  app.post("/proxy", async (req, res) => {
    console.log('api call happen')
    try {
      const response = await axios.post("https://www.nobroker.in/autologin", req.body, {
        headers: {
          Referer: "https://www.nobroker.in",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(response,"response.data")
      res.json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  });

  app.listen(3001, () => console.log("Proxy running on port 3002"));
