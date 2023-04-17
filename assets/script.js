//Display current date and time 
let currentDate = moment().format('llll');
$("#currentDay").html(currentDate);


$("document").ready(function () {  //defers JS loading until page loaded

  //Save button event listener:
  $(".saveBtn").on('click', function (){
    let userInput = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, userInput); //key = time, value = userInput
  });
    
    // Apply Past, Present, or Future class
    let currentHour = moment().format('H');  //get current hour
    console.log(currentHour);

      $('.time-block').each(function () {   //uses current time block class to set past, present, future
        let timeBlock = $(this).attr("id").split("-")[1];

        if (timeBlock == currentHour) {  //current hour
          $(this).removeClass("past");
          $(this).removeClass("future");
        }
        else if (timeBlock < currentHour) {    //past hour(s)
          $(this).removeClass("future");
          $(this).removeClass("present");
        }
        else {                              //future hours
          $(this).removeClass("present");
          $(this).removeClass("past");
        }

      });

    
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

  
   });  //Ends defer function