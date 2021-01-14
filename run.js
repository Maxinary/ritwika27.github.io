// all random orderings of these lists
let listOrderings = [
    [25, 10, 20, 27, 1, 19, 18, 5, 4, 7, 14, 16, 3, 9, 8, 24, 12, 22, 13, 11, 23, 26, 2, 0, 17, 6, 21, 15],
    [23, 17, 9, 4, 1, 16, 3, 11, 26, 7, 13, 5, 8, 10, 21, 19, 0, 20, 22, 6, 18, 25, 2, 15, 24, 12, 14, 27],
    [21, 23, 13, 5, 9, 15, 16, 8, 14, 22, 0, 25, 2, 17, 20, 1, 27, 26, 12, 7, 6, 4, 10, 3, 18, 11, 19, 24],
    [23, 2, 16, 17, 8, 20, 12, 26, 10, 22, 13, 21, 11, 3, 27, 5, 24, 25, 7, 6, 14, 1, 9, 4, 18, 0, 19, 15],
    [27, 4, 14, 25, 2, 26, 19, 11, 21, 17, 8, 18, 24, 0, 3, 23, 12, 22, 20, 6, 10, 15, 13, 7, 16, 9, 1, 5],
    [23, 3, 4, 15, 27, 8, 14, 21, 6, 26, 9, 18, 7, 22, 11, 13, 5, 17, 2, 12, 24, 10, 25, 1, 16, 20, 0, 19],
    [22, 21, 8, 18, 7, 24, 26, 1, 14, 15, 11, 3, 23, 0, 20, 10, 13, 2, 9, 25, 17, 5, 19, 27, 6, 4, 12, 16],
    [26, 10, 16, 0, 3, 12, 20, 1, 24, 18, 13, 8, 5, 14, 4, 21, 15, 6, 7, 19, 25, 11, 27, 9, 22, 2, 17, 23],
];

let thisOrdering = listOrderings[Math.floor(Math.random() * listOrderings.length)];


var shuflist = [];
console.log(shuflist);

all_pages = []

var imgSourceDirectory = "";
var audioSourceDirectory = "";

//all_pages.push(new DialectSurveyPage("pagename", "Dialect 1"));
//all_pages.push(new AudioQuestionPage("aq2", "WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.mp3"));
//all_pages.push(new DialectSurveyPage("pagename", "Dialect 1"));
//all_pages.push(new AudioQuestionPage("aq2", "WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.mp3"));
//all_pages.push(new DialectSurveyPage("pagename", "Dialect 2"));
//all_pages.push(new DemogSurveyPage("pagename"));

all_pages.push(new WelcomeExperimentPage());

