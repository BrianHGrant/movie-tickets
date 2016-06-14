/*This file is for your custom js.  All yours*/
function Ticket(movie, time, age) {
    this.title = movie;
    this.showtime = time;
    this.age = age;
}
// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
