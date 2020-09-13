let submit = document.getElementById("submit");
submit.addEventListener("click", checkUserName);
submit.addEventListener("click", checkEmail);
submit.addEventListener("click", checkPassword);
submit.addEventListener("click", allfields);
// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName(x) {
  let username = document.getElementById("usertext").value;
  if (
    username == null ||
    (username.length < 8 && username.length > 15) ||
    username.indexOf(" ") != -1
  ) {
    alert("invalid username");
    return false;
  } else return true;
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(x) {
  let email = document.getElementById("emailtext").value;
  var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]{2,4})(.[a-z]{2,4})?$/;
  if (regex.text(email)) return true;
  else {
    return false;
    alert("invalid email");
  }
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
  let password = document.getElementById("passwordtext");
  var reg = /^ ([a-zA-Z0-9!@#$%^&*()_]+) $/;
  if (regex.test(password)) return true;
  else {
    return false;
    alert("invalid");
  }
}
