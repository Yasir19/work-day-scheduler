// MonthName array
var monthName = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
// dayName Array 
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// dates array
var dates =["1st", "2ed","3th","4th","5th","6th","7th","8th","9th","10th","11th",
"12th","13th","14th","15th","16th","17th","18th","19th","20th","21st", "22ed","23th"
,"24th","25th","26th","27th","28th","29th","30th","31st" ];
// get today's date
var today = new Date();
// format the date
var date = dayName[today.getDay()] + "," + monthName[today.getMonth()] + "," + dates[today.getDate()];
// using jquery selectors to get the currentDay Id from html and set the content of thr date;
$("#currentDay").text(date);
var time = today.getHours();
if (time > 12){
    time -= 12;
}else if (time===0){
    time=12;
}
var AMPM = time >=12 ? 'PM':'AM';
newTime = time+ AMPM;
console.log(newTime);
var arr=["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
for (var i=0;i<arr.length;i++){
console.log(arr[i]);
}
var creatTask = ()=> {
for (var i =0 ; i < 9; i++){
 var timeEl=$("<div>").addClass("p-4 border-top col-lg-2 time-block").text(arr[i]);
 var taskEl=$("<textarea>").addClass(" textarea p-4 border-top col-lg-8");
 var btnEl=$("<button>").addClass("saveBtn p-4 col-lg-2");;
var rowsEl=$(".row").append(timeEl,taskEl,btnEl);
 $("#timeBlock").append(rowsEl);
}
}
var currentTime = function(){
    var getTime = newTime;
    console.log(getTime);
    $(".textarea").each(function(){
        var hr =$("hours").text();
        var eachHr =parseInt(hr);
        if (eachHr < getTime){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }else if (eachHr === getTime ){
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }else{
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
}

  
    var loadTasks = function(){
        tasks =JSON.parse(localStorage.getItem("tasks"));
        if(!tasks){
            tasks ={
                task:[]
            };
        }
    };
    var saveTask= function(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
// $("#text").on("click","p", function(){
//     var text=$(this)
//     .text().trim();
//     var textInput=$("<textarea>").addClass("textarea").vla(text);
//     $(this).replaceWith(textInput)
//     textInput.trigger("focus");
// });
$("#btn").on("click", "textarea", function(){
 localStorage.setItem("textInput",JSON.stringigy)

});
loadTasks();
currentTime();
creatTask();


