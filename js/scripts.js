/*This file is for your custom js.  All yours*/
function Ticket(movie, time, age) {
    this.title = movie;
    this.showtime = time;
    this.age = age;
}

Ticket.prototype.calculatePrice = function(){
  var ticketPrice = 15;
  if (this.showtime === "matinee") {
    ticketPrice -= 5;
  }
  if (this.age === "child" || this.age === "senior") {
    ticketPrice -= 3;
  }
  return ticketPrice;
}
// Calls input from form-input.html

$(document).ready(function(){

  $("#order-ticket").submit(function(event){
    event.preventDefault();
    var selectedMovie = $("#movies option:selected" ).val();
    var selectedTime = $('input[name=show-time]:checked').val()
    var selectedAge = $("#age option:selected").val();

    var ticketPurchase = new Ticket(selectedMovie, selectedTime, selectedAge);

    ticketPurchase.calculatePrice();

    $("#output").append("<li>")




  });
});
