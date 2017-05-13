'use strict';
var chalk = require('chalk');
var moment = require('moment');

module.exports = function (data, error, log) {
    if (error) {
        if (log) {
            console.log(`${chalk.bgRed(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ERR`)} ${chalk.italic(`${data}`)}`);
        } else {
            return `${chalk.bgRed(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ERR`)} ${chalk.italic(`${data}`)}`;
        }
    } else {
        if (log) {
            console.log(`${chalk.bgBlue(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] LOG`)} ${chalk.white(`${data}`)}`);
        } else {
            return `${chalk.bgBlue(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] LOG`)} ${chalk.white(`${data}`)}`;
        }
    }
};