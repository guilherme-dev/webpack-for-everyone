//modules: a fancy word for "files"

//this is the "entry point"

import notify from './Notification';  //local file uses relative paths
import {log} from './Notification';

import hello from './Hello';

//var notify = require('.Notification');

notify ('here is my message!');
log('test');

hello.log('hello test');
