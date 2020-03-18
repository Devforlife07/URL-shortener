const validUrl = require("valid-url");
const shortid = require("shortid");
const express = require("express")
const mongoose = require("mongoose");
const urlmodel = require("../model/url");
exports.shorturl = async (req, res) => {
    const {
        longurl
    } = req.body;
    const baseUrl = process.env.BASEURL;
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid Base Url");
    }
    //CREATE URL CODE
    const urlcode = shortid.generate();
    if (validUrl.isUri(longurl)) {
        try {
            let url = await urlmodel.findOne({
                longUrl: longurl
            });

            if (url) {
                return res.status(200).render("get", {
                    data: url.shortUrl
                });
            } else {
                const shorturl = baseUrl + "/" + urlcode;
                console.log(shorturl)
                url = new urlmodel({
                    longUrl: longurl,
                    shortUrl: shorturl,
                    urlcode,
                    date: new Date()
                });
                await url.save();

                return res.render("get", {
                    data: url.shortUrl
                })
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
exports.get = (req, res) => {

}