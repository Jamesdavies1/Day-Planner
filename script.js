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


//-------------------------------------Minimum-Requirements----------------------------------------------------


//Functional, deployed application.

//GitHub repository with a unique name and a README describing project.

//The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

//Each timeblock contains an input field and save button.

//Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

//The current day is displayed at the top of the calendar.

//Each timeblock is color coded to indicate whether it is in a past, present, or future hour.


//---------------------------------------sections required----------------------------------------------------


//html header featuring breif title / page description √
    //including current dat


    var today = moment();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log("This is what the moment .day prints out", console.log(today.day())
    var currentDay = daysOfWeek[today.day()];
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0');
    // var yyyy = today.getFullYear();
    
    // today =  dd + '/' + mm + '/' + yyyy;

    document.getElementById('currentdate').innerHTML += currentDay;

    // console.log(today);
//add a grid system with    
    //9-5hr planner. 1hr per row. = 8 rows x 3 cols
    //3 cols. left=hour(am/pm), mid=user input, right= save user input function/button.
    
// append row to the HTML table
function appendRow() {
        var tbl = document.getElementById('my-table'), // table reference
            row = tbl.insertRow(tbl.rows.length),      // append table row
            i;
        // insert table cells to the new row
        for (i = 0; i < tbl.rows[0].cells.length; i++) {
            createCell(row.insertCell(i), i, 'row');
        }
    }
     
    // create DIV element and append to the table cell
    function createCell(cell, text, style) {
        var div = document.createElement('div'), // create DIV element
            txt = document.createTextNode(text); // create text node
        div.appendChild(txt);                    // append text node to the DIV
        div.setAttribute('class', style);        // set DIV class attribute
        div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
        cell.appendChild(div);                   // append DIV to the table cell
    }

//add a feature that knows current time.
    //greys out already passed hour rows
    //red row highlights current time
    //green rows highlight future times

//right cols have save buttons that save user inputs on selected rows

//add feature that saves browser state so when re-visited, web page displays previously inputted notes.