function addGamePages(){

       var imgSourceDirectory = "";
       var audioSourceDirectory = "";
       all_pages.push(new DocPage("instruction page", "<br/> <br/> Participant ID<br />\
                           <hr><div style='color:red;text-align:center;width:100%'>"+userID+"</div><br/> <br/> ",
                           "90%", "60px", "Ready!",
                           undefined));


       all_pages.push(new EmailPage());
       all_pages.push(new ChooseList());


       all_pages.push(new TestHeadphonesPage());

       all_pages.push(new ImagePage("intro", "customImages/Coverpage.png", 3000));

       all_pages.push(new TurtleRunPage());

       all_pages.push(new Slide7Page());


       var imgSourceDirectory = "FinalImagesALL/ImgaesforExamples/";
       var audioSourceDirectory = "WAVFiles/Introduction_Instructions/";
       all_pages.push(new LearnQuadPage("P_J was playing the piano",
                     [new Choice("T",
                            "Boy1_Piano.png"),
                     new Choice("C1",
                            "Boy2_3_Paper.png"),
                     new Choice("C2",
                            "Girl1_Movie.png"),
                     new Choice("C3",
                            "Girl2_3_Table.png")],

                     "Slide6_Jeremiah.wav",
                     0,
                     "Slide6_9_CorrectFeedback.mp3",
                     "Slide6_IncorrectFeedback.mp3",
                     true));

       all_pages.push(new LearnQuadPage("P_CM is watching the movie",
              [new Choice("C1",
                            "Boy1_Piano.png"),
                     new Choice("C2",
                            "Boy2_3_Paper.png"),
                     new Choice("T",
                            "Girl1_Movie.png"),
                     new Choice("C3",
                            "Girl2_3_Table.png")],

              "Slide6_CMmovie.wav",
              2,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide6_IncorrectFeedback.mp3",
              true));

       all_pages.push(new LearnQuadPage("P_CJ are cutting the paper",
              [new Choice("C1",
                            "Boy1_Piano.png"),
                     new Choice("T",
                            "Boy2_3_Paper.png"),
                     new Choice("C2",
                            "Girl1_Movie.png"),
                     new Choice("C3",
                            "Girl2_3_Table.png")],

              "Slide6_CJ.wav",
              1,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide6_IncorrectFeedback.mp3",
              true));

       all_pages.push(new LearnQuadPage("P_CM are cleaning the table",
              [new Choice("C1",
                            "Boy1_Piano.png"),
                     new Choice("C2",
                            "Boy2_3_Paper.png"),
                     new Choice("C3",
                            "Girl1_Movie.png"),
                     new Choice("T",
                            "Girl2_3_Table.png")],

              "Slide6_CMtable.wav",
              3,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide6_IncorrectFeedback.mp3",
              true));

       var audioSourceDirectory = "WAVFiles/Introduction_Instructions/";



       all_pages.push(new LearnQuadPage("P_Jeremiah is playing the piano himself",
              [new Choice("T",
                            "Boy1_Piano.png"),
                     new Choice("C1",
                            "Boy2_3_Piano.png"),
                     new Choice("C2",
                            "Girl1_Piano.png"),
                     new Choice("C3",
                            "Girl2_3_Piano.png")],

              "Slide7_IntrotoEX.wav",
              0,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide7_IncorrectFeedback.mp3",
              false));

       var audioSourceDirectory = "WAVFiles/Examples/";

       all_pages.push(new LearnQuadPage("P_CM is cleaning the table herself",
              [new Choice("C1",
                            "Boy1_Table.png"),
                     new Choice("C2",
                            "Boy2_3_Table.png"),
                     new Choice("T",
                            "Girl1_Table.png"),
                     new Choice("C3",
                            "Girl2_3_Table.png")],

              "Slide8_CM_S_Table.wav",
              2,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide8_IncorrectFeedback.mp3",
              false));



       var audioSourceDirectory = "WAVFiles/Examples/";

       all_pages.push(new LearnQuadPage("P_CM is watching the movie herself",
              [new Choice("C1",
                     "Boy1_Movie.png"),
                     new Choice("C2",
                     "Boy2_3_Movie.png"),
                     new Choice("T",
                     "Girl1_Movie.png"),
                     new Choice("C3",
                     "Girl2_3_Movie.png")],

              "Slide9_CM_S_Movie.wav",
              2,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide9_IncorrectFeedack.mp3",
              false));

       all_pages.push(new LearnQuadPage("P_CM are cutting the paper together ",
              [new Choice("C3",
                            "Boy1_Paper.png"),
                     new Choice("C2",
                            "Boy2_3_Paper.png"),
                     new Choice("C1",
                            "Girl1_Paper.png"),
                     new Choice("T",
                            "Girl2_3_Paper.png")],

                     "slide10_CM_P_Paper.wav",
              3,
              "Slide6_9_CorrectFeedback.mp3",
              "Slide10_IncorrectFeedback.mp3",
              false));

       all_pages.push(new BeginPage("WAVFiles/Introduction_Instructions/slide11_LetsBegin.wav"));
}


