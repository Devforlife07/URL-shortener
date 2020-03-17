const validUrl = require("valid-url");
const shortid = require("shortid");
const mongoose = require("mongoose");
const urlmodel = require("../model/url");
exports.shorturl = async (req, res) => {
  const { longurl } = req.body;
  const baseUrl = process.env.BASEURL;
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid Base Url");
  }
  //CREATE URL CODE
  const urlcode = shortid.generate();
  if (validUrl.isUri(longurl)) {
    try {
      let url = await urlmodel.findOne({
        longurl
      });
      if (url) res.status(200).send(url);
      else {
        const shorturl = baseUrl + "/" + urlcode;
        url = new urlmodel({
          longUrl: longurl,
          shortUrl: shorturl,
          urlcode,
          date: new Date()
        });
        await url.save();
        console.log(shorturl);
        console.log(longurl);
        res.send(url);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Server Error");
    }
  } else {
    res.status(401).send("Invalid Long Url");
  }
};
exports.index = async (req, res) => {
  try {
    const lurl = await urlmodel.findOne({
      urlcode: req.params.code
    });
    if (lurl) res.redirect(lurl.longUrl);
    else
      res.status(404).send({
        message: "No URL Found"
      });
  } catch (e) {
    console.log(e);
    res.send("Server Error");
  }
};
exports.home = (req, res) => {
  res.render("index");
};
