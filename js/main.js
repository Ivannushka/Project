
$(document).ready(function () {
  $("#link-color-changed").click(function () {
    $("#link-color-changed").css("color", "#F00");
  });
});

// ===========chat===========

$(".textUs").submit(function (event) {
  event.preventDefault();
  const addName = $("#myName").val();
  const addMyName = `

<span id="named">${addName}</span> 
`;
  $("#welcome").append(addMyName);
  $("#myName").val("");
});

////========CHAT textbox

function addMessage(submitEvent) {
  submitEvent.preventDefault();
  const newTextAdd = document.getElementById("usermsg");
  const textNew = newTextAdd.value;
  if (textNew === "") {
    alert("Please add your message");
    return false;
  }
  const textAddedString = `
<div>${textNew}</div>
`;
  const textElement = document.getElementById("chatbox");

  textElement.innerHTML += textAddedString;
  newTextAdd.value = "";
}

// PAGE 5 FORM
function validateForm() {
  let x = document.forms["forma"]["user"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["forma"]["pass"].value;
  if (y == "") {
    alert("pass  must be filled out");
    return false;
  }
  if (
    document.getElementById("password-input-field").value !==
    document.getElementById("retype-password").value
  ) {
    alert("Passwords does not match");
    return false;
  } else {
    alert("Successfully submitted");
    return false;
  }
}
