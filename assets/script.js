//Display current date and time 
let currentDate = moment().format('llll');
$("#currentDay").html(currentDate);



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$("document").ready(function () {  //defers JS loading until page loaded

  //Save button event listener:
  $(".saveBtn").on('click', function (){
    let userInput = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, userInput); //key = time, value = userInput
  });
    
    // Apply Past, Present, or Future class
    let currentHour = moment().hours();


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    //Show saved local storage by each hour
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));

    // TODO: Add code to display the current date in the header of the page.
  
  
   });  //Ends defer function