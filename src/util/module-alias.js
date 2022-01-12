"use strict";
exports.__esModule = true;
var moduleAlias = require("module-alias");
var path = require("path");
var files = path.resolve(__dirname, '../..');
moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});
