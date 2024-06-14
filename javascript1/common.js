function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function check() {
  var fdbk = document.getElementById("text").value;
  var textarea = fdbk.length;
  var charleft = 250 - textarea;
  var count = document.getElementById("count");
  count.innerHTML = " Characters Left " + charleft;
}

function validate() {
  let name = document.getElementById("nameId").value;
  let error = document.getElementById("count");
  error.innerHTML;

  let number = document.getElementById("numberId").value;
  let error1 = document.getElementById("count1");
  error1.innerHTML;

  let email = document.getElementById("emailId").value;
  let error2 = document.getElementById("count2");
  error2.innerHTML;

  let username = document.getElementById("userId").value;
  let error3 = document.getElementById("count3");
  error3.innerHTML;

  let password = document.getElementById("passwordId").value;
  let error4 = document.getElementById("count4");
  error4.innerHTML;

  let confirmPassword = document.getElementById("confirmId").value;
  let error5 = document.getElementById("count5");
  error5.innerHTML;

  let errors = {
    name: "Enter Name",
    number: "Enter Mobile Number",
    email: "Enter Email Id",
    username: "Create Username",
    password: "Enter Password",
    confirmPassword: "Password Match ✓",
    passwordMismatch: "Password Not Match! ×",
  };

  switch (true) {
    case name === "":
      error.innerHTML = errors.name;

    case number === "":
      error1.innerHTML = errors.number;

    case email === "":
      error2.innerHTML = errors.email;

    case username === "":
      error3.innerHTML = errors.username;

    case password === "":
      error4.innerHTML = errors.password;
      break;

    case password === confirmPassword:
      error5.innerHTML = errors.confirmPassword;
      break;

    default:
      error5.innerHTML = errors.passwordMismatch;
  }

  // if (name === "") {
  //      error .innerHTML = "Enter Name " ;
  // }

  //  if (number === "") {
  //      error1 . innerHTML = " Enter Mobile Number ";
  // }

  // if( email === "") {
  //     error2.innerHTML = "Enter Email Id " ;
  // }

  // if (username === "") {
  //     error3.innerHTML = "Create Username";
  // }

  // if ( password === "") {
  //     error4.innerHTML = " Enter Password";
  // } else   if ( password === confirmPassword) {
  //     error5.innerHTML = "Password Match ✓";
  // } else {
  //     error5.innerHTML = "Password Not Match! ×";
  // }
}

// function vanish(arg) {
//   if (arg === "name") {
//     document.getElementById("count").innerHTML = " ";
//   } else if (arg === "number") {
//     document.getElementById("count1").innerHTML = " ";
//   } else if (arg === "email") { '
//     document.getElementById("count2").innerHTML = " ";
//   } else if (arg === "user") {
//     document.getElementById("count3").innerHTML = " ";
//   } else if (arg === "password") {
//     document.getElementById("count4").innerHTML = " ";
//   }
// }
function vanish(arg) {
  switch (arg) {
    case "name":
      document.getElementById("count").innerHTML = " ";
      break;
    case "number":
      document.getElementById("count1").innerHTML = " ";
      break;
    case "email":
      document.getElementById("count2").innerHTML = " ";
      break;
    case "user":
      document.getElementById("count3").innerHTML = " ";
      break;
    case "password":
      document.getElementById("count4").innerHTML = " ";
      break;
    default:
      break;
  }
}

// function login() {
//   let username = document.getElementById("userName").value;
//   let password = document.getElementById("password").value;

