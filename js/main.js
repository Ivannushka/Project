// document.querySelector('#link-color-changed').addEventListener('click', function () {
//     const linkElements = document.querySelectorAll('.linked');
//     for (const linkElement of linkElements) {

    
//     linkElement.style.color = "red";
// }

// document.querySelector('#link-color-changed').addEventListener('click', clickHappened);
// function clickHappened() {
//     const linkElements = document.querySelector
//  linkElements.style.color = "red";
// }

// let elements = document.querySelectorAll('.linked:hover');
// for (let elem of elements) {
//     // alert(elem.innerHTML);
//     elem.style.color = 'red';
// }

///mistake
// document.getElementById("link-color-changed").addEventListener("click", function() {
// this.style.color = "red";
// }
// work
// function myFunction() {
//     let x = document.getElementById('navi').querySelectorAll('a');
//     x[0].style.color = 'red';
// }
//
//
//work
    $(document).ready(function() {
        $('#link-color-changed').click(function() {
        $('#link-color-changed').css('color','#F00')
        // $('#text').css('font-size','30px')
        });
        });
//working more red
        // $('.navigation [href]').each(function() {
        //     if (this.href == window.location.href) {
        //       $(this).addClass('active');
        //     }
        //   });
 
//not working
        // $('.linked').click(function(event) {
        //     $('.linked').removeClass('active');
        //     $(this).addClass('active');
        //   });


      //not working
	// $(function() {

	// 	var pathname_url = window.location.pathname;
	// 	var href_url = window.location.href;

	// 	$(".linked").each(function () {

	// 		var link = $(this).find("a").attr("href");

	// 		if(pathname_url == link || href_url == link) {

	// 			$(this).addClass("active");

	// 		}

	// 	});

	// });

	// CHAT 4 PAGE
///working not submit chat wrong
        // $('#usermsg').keypress(function() {
        //         const newMessage = $(this).val();
        //         $('#chatbox').text(newMessage);

        // });


        ///working chat jQuerry not fully ok, just one sentense appears at the chat box
        
//         $('.textUs').submit(function(event) {
//         event.preventDefault();
//         const newText = $('#usermsg').val();
//         // if(newText === '') {
//         //         alert('Please enter your message');
//         // return;
//         // }
// const addText = `
// <div id="chatbox"> ${newText}</div>
// `;
// $('#chatbox').append(addText);
// $('#usermsg').val('');
// // document.getElementById('#chatbox').innerHTML += addText
//         });

// for username input not working

        // $('.textUs').submit(function(event) {
        //         event.preventDefault();
        //         const addName = $('#myName').val();
        //         if(addName === '') {
        //                 alert('Please enter your message');
        //         return;
        //         }
        // const addMyName = `
        // <p class="welcome">Welcome, ${addName}<b></b></p>
        // `;
        // $('.welcome').append(addName);
        // $('#myName').val('');
        // // document.getElementById('#chatbox').innerHTML += addText
        //         });

////compleatly working!!! vanilla

function addMessage(submitEvent) {
        submitEvent.preventDefault();
        const newTextAdd = document.getElementById('usermsg');  
        const textNew = newTextAdd.value;

// if (textNew === '') {
// alert ('Please text smth');
// return false;
// }
      
/// 1 WORKING VARIANTT extract without clean up input
//  submitEvent.preventDefault();
//  const newTextAdd = document.getElementById('usermsg').value;
// const textNew = newTextAdd.value;

const textAddedString = `
<div>${textNew}</div>
`;
const textElement = document.getElementById('chatbox');

textElement.innerHTML += textAddedString;
// newTextAdd.value = '';
newTextAdd.value = '';
}

///// not working for input name
// function addName(submitEvent) {
//         submitEvent.preventDefault();
//         const nameAdd = document.getElementById('myName');  
//         const addMyName = nameAdd.value;

// // if (addMyName  === '') {
// // alert ('Please add name');
// // return false;
// // }
// const nameString = `
// <p onsubmit="addName(event)" id="welcome">Welcome, ${addMyName}<b></b></p>
// `;
// const nameElement = document.getElementById('welcome');

// nameElement.innerHTML += nameString;
// // newTextAdd.value = '';
// nameAdd.value = '';
// }


/// embeded 2 var together not working
// function addMessage(submitEvent) {
//         submitEvent.preventDefault();
//         const newTextAdd = document.getElementById('usermsg');  
//         const textNew = newTextAdd.value;
//         const nameAdd = document.getElementById('myName');  
//         const addMyName = nameAdd.value;


// const textAddedString = `
// <div>${textNew}</div>
// `;
// const textElement = document.getElementById('chatbox');

// const nameString = `
// <p id="welcome">Welcome, ${addMyName}<b></b></p>
// `;
// const nameElement = document.getElementById('welcome');

// textElement.innerHTML += textAddedString;
// newTextAdd.value = '';
// nameElement.innerHTML += nameString;
// nameAdd.value = '';
// }

///ABOUT US
$( function() {
        $( "#tabs" ).tabs();
      } );