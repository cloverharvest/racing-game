$(document).on('ready', function() {
//code here

console.log("JS is working");

function random_character_box1() {
    var letters = "abcdefghijklmnopqurstuvwxyz";
    var ranLett1 = letters.substr( Math.floor(Math.random() * 27), 1);
    var ranLett2 = letters.substr( Math.floor(Math.random() * 27), 1);
    console.log(ranLett);

    var source = $('#random-template').html();
    var template = Handlebars.compile(source);
    var trackHtml = template({
     random1: ranLett1,
     random2: ranLett2
    });
    console.log(trackHtml);
    $('#rando').append(trackHtml);
}

random_character();




});


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
