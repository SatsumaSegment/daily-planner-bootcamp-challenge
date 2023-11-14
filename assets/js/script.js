currentDateDisplay = $("#currentDay");  // Container to display current date
plannerTimes = $(".container");         // Container to display planner times

// Array of weekdays
var days = ["Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"]

// Array of months
var months = ["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"]

// Function to get current date in string format
function displayDate() {
    var currentDay = days[dayjs().day()];
    var currentDate = dayjs().date();
    var currentMonth = months[dayjs().month()];

    return currentDay + " " + currentMonth  + " " + currentDate;
}

// Add current date string to HTML element text
currentDateDisplay.text(displayDate());

// Function to generate planner
function generatePlanner() {

    // Loop working hours and use 'i' as an reference for each hour
    for (var i = 9; i < 18; i++) {

        var row = $('<div>').addClass('row');
        var saveButton = $('<div> <i>').addClass('saveBtn');
        var hour = $('<div>').addClass('hour');

        saveButton.text('Save');

        // Assign hour text to each hour element
        // if hour is less than 12 add AM
        // if hour is 12 or more add PM
        // subtract 12 from any hour after 12PM to get 12 hour version.
        if (i < 12) {
            hour.text(i + "AM");
        } else if (i === 12) {
            hour.text(i + "PM");
        } else {
            hour.text(i-12 + "PM");
        }

        // Assign past, present and future classes to each row 
        // depending on current time.
        if (i === dayjs().hour()) {
            row.addClass('present');
        } else if (i > dayjs().hour()) {
            row.addClass('future');
        } else {
            row.addClass('past');
        }

        row.append(hour);
        row.append(saveButton);
        plannerTimes.append(row);
    }

}


generatePlanner();
