'use strict';

const express = require('express');
const router = express.Router();

const api_key = 'key-bcff8155770fa6e5d9c9ed49ee8906ef';
const domain = 'www.mattstuhring.com';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/mail', (req, res, next) => {
  const { name, from, subject, text } = req.body;
  const to = 'whereyouatmatt@gmail.com';

  var data = { from, to, subject, text };

  mailgun.messages().send(data, function (error, body) {
    console.log(body, 'this is the body');
  });

});

module.exports = router;
