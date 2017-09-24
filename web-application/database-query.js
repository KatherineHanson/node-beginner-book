'use strict';

// EVENT-DRIVEN ASYNCHRONOUS CALLBACKS EXAMPLES
// NOT MEANT TO WORK AS SHOWN

// EXAMPLE 1: SYNCHRONOUS
var result = database.query('SELECT * FROM hugetable');
console.log('Hello World');

// EXAMPLE 2: ASYNCHRONOUS
database.query('SELECT * FROM hugetable', function(rows) {
  var result = rows;
});
console.log('Hello World');
