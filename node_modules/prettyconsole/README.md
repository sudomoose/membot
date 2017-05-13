[![Build Status](https://travis-ci.org/Moosecoop/PrettyLog.svg?branch=master)](https://travis-ci.org/Moosecoop/PrettyLog) [![node](https://rawgit.com/aleen42/badges/master/src/node.svg)](https://nodejs.org/en/) [![github](https://cdn.rawgit.com/aleen42/badges/master/src/github.svg)](https://github.com/moosecoop/prettylog) [![gitbook](https://cdn.rawgit.com/aleen42/badges/master/src/gitbook_2.svg)](https://moosecoop.gitbooks.io/prettylog/content/) [![NSP Status](https://nodesecurity.io/orgs/moosehub/projects/8589d4db-0500-4288-a267-31113881498c/badge)](https://nodesecurity.io/orgs/moosehub/projects/8589d4db-0500-4288-a267-31113881498c) [![npm version](https://badge.fury.io/js/prettylog.svg)](https://badge.fury.io/js/prettylog) [![Node version](https://img.shields.io/node/v/prettylog.svg?style=flat)](http://nodejs.org/download/) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/moosecoop/prettylog/issues) [![Inline docs](http://inch-ci.org/github/moosecoop/prettylog.svg?branch=master)](http://inch-ci.org/github/moosecoop/prettylog) [![dependencies Status](https://david-dm.org/moosecoop/prettylog/status.svg)](https://david-dm.org/moosecoop/prettylog) [![bitHound Overall Score](https://www.bithound.io/github/Moosecoop/PrettyLog/badges/score.svg)](https://www.bithound.io/github/Moosecoop/PrettyLog)

# PrettyLog
PrettyLog is a package to help make logging details to console more simple and look better.

## Usage
```javascript
var PrettyLog = require('prettylog');

console.log(prettyLog('Connected', false, false));
```

`prettyLog('Status set', false, false);` returns:

![result](https://i.imgur.com/Bf3LgNS.png "Logo Title Text 1")
