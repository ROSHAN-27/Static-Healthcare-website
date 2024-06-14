function login() {
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  

  const user = [
    username,
    password
  ];

  user.push[username,password];
  let str = JSON.stringify(user);
  localStorage.setItem('obj',str);


  if (username && password) {
    document.getElementById("Name").innerHTML = "Hello, " + username + "!";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}


// function login() {
//   var username = document.getElementById("userName").value;
//   var password = document.getElementById("password").value;

//   // Check if both username and password are provided
//   if (username && password) {
//       // Create or retrieve existing user data from localStorage
//       let users = JSON.parse(localStorage.getItem('users')) || [];

//       // Check if the username already exists
//       const existingUser = users.find(user => user.username === username);
//       if (existingUser) {
//           alert("Username already exists. Please choose a different one.");
//           return;
//       }

//       // Add the new user to the array
//       const newUser = { username, password, /* add more properties as needed */ };
//       users.push(newUser);

//       // Save the updated user array in localStorage
//       localStorage.setItem('users', JSON.stringify(users));

//       // Display a greeting message
//       document.getElementById("Name").innerHTML = "Hello, " + username + "!";
//   } else {
//       // Show an alert for invalid credentials
//       alert("Invalid credentials. Please try again.");
//   }
// }





// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
  
//     if (username && password) {
//       // Both username and password are provided
//       var greetingMessage = "Hello, " + username + "!";
//       document.getElementById("userName").textContent = greetingMessage;
  
//       // Store username in sessionStorage
//       sessionStorage.setItem("loggedInUser", username);
//       window.location.href = "homePage.html";
      
      
//     } else {
//       // Either username or password is missing
//       alert("Invalid credentials. Please enter both username and password.");
//     }
//   }

  // function displayUsername() {
  //   var username = sessionStorage.getItem("loggedInUser");
  //   if (username) {
  //     // Display the username on the page
  //     document.getElementById("displayUsername").textContent = "Welcome back, " + username + "!";
  //   }
  // }

  // displayUsername();