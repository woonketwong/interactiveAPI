/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
var _ = require('underscore');
var request = require('request');

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

exports.apiRequest = function(req, res) {
	  // console.log("REQ", req.body);
		request('http://' + req.body.url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	console.log("*****response:", response.headers);
		  	console.log("*****body:", body);
		  	res.send({headers:response.headers, body:body});
		    // console.log(body); // Print the google web page.
		  } else {
		  	console.log("Error encountered:", error);
		  	res.send(500, { error: 'error' });
		  }
		})
    // res.render('index', {
    //     user: req.user ? JSON.stringify(req.user) : "null"
    // });
};
