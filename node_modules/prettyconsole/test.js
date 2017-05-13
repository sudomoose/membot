'use strict';

var expect = require('chai').expect;
var prettyLog = require('./index');
var moment = require('moment');
var chalk = require('chalk');

/*var output = */console.log(prettyLog('Status set', false, false));
//expect (output).to.equal(`${chalk.bgBlue(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] LOG`)} ${chalk.white(`Status set`)}`);
