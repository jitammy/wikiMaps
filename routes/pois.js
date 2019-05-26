"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("pois")
      .then((results) => {
        res.json(results);
    });
  });

  router.post("/new", (req, res) => {
    let poi = {
      lat: req.body.lat,
      lng: req.body.lng,
      title: req.body.title,
      desc: req.body.desc,
      map_id: req.body.map_id
      //user_id
    }

    knex("pois")
      .returning('id')
      .insert(poi)
      .then((ids) => {
        res.json({id: ids[0]});
      })
  })

  return router;

}
