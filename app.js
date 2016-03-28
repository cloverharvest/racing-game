$(document).on('ready', function() {
//code here

console.log("JS is working");
/* code to get random letter for future version of game */
letters = "abcdefghijklmnopqurstuvwxyz";
var ranLett1 = letters.substr( Math.floor(Math.random() * 27), 1);
var ranLett2 = letters.substr( Math.floor(Math.random() * 27), 1);
console.log(ranLett1);
console.log(ranLett2);

/* appending random letter to screen using handlebars */
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


/* function to move player1 */
$(window).on('keypress', function handler(event){
  if(event.keyCode === ranLett1.charCodeAt() ){
    console.log(event);
    if($("#" + position1).text !== "") {
      $("#" + position1).empty();
      position1++;
      $("#" + position1).text(player1);
      ranLett1 = letters.substr( Math.floor(Math.random() * 27), 1);
      $('#rand-box-1').text(ranLett1);
    }
    if(position1 === 26){
      alert("Player 1 wins!");
    }
  }
});

/*function to move player2*/
$(window).on('keypress', function handler(event){
  if(event.keyCode === ranLett2.charCodeAt()){
    console.log(event);
    if($("#" + position2).text !== "") {
      $("#" + position2).empty();
      position2++;
      $("#" + position2).text(player2);
      ranLett2 = letters.substr( Math.floor(Math.random() * 27), 1);
      $('#rand-box-2').text(ranLett2);
    }
    if(position2 === 52){
      alert("Player 2 wins!");
    }
  }
});

/* code to play with */
// function Player (name, position, ranLett, keycode, winpos) {
//   this.name = name;
//   this.position = position;
//   this.randomLetter = ranLett;
//   this.keycode = keycode;
//   this.winposition = winpos;
//   this.move = $(window).on('keypress', function handler(event){
//     if(event.keycode === this.keycode){
//       if($("#" + this.position).text !== "") {
//         $("#" + this.position).empty();
//         this.position++;
//         $("#" + this.position).text(this.name);
//       }
//     }
//   this.win = function () {
//     if(this.position === this.winposition) {
//       alert("this.name" + "wins!");
//     }
//   };
// });
// }
//
//   var player1 = new Player("P1", 1, "", 97, 26);
//   var player2 = new Player("P2", 27, "", 112, 52);
//
//   $('#1').append(player1);
//   $('#27').append(player2);
//
//   player1.move();

/* Reset Button */
$('.btn').on('click', function(e){
  $("#" + position1).text("");
  $("#" + position2).text("");
  position1 = 1;
  position2 = 27;
  $('#1').append(player1);
  $('#27').append(player2);
});




});

//hello, glad it was solved.
