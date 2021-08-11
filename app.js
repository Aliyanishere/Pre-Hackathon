var myQuestions = [
  {
    question: "Q1) What is the full form of HTML?",
    answers: {
      a: "HighText Machine Language",
      b: "HyperText and links Markup Language",
      c: "HyperText Markup Language",
      d: "Hello To My Land"
    },
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "Q2) HTML language is a set of markup",
    answers: {
      a: "Attributes",
      b: "Tags",
      c: "Sets",
      d: "Groups"
    },
    correctAnswer: "Tags"
  },
  {
    question: "Q3) HTML was first proposed in a year",
    answers: {
      a: "1980",
      b: "1990",
      c: "1995",
      d: "2000"
    },
    correctAnswer: "1990"
  },
  {
    question: "Q4) Page designed in HTML is called a",
    answers: {
      a: "Yellow Page",
      b: "Web Page",
      c: "Server Page",
      d: "Front Page"
    },
    correctAnswer: "Web Page"
  },
  {
    question: "Q5) HTML tags are used to describe document",
    answers: {
      a: "Definition",
      b: "Language",
      c: "Content",
      d: "None of these"
    },
    correctAnswer: "Content"
  },
  {
    question: "Q6) Which company developed JavaScript?",
    answers: {
      a: "Netscape",
      b: "Bell Labs",
      c: "Sun Microsystems",
      d: "IBM"
    },
    correctAnswer: "Netscape"
  },
  {
    question: "Q7) The CSS property used to make the text bold is",
    answers: {
      a: "font-weight : bold",
      b: "weight: bold",
      c: "font: bold",
      d: "style: bol"
    },
    correctAnswer: "font-weight : bold"
  },
  {
    question: "Q8) Which of the following is correct about features of JavaScript?",
    answers: {
      a: "It can not Handling dates and time",
      b: "JavaScript is a object-based scripting language",
      c: "JavaScript is not interpreter based scripting language",
      d: "All of the above"
    },
    correctAnswer: "JavaScript is a object-based scripting language"
  },
  {
    question: "Q9) Choose the correct JavaScript syntax to change the content of the following",
    answers: {
      a: "document.getElement ('develop').innerHTML = 'I am a Web Developer';",
      b: "document.getElementById ('develop').innerHTML = 'I am a Web Developer';",
      c: "document.getId ('develop') = 'I am a Web Developer';",
      d: "document.getElementById ('develop').innerHTML = I am a Web Developer;"
    },
    correctAnswer: "document.getElementById ('develop').innerHTML = 'I am a Web Developer';"
  },
  {
    question: "Q10) Which of the following is the correct syntax to display 'Web Developer' in an alert box using JavaScript?",
    answers: {
      a: "alert-box('Web Developer');",
      b: "confirm('Web Developer');",
      c: "msgbox('Web Developer');",
      d: "alert('Web Developer');"
    },
    correctAnswer: "alert('Web Developer');"
  },
  {
    question: "Q11) The CSS property used to specify the transparency of an element is",
    answers: {
      a: "opacity",
      b: "filter",
      c: "visibility",
      d: "overlay"
    },
    correctAnswer: "opacity"
  },
  {
    question: "Q12) The property in CSS used to change the background color of an element is",
    answers: {
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "All of the above"
    },
    correctAnswer: "background-color"
  },
  {
    question: "Q13) CSS stands for ",
    answers: {
      a: "Cascade style sheets",
      b: "Color and style sheets",
      c: "Cascading style sheets",
      d: "None of the above"
    },
    correctAnswer: "Cascading style sheets"
  },
  {
    question: "Q14) The CSS property used to control the element's font-size is",
    answers: {
      a: "text-style",
      b: "text-size",
      c: "font-size",
      d: "None of the above"
    },
    correctAnswer: "font-size"
  },
  {
    question: "Q15) Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answers: {
      a: "a {text-decoration : underline;}",
      b: "a {decoration : no-underline;}",
      c: "a {text-decoration : none;}",
      d: "None of the above"
    },
    correctAnswer: "a {text-decoration : none;}"
  }
];

var question = 0;
var score = 0;
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let min = 0;
let sec = 0;
setInterval(function () {
  sec++;
  seconds.innerHTML = sec;
  if (sec == 60) {
    sec = 0;
    seconds.innerHTML = sec;
    min++;
    minutes.innerHTML = min;
  }
  else if (min == 7) {
    result();
  }
}, 740);
function onPageLoad() {
  document.getElementById("quizName").innerHTML = "HTML | CSS | JAVASCRIPT"
  if (question == myQuestions.length) {
    document.getElementById("nextBtn").innerHTML = "Submit Quiz";
    document.getElementById("nextBtn").setAttribute("onclick", "result()");
  }
  else {
    document.getElementById("questions").innerHTML = myQuestions[question].question;
    document.getElementById("answ1").innerHTML = myQuestions[question].answers.a;
    document.getElementById("answ2").innerHTML = myQuestions[question].answers.b;
    document.getElementById("answ3").innerHTML = myQuestions[question].answers.c;
    document.getElementById("answ4").innerHTML = myQuestions[question].answers.d;
    ++question;
  }
  // var a = document.getElementsByName("one");
  // var c = document.getElementsByClassName("one");
  // let b;
  // for(var i=0; i<a.length; i++){
  //   if(a[i].checked == true){
  //     b = c[i].innerHTML;
  //   }
  // }
  // console.log(b)
  var checkedRadio = document.getElementsByName("ans");
  for (var i = 0; i < checkedRadio.length; i++) {
    if (checkedRadio[i].checked == true) {
      checkedRadio[i].checked = false;
    }
  }
}

function result() {
  document.getElementById("hid").setAttribute("class", "forhide");
  var a = document.getElementById("firsthide")
  a.classList.remove("resultCard")
}

function nextQues() {
  onPageLoad();
}

function easy() {
  window.location.replace("quiz.html");
}















// function ButtonToStart() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   if (email == "hussainaliyan531@gmail.com" && password == "Hello World") {
//     window.location = "level.html";
//   }
//   else if (email == "" || password == "") {
//     alert("Please enter all feilds.");
//   }
//   else {
//     alert("Wrong Username or Pawword!\nPlease try again.");
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";
//   }
// }
let arr = [];
if(arr !== null){
  localStorage.getItem(JSON.parse("name"));
}
function signup() {
  var name = document.getElementById("name"); 
  var email2 = document.getElementById("email2");
  var password2 = document.getElementById("password2");
  firebase.auth().createUserWithEmailAndPassword(email2.value, password2.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    var userName = {
      name: name.value
    }
    arr.push(userName);
    localStorage.setItem("name",JSON.stringify(arr))
    console.log(userCredential)
    alert("Account created successfully");
    email2.value = "";
    password2.value = "";
    name.value = "";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // userCredential.displayName = name1.value;
// console.log(userCredential.displayName)
    window.location.replace("level.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}


function signout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.replace("index.html");
  }).catch((error) => {
    // An error happened.
  });
}

// var a = 'enaik',