function addPages(index){
    list = lists[index];
    thisOrderingUp = thisOrdering.map(x => ((x+ 28-7*index))%28);
    shuflist = reorder(list, thisOrderingUp);
    console.log(shuflist);
    globalBook.pages = globalBook.pages.concat(shuflist.slice(0,4));
    globalBook.pages.push(new ProgressPage("prog", 1, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/Slide12_LandingPage1.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(4,8));
    globalBook.pages.push(new ProgressPage("prog", 2, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage2.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(8,12));
    globalBook.pages.push(new ProgressPage("prog", 3, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage3.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(12,16));
    globalBook.pages.push(new ProgressPage("prog", 4, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage4.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(16,20));
    globalBook.pages.push(new ProgressPage("prog", 5, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage5.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(20,24));
    globalBook.pages.push(new ProgressPage("prog", 6, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage6.wav"));

    globalBook.pages = globalBook.pages.concat(shuflist.slice(24,28));
    globalBook.pages.push(new ProgressPage("prog", 7, 7,
                             "FinalImagesALL/ImgaesforExamples/TurtleTransparent.png",
                             "customImages/box.png",
                             "FinalImagesALL/ImgaesforExamples/Boy_1_Solo.png",
                             "WAVFiles/Reinforcement/LandingPage7.wav"));
    globalBook.pages.push(new SendDataExpPage());
    globalBook.pages.push(new EndPage());
}


//gets called when cont to survey is clicked, from beggining or after game end
function addSurveyPages() {
      globalBook.pages.push(new WelcomeSurveyPage());

      globalBook.pages.push(new DocPage("survey instructions", "<br/> Instructions <br />\
                            <p style='font-size:25px'>People from different places and backgrounds talk in different ways. In this section you will hear examples of people saying different phrases in three different dialects. We want you to play the example sentence and answer the corresponding questions. Feel free to play the example sentence more tan once. Please don't focus on what the person is saying, but how they are saying it.</p><br/>",
                            "90%", "60px", "Ready!",
                            undefined));

      for (var i in MLE) {
       globalBook.pages.push(new AudioQuestionPage("MLE: "+MLE[i], MLE_Prefix+MLE[i]))
      }
      globalBook.pages.push(new DialectSurveyPage("Dialect 1", "Dialect 1"));

      for (var i in MAE) {
       globalBook.pages.push(new AudioQuestionPage("MAE: "+MAE[i], MAE_Prefix+MAE[i]))
      }
      globalBook.pages.push(new DialectSurveyPage("Dialect 2", "Dialect 2"));

      for (var i in AAL) {
        globalBook.pages.push(new AudioQuestionPage("AAL: "+AAL[i], AAL_Prefix+AAL[i]))
      }
      globalBook.pages.push(new DialectSurveyPage("Dialect 3", "Dialect 3"));

      globalBook.pages.push(new DemogSurveyPage("demogrpahics"));

//       globalBook.pages.push(new SendDataSurveyPage());
       //globalBook.pages.push(new EndSurveyPage());
}

var book = new Book(all_pages, 0);

$(".page").hide();

$(window).on("load", function() {

 run_book(book);
}
);



/*    all_pages.push(new QuadAudioPage("slide7Intro",
                  "Slide7_EvalName.wav",

                  [new Choice("Boy1",
                          "Boy1_Piano.png"),
                   new Choice("Boy2_3",
                          "Boy2_3_Paper.png"),
                   new Choice("Girl1",
                          "Girl1_Movie.png"),
                   new Choice("Girl2_3",
                          "Girl2_3_Table.png")],
                  ));

  var audioSourceDirectory = "WAVFiles/Examples/";

  all_pages.push(new LearnQuadPage("P_J played the piano himself",
                  [new Choice("T",
                          "Boy1_Piano.png"),
                   new Choice("C1",
                          "Boy2_3_Paper.png"),
                   new Choice("C2",
                          "Girl1_Movie.png"),
                   new Choice("C3",
                          "Girl2_3_Table.png")],

                  "Slide71_J_S_PP.wav",
                  0,
                  "Slide6_9_CorrectFeedback.wav",
                  "Slide71_IncorrectFeedback.wav",
                  false));

  all_pages.push(new LearnQuadPage("P_JR watched the movie herself",
                  [new Choice("C1",
                          "Boy1_Piano.png"),
                   new Choice("C2",
                          "Boy2_3_Paper.png"),
                   new Choice("T",
                          "Girl1_Movie.png"),
                   new Choice("C3",
                          "Girl2_3_Table.png")],

                  "Slide72_JR_S_WM.wav",
                  2,
                  "Slide6_9_CorrectFeedback.wav",
                  "Slide72_IncorrectFeedback.wav",
                  false));

  var audioSourceDirectory = "WAVFiles/Introduction_Instructions/";

  all_pages.push(new QuadAudioPage("slide8Intro",
                  "Slide8_IntroToExperiment.wav",

                  [new Choice("Boy1",
                         "Boy1_Paper.png"),
                   new Choice("Boy2_3",
                         "Boy2_3_Paper.png"),
                   new Choice("Girl1",
                         "Girl1_Paper.png"),
                   new Choice("Girl2_3",
                         "Girl2_3_Paper.png")]
                  ));

  var audioSourceDirectory = "WAVFiles/Examples/";

  all_pages.push(new LearnQuadPage("P_CJ cut the paper together",
                  [new Choice("C1",
                         "Boy1_Paper.png"),
                   new Choice("T",
                         "Boy2_3_Paper.png"),
                   new Choice("C2",
                         "Girl1_Paper.png"),
                   new Choice("C3",
                         "Girl2_3_Paper.png")],

                  "Slide8_CJ_P_CP.wav",
                  1,
                  "Slide6_9_CorrectFeedback.wav",
                  "Slide8_IncorrectFeedback.wav",
                  false));

  all_pages.push(new LearnQuadPage("P_JR cleaned the table together",
                  [new Choice("C3",
                          "Boy1_Table.png"),
                   new Choice("C2",
                          "Boy2_3_Table.png"),
                   new Choice("C1",
                          "Girl1_Table.png"),
                   new Choice("T",
                          "Girl2_3_Table.png")],

                   "Slide9_JR_P_CT.wav",
                  3,
                  "Slide6_9_CorrectFeedback.wav",
                  "Slide9_IncorrectFeedback.wav",
                  false));

  all_pages.push(new BeginPage("WAVFiles/Introduction_Instructions/Slide10_LetsBegin.wav")); */
