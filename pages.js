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
//   6. Time to click: floating point
function new_datum(clickQuadrant, deltaTime) {
  var dat = [(new Date()).getTime(),
             userID,
             listIndex,
             globalBook.pages[globalBook.current_page].pageID,
             globalBook.pages[globalBook.current_page].targetQuadrant,
             clickQuadrant,
             deltaTime];

  logged_data.push(dat);

  return dat;
}

function survey_log(v) {
  if (typeof v == 'number') {
    survey_data.push([userID, globalBook.pages[globalBook.current_page].pageID, v, 0]);
  } else if (typeof v == 'string') {
    survey_data.push([userID, globalBook.pages[globalBook.current_page].pageID, 0, v]);
  } else {
    console.log("logging non-number non-string data!!");
  }
}

function export_data() {
  var blob = new Blob([JSON.stringify(logged_data)],
      { type: "text/plain;charset=utf-8" });
  saveAs(blob, "log.txt");
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
      if (this.current_page < this.pages.length) {
        this.pages[this.current_page].play();
        if (this.current_page ==  this.pages.length-2) {
          export_data();
        }
      } else {
        $("img").hide()
        $("#end").show()
      }
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
