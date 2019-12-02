//---------------------------------------------DAY PLANNER-----------------------------------------------------


//------------------------------------------------PSEUDO-------------------------------------------------------


//Create a simple calendar application that allows the user to save events for each hour of the day. 
    //This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

//The app should display standard business hours (9 a.m. to 5 p.m.). 

//Each time slot should represent one hour and contain the following:
    //the time, a field to hold user inputs, a save button

//Clicking on the save button will store the time and user input in localStorage.

//Near the top of the calendar, the application should display the current day. 
    //Additionally, each hour should be color coded to reflect whether the time slot is in the past, 
    //the present, or the future. This will change depending on the time of day.

//You'll need to use the Moment.js library to work with date and time. 
    //Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

//---------------------------------------sections required----------------------------------------------------


//html header featuring breif title / page description √
    //including current dat

//moment method 
/*var today = moment();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("This is what the moment .day prints out", console.log(today.day()))
var currentDay = daysOfWeek[today.day()];*/
    
    //document.getElementById('currentdate').innerHTML += currentDay;
//regular method
     //var today = new Date();
     //var dd = String(today.getDate()).padStart(2, '0');
     //var mm = String(today.getMonth() + 1).padStart(2, '0');
     //var yyyy = today.getFullYear();
         //today =  dd + '/' + mm + '/' + yyyy;


     //console.log(today);
//add a grid system with    
    //9-5hr planner. 1hr per row. = 8 rows x 3 cols
    //3 cols. left=hour(am/pm), mid=user input, right= save user input function/button.
    // append row to the HTML table
    // append table row
    
        // insert table cells to the new row    
    // create DIV element and append to the table cell
    
    //var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    //for (i = 0; i < timeArray.length; i++);{}

    // Find a <table> element with id="myTable":
    //var table = document.getElementById("planner");

    // Create an empty <tr> element and add it to the 1st position of the table:
    //var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    //var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //var cell3 = row.insertCell(2);
    
    // Add some text to the new cells:
    //cell1.innerHTML = "TIME ";
    //cell2.innerHTML = "INPUT ";
    //cell3.innerHTML = "SAVE ";

        // Create an empty <tr> element and add it to the 1st position of the table:
       // var row1 = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      //  var cell1 = row1.insertCell(0);
      //  var cell2 = row1.insertCell(1);
      //  var cell3 = row1.insertCell(2);
        
        // Add some text to the new cells:
      //  cell1.innerHTML = "TIME ";
      //  cell2.innerHTML = "INPUT ";
      //  cell3.innerHTML = "SAVE ";

  
    // create DIV element
    // append text node to the DIV
    // set DIV class attribute
    // set DIV class attribute for IE (?!)
    // append DIV to the table cell
        

//add a feature that knows current time.
    //greys out already passed hour rows
    //red row highlights current time
    //green rows highlight future times

//right cols have save buttons that save user inputs on selected rows

//add feature that saves browser state so when re-visited web page displays previously inputted notes
var today = moment();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("This is what the moment .day prints out", console.log(today.day()))
var currentDay = daysOfWeek[today.day()];
document.getElementById('currentdate').innerHTML += currentDay;

$(document).ready(function(){
$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})
});

function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id"));
      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
hourUpdater();

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));