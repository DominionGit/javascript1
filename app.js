 
 function lifeinweeks(age){
  var day = parseInt(prompt("input your age"));
  var day1 = day - 90
  var day2 = day1
  var days = 365
  var nodays = day2 * days
  var  tdays = nodays;
// remaining weeks
 var week = 52 * day1 
 var weeks = week
//  remainng months
var month = 12 * day1
var months = month
 var total = "we have " + nodays  + " days " + week  + " weeks and " + month + " months left" ;
 console.log(total)
 }
 lifeinweeks(23)