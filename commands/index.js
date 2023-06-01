import osCommand from "./os/index.js";
import exitCommand from './.exit/index.js';
import lsCommand from './ls/index.js';
import addCommand from "./add/index.js";
import rnCommand from "./rn/index.js";
import cpCommand from "./cp/index.js";
import mvCommand from "./mv/index.js";
import rmCommand from "./rm/index.js";

export default {
    '.exit': exitCommand,
    'os'   : osCommand,
    'ls'   : lsCommand,
    'add'  : addCommand,
    'rn'   : rnCommand,
    'cp'   : cpCommand,
    'mv'   : mvCommand,
    'rm'   : rmCommand,
};