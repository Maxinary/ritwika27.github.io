/*
  Note: For this to be a module usable with other files, it must have a
    global scope. This creates a situation in which a malicious person on a
    computer could edit the data and could produce tainted results.

    Best practice to fix this issue is to write implementation in a seperate
      file, and then to wrap all together when it moves to production.
      Realistically, this is not a huge issue, as the code will be run on an
      iPad, which cannot edit code.

    DO NOT RUN THIS ON MECHANICAL TURK. The data could be suspect of
      tampering, because it is not. Note that this is not only the case for
      this code, but also for most other code. The amount of interest in
      tampering with data is low, so it is not a huge issue.
*/

// generate a new datum and add it to the logged_data.
// Format:
//   0. Time: integer, unix time
//   1. user ID : integer, quadrant participant clicked, RT (DeltaTime)
//   2. list index : integer
//   3. Page ID : string
//   4. Target quadrant : integer
//   5. Selected quadrant : integer
//   6. Time to click: integer
//   7. startTime (audio end): integer
//   8. endTime (time image clicked): integer
//   9. condition : string
//  10. name: string
//  11. direct object: string
//  12. correct: string
function new_datum(clickQuadrant, startTime, endTime) {
    var correct;
    var targetQuadrant = globalBook.pages[globalBook.current_page].targetQuadrant;
    var sentence = globalBook.pages[globalBook.current_page].pageID.split(" ");

    var arr = getNameConditionObject(sentence);

    var name = arr[0];
    var direct_object = arr[1];
    var condition = arr[2];
    if (targetQuadrant == clickQuadrant){
        correct = "yes";
    }else {
        correct = "no"
    }
    var dat = [(new Date()).getTime(),
               userID,
               listIndex + 1,
               globalBook.pages[globalBook.current_page].pageID,
               targetQuadrant,
               clickQuadrant,
               endTime - startTime,
               startTime,
               endTime,
               condition,
               name,
               direct_object,
               correct];

    logged_data.push(dat);

    return dat;
  }

  function getNameConditionObject(sentence){
  var name;
  var verb;
  var condition;
  var direct_object;
  if (sentence[0].match(/P/)){
    console.log("hello");
    name = sentence[0].replace("P_", "");
    condition = "practice";
    var obj = sentence[sentence.length -1]
    if(obj == "herself" || obj == "himself" || obj == "together"){
      direct_object = sentence[sentence.length -2];
    }else {
      direct_object = sentence[sentence.length -1];
    }

  }else{
    name = sentence[0];
    verb = sentence[1];
    direct_object = sentence[sentence.length -1]
    if (name == "CM" && verb == "was"){
        condition = "A_was";
    }else if (name == "CM" && verb == "were"){
        condition = "A_were";
    }else if (name == "CJ"){
        condition = "UA_were";
    }else{
        condition = "UA_was";
    }
  }
  var arr = [name, direct_object, condition];
  return arr;

  }

  function export_data() {
    //addData(logged_data);
    $.ajax({
      url: 'https://493eebb3-f2ce-4ba4-9d67-ac4b1ec5e8b5.mock.pstmn.io',
      // headers: {
      //     'Content_Type': "application/json",
      //     'Bearer': authKey,
      // },
      // headers: {
      //   'Bearer': authKey
      // },
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify({ "data": logged_data }),
      success: function (data, status, xhr) {
        ocument.getElementById('sendingdatagame').innerHTML = "Data Sent Succesfully!";
        console.log(status);
        console.log("game data sent");
      }
    });

  }


  function survey_log(v) {
    var time = (new Date()).getTime();
    if (typeof v == 'number') {
      survey_data.push([time, userID, globalBook.pages[globalBook.current_page].pageID, v, 0]);
    } else if (typeof v == 'string') {
      survey_data.push([time, userID, globalBook.pages[globalBook.current_page].pageID, 0, v]);
    } else {
      console.log("logging non-number non-string data!!");
    }
  }

  function survey_log_named(name, v) {
    var time = (new Date()).getTime();
    if (typeof v == 'number') {
      survey_data.push([time, userID, name, v, 0]);
    } else if (typeof v == 'string') {
      survey_data.push([time, userID, name, 0, v]);
    } else {
      console.log("logging non-number non-string data!!");
    }
  }

  function survey_log_paired(name, strin, integ) {
    survey_data.push([(new Date()).getTime(), userID, name, integ, strin]);
  }
  
  function export_survey() {
    //addData(logged_data);
    $.ajax({
      url: 'https://493eebb3-f2ce-4ba4-9d67-ac4b1ec5e8b5.mock.pstmn.io',
      // headers: {
      //     'Content_Type': "application/json",
      //     'Bearer': authKey,
      // },
      // headers: {
      //   'Bearer': authKey
      // },
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify({ "data": survey_data }),
      success: function (data, status, xhr) {
        document.getElementById('sendingdata').innerHTML = "Data Sent Succesfully!"; 
        console.log(status);
        console.log("survey sent");
      }
    });
  
  }
  
  // A page can be played or stopped
  class Page {
    constructor(pageID) {
      this.pageID = pageID;

      this.timeouts = [];
      this.intervals = [];
    }

    setTimeout(fn, dt){
      this.timeouts.push(setTimeout(fn, dt));
    }

    setInterval(fn, dt, startImmediately){
      if( startImmediately ) {
        fn();
      }
      this.intervals.push(setInterval(fn, dt));
    }

    play() {}

    deactivate() {
      for (var i=0; i<this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }

      for (var i=0; i<this.intervals.length; i++) {
        clearInterval(this.intervals[i]);
      }
    }
  }

  // set of pages
  class Book {
    constructor(pages, buffer_time) {
      if (buffer_time == undefined) {
        buffer_time = 0;
      }

      this.buffer_time = buffer_time;
      this.pages = pages;
      this.current_page = -1;
    }

    nextpage() {
      if (this.current_page > -1) {
        this.pages[this.current_page].deactivate();
      }

      setTimeout(function() {
        this.current_page++;
        if (this.current_page < this.pages.length){
          this.pages[this.current_page].play();
        }
        // if (this.current_page < this.pages.length) {
        //   
        //   if (this.current_page ==  this.pages.length-2) {
        //     export_data();
        //   }
        // } else {
//  $("img").hide()
//           $("#end").show()         
        //}
      }.bind(this), this.buffer_time * 1000);
    }
  }

  var globalBook;

  // The universal next-page bind
  $(".exit").bind("click touch", function() {
    globalBook.nextpage();
  });

  function run_book(book) {
    globalBook = book;

    globalBook.nextpage()
  }

  var logged_data = [];
  var survey_data = [];
