//gets today's date by using moment.js 
var currentDay = moment().format('dddd, MMMM Do');
//display the date on jumbotron by using jQuery API method
$("#currentDay").text(currentDay);

// check the time if it in the past/present/future
function currentHour(){
    // gets current hour by using moment.js API
    var currentTime = moment().hour();
    //get the time in the hour divs
    $(".time-block").each(function(){
        // gets the current timeblock's hour
        var timeBlockHr = parseInt($(this).attr("id"));
   
        // check if the time in the past then give the element calss "past"
        if(timeBlockHr < currentTime){
            $(this).addClass("past");
        }
        // check if the time in the present then give the element calss "present"
        else if(timeBlockHr === currentTime){
            $(this).addClass("present");
        }
        // check if the time in the future then give the element calss "future"
        else{
            $(this).addClass("future");
        }
    });


};

// loads the tasks 
function loadTasks(){
    // loop through the div by using the ID 
    for(var i = 9; i < 18; i++){
        // git the information basied on the id and loop over it, 
        //then get the data from textarea that will be represented
        // in localStorage 
        $("#" + i + " .textarea").val(localStorage.getItem(i));
    }
};


// when save button is clicked, saves the values within the button's div
$(".saveBtn").on("click", function(){
      // get the hour id from the div
      var hour = $(this).parent().attr("id");
       // get the value input in the textarea within that div
       var Text = $(this).siblings(".textarea").val();
    // sets them into local storage
    localStorage.setItem(hour, Text);
});

// loads the tasks from within local storage
loadTasks();

// checks the hour for past/present/future
currentHour();
// make currentHour() happen every minute
setInterval(function() {
    currentHour();
}, 60000);

