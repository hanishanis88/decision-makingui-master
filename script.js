// function to calculate the result of the survey
function tabulateAnswers() {

  var project_name = document.getElementById("project_name").value;
  var email = document.getElementById("email").value;
  var position = document.getElementById("position").value;
  var testing = document.getElementById("testing").value;
  var tool_name = document.getElementById("tool_name").value;

  console.log(project_name);
  console.log(email);
  console.log(position);
  console.log(testing);
  console.log(tool_name);

  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;
  var c5score = 0;
  var c6score = 0;
  var c7score = 0;
  var c8score = 0;
  var c9score = 0;
  var c10score = 0;
  var c11score = 0;
  var c12score = 0;
  var c13score = 0;
  var c14score = 0;
  var c15score = 0;
  var c16score = 0;
  var c17score = 0;
  var c18score = 0;
  var c19score = 0;
  // var c20score = 0;
  // var c21score = 0;
  // var c22score = 0;
  // var c23score = 0;
  // var c24score = 0;
  // var c25score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      if (choices[i].value == 'c5') {
        c5score = c5score + 1;
      }
      if (choices[i].value == 'c6') {
        c6score = c6score + 1;
      }
      if (choices[i].value == 'c7') {
        c7score = c7score + 1;
      }
      if (choices[i].value == 'c8') {
        c8score = c8score + 1;
      }
      if (choices[i].value == 'c9') {
        c9score = c9score + 1;
      }
      if (choices[i].value == 'c10') {
        c10score = c10score + 1;
      }
      if (choices[i].value == 'c11') {
        c11score = c11score + 1;
      }
      if (choices[i].value == 'c12') {
        c12score = c12score + 1;
      }
      if (choices[i].value == 'c13') {
        c13score = c13score + 1;
      }
      if (choices[i].value == 'c14') {
        c14score = c14score + 1;
      }
      if (choices[i].value == 'c15') {
        c15score = c15score + 1;
      }
      if (choices[i].value == 'c16') {
        c16score = c16score + 1;
      }
      if (choices[i].value == 'c17') {
        c17score = c17score + 1;
      }
      if (choices[i].value == 'c18') {
        c18score = c18score + 1;
      }
      if (choices[i].value == 'c19') {
        c19score = c19score + 1;
      }
      // if (choices[i].value == 'c20') {
      //   c20score = c20score + 1;
      // }
      // if (choices[i].value == 'c21') {
      //   c21score = c21score + 1;
      // }
      // if (choices[i].value == 'c22') {
      //   c22score = c22score + 1;
      // }
      // if (choices[i].value == 'c23') {
      //   c23score = c23score + 1;
      // }
      // if (choices[i].value == 'c24') {
      //   c24score = c24score + 1;
      // }
      // if (choices[i].value == 'c25') {
      //   c25score = c25score + 1;
      // }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(c1score,c2score,c3score,c4score,c5score,c6score,c7score,c8score,c9score,c10score,c11score,c12score,c13score,c14score,c15score,c16score,c17score,c18score,c19score);
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  var scoretotal = c1score + c2score;
  if (scoretotal < 19) { 
    console.log(scoretotal);
    console.log('yes = '+c1score);
    console.log('no = '+c2score);
    alert('Please answer all question');
    return
  }
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    console.log(scoretotal);
    console.log('yes = '+c1score);
    console.log('no = '+c2score);
    answerbox.innerHTML = "<br><h2>RESULT</h2><br><br><h2>Automated testing</h2><br><div class=\"card-group\"><div class=\"card\"><div class=\"container\"><h4><b>Procedure</b></h4><p>Automated testing is a testing done by human but with the help of automation tools.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Approach</b></h4><p>Automated testing does not allow random testing as the testing will be conducted using the test script.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Time taken</b></h4><p>Time taken to complete automated testing is very fast.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Tools</b></h4><p>Automation tools is required, and it is a must to have tool to execute the testing.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Cost</b></h4><p>Cost for tools is very expensive.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Manpower</b></h4><p>Required less tester as the testers are only needed to create the test script.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Accuracy</b></h4><p>High accuracy.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Technical skills</b></h4><p>Required tester to have good knowledge in programming language.</p></div></div></div><br><br><p><a type=\"reset\" id=\"reset\" onclick=\"resetAnswer()\">RESET</a></p>";
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.opacity = "1";
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch("http://localhost/decision-makingAPI/api/create.php?project_name="+project_name+"&email="+email+"&position="+position+"&testing_technique="+testing+"&tools_name="+tool_name+"&project_result=Automated Testing", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    console.log(scoretotal);
    console.log('yes = '+c1score);
    console.log('no = '+c2score);
    answerbox.innerHTML = "<br><h2>RESULT</h2><br><br><h2>Manual testing</h2><br><div class=\"card-group\"><div class=\"card\"><div class=\"container\"><h4><b>Procedure</b></h4><p>Manual testing is a testing done manually by human.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Approach</b></h4><p>Manual testing allowed the tester to do random testing in finding bugs and error.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Time taken</b></h4><p>Time taken to complete manual testing is very high (time consuming).</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Tools</b></h4><p>No tool is required to execute the testing.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Cost</b></h4><p>Not involved any cost for tools.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Manpower</b></h4><p>Required more tester as all the test cases will be executed manually.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Accuracy</b></h4><p>Low accuracy.</p></div></div><div class=\"card\"><div class=\"container\"><h4><b>Technical skills</b></h4><p>Not required any programming language.</p></div></div></div><br><br><p><a type=\"reset\" id=\"reset\" onclick=\"resetAnswer()\">RESET</a></p>";
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.opacity = "1";
  
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch("http://localhost/decision-makingAPI/api/create.php?project_name="+project_name+"&email="+email+"&position="+position+"&testing_technique="+testing+"&tools_name="+tool_name+"&project_result=Manual Testing", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // document.getElementById("wrapper").style.display = "none";
  // document.getElementById("wrapper2").style.opacity = "1";

  return;

}

// program the reset button
function resetAnswer() {
  // var answerbox = document.getElementById('answer');
  // answerbox.innerHTML = "Your result will show up here!";
  location.reload();
}