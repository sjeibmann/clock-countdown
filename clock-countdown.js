var d = new Date();
var curHour= d.getHours();
var curMin= d.getMinutes();
var curWeekDay= d.getDay();
var curYear= d.getFullYear();
var curMonth= d.getMonth() + 1;
var curDay= d.getDate();
var AmPm = 'AM';
var day =["SUN", "MON", "TUES", "WEDS", "THUR", "FRI", "SAT"];

var fD = new Date("April 16, 2019 00:00:00 GMT-0800");
var oneDay = 1000*60*60*24;

function putTime(){
// set am pm
  if(curHour > 12){
    curHour = curHour -12;
    AmPm = 'PM';
  }else{
    AmPm = 'AM';
  }
// add leading 0 to minutes under 10
  if (curMin < 10) {
    curMin = '0'+curMin;
  }
  document.getElementById('time').innerHTML = curHour+":"+curMin;
  document.getElementById('AMPM').innerHTML = AmPm;
}

function putDate(){
  document.getElementById('date').innerHTML = "<strong>"+day[curWeekDay]+"</strong><br>"+curMonth+"/"+curDay+"<br>"+curYear;
}

function calcToDate(){
  var d1_ms = d.getTime();
  var d2_ms = fD.getTime();
  var delta = d2_ms-d1_ms;

  delta = delta/1000;
  var secs = Math.floor(delta % 60);
  delta = delta/60;
  var mins = Math.floor(delta % 60);
  delta = delta/60;
  var hrs = Math.floor(delta % 24);
  var ds = Math.floor(delta/24);

  document.getElementById('secCount').innerHTML = secs;
  document.getElementById('minCount').innerHTML = mins;
  document.getElementById('hourCount').innerHTML = hrs;
  document.getElementById('dayCount').innerHTML = ds;
}

putTime();
putDate();
calcToDate();