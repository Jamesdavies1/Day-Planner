//---------------------------------------------DAY PLANNER-----------------------------------------------------

//current date display in header of page
var today = moment();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("This is what the moment .day prints out", console.log(today.day()))
var currentDay = daysOfWeek[today.day()];
document.getElementById('currentdate').innerHTML += currentDay;

//on click listener when clicking save button, saves user input field
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    })
});

//function that creates new html classes so we can style via css to display time of day
function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop over time blocks
    $(".time-block").each(function () {
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
//local storage saving for all user inputs
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));




//THESE THINGS ARE STILL MISSING FROM PAGE

//-text inputs need to be in ul/li bullet points
//-text box needs to expand in size when input field becomes too small for text
//-colour changing times to show what is past/present and future
//
