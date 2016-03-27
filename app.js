$(document).on('ready', function() {
//code here

console.log("JS is working");

letters = "abcdefghijklmnopqurstuvwxyz";
var ranLett1 = letters.substr( Math.floor(Math.random() * 27), 1);
var ranLett2 = letters.substr( Math.floor(Math.random() * 27), 1);
console.log(ranLett1);
console.log(ranLett2);


function handlebar_append() {
    var source = $('#random-template').html();
    var template = Handlebars.compile(source);
    var trackHtml = template({
     random1: ranLett1,
     random2: ranLett2
    });

    $('#rando').append(trackHtml);
}

handlebar_append();
var player1 ="P1";
var player2 ="P2";
var position1 = 1;
var position2 = 27;
$('#1').append(player1);
$('#27').append(player2);



$(window).on('keypress', function handler(event){
  if(event.keyCode === 97){
    console.log(event);
    if($("#" + position1).text !== "") {
      $("#" + position1).empty();
      position1++;
      $("#" + position1).text(player1);
    }
    if(position1 === 26){
      alert("Player 1 wins!");
    }
  }
});

$(window).on('keypress', function handler(event){
  if(event.keyCode === 112){
    console.log(event);
    if($("#" + position2).text !== "") {
      $("#" + position2).empty();
      position2++;
      $("#" + position2).text(player2);
    }
    if(position2 === 52){
      alert("Player 2 wins!");
    }
  }
});

$('.btn').on('click', function(e){
  $("#" + position1).text("");
  $("#" + position2).text("");
  position1 = 1;
  position2 = 27;
  $('#1').append(player1);
  $('#27').append(player2);
  // if(position1 === 26 || position2 === 52){
  //
  // }
});




});



// var player1 = 'x';
//   var player2 = 'y';
//   var position1 = 1;
//   var position2 = 12;
//   $("#1").append(player1);
//   $("#box24").append(player2);
//   $(window).on('keypress', function handler(event) {
//     console.log(1);
//     if (event.which === 97) {
//       if ($("#" + position1).text !== "") {
//         $("#" + position1).empty();
//         position1++;
//         $("#" + position1).text(player);
//         console.log("after key press");
//       }
//     }




// function Player (name, keycode, color){
//   this.name = name;
//   this.keycode = keycode;
//   this.color = color;
//   this.move = function () {
//     $(window).keypress(function moveRight(event){
//       console.log(event);
//       if (event.keyCode === 80){
//         $('#player1').animate({ "left": "+=20px" }, 0);
//       }
//     });
//   };
//
// }










// var player1 = new Player()
//
// function Player (color,keybutton,win){
//     this.= id;
//     this.keybutton = keybutton;
//     this.win = win;
//     this.move = function(){
//       $(window).on('keydown',function moveRight(event) {
//         if (event.keyCode === keybutton){
//           $('#'+id).animate({ "left": "+=20px" }, 0 );
//         }
//       });
//     };
//   }


// function random_character_box1() {
//     var letters = "abcdefghijklmnopqurstuvwxyz";
//     var ranLett1 = letters.substr( Math.floor(Math.random() * 27), 1);
//     var ranLett2 = letters.substr( Math.floor(Math.random() * 27), 1);
//     console.log(ranLett);
//
//     var source = $('#random-template').html();
//     var template = Handlebars.compile(source);
//     var trackHtml = template({
//      random1: ranLett1,
//      random2: ranLett2
//     });
//     console.log(trackHtml);
//     $('#rando').append(trackHtml);
// }
