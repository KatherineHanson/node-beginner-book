'use strict';

function start() {
  console.log('Request handler "start" was called.');
}

function upload() {
  console.log('Request handled "upload" was called.');
}

exports.start = start;
exports.upload = upload;
