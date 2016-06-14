//This will create order.
function Order(name) {
  this.userName = name;
  this.ticketsOrdered = [];
}

/*This file is for your custom js.  All yours*/
function Ticket(movie, time, age) {
    this.title = movie;
    this.showtime = time;
    this.age = age;
}

Ticket.prototype.calculatePrice = function(){
  var ticketPrice = 15;
  if (this.showtime === "3:00PM") {
    ticketPrice -= 5;
  }
  if (this.age === "child" || this.age === "senior") {
    ticketPrice -= 3;
  }
  return ticketPrice;
}
// Function to calculate price when multiple tickets are purchased


// Calls input from form-input.html

$(document).ready(function(){

  $("#addTicketBtn").click(function() {
    $("#new-ticket-orders").append('<div class="new-ticket-order">'
                    + '<div class="form-group">'
                    +    '<label for="">Select Movie</label>'
                    +    '<select id="movies">'
                    +    '<option>The Firey Explosion</option>'
                    +    '<option>The Longing Embrace</option>'
                    +    '<option>The Laughable Dolt</option>'
                  +      '<option>The Historical Hero</option>'
                  +    '</select>'
                  +  '</div>'
                  +  '<div class="form-group">'
                  +    '<label for="">Show Time: </label>'
                  +    '<form action="">'
                  +      '<input type="radio" name="show-time" value="3:00PM" checked="checked">       3:00PM</input>'
                  +      '<input type="radio" name="show-time" value="9:15PM"> 9:15PM</input>'
                  +  '</div>'
                  +  '<div class="form-group">'
                  +      '<label for="">Age</label>'
                    +    '<select id="age">'
                    +      '<option value="child">Under 18</option>'
                    +      '<option value="adult">18-64</option>'
                    +      '<option value="senior">65+</option>'
                  +      '</select>'
                +    '</div>'
                +   '</div>')
  });

  $("#order-ticket").submit(function(event){
    event.preventDefault();

    var orderName = $("#userName").val();
    var currentOrder = new Order(orderName);

    $(".new-ticket-order").each(function(){
      var selectedMovie = $(this).find("#movies option:selected" ).val();
      var selectedTime = $(this).find('input[name=show-time]:checked').val()
      var selectedAge = $(this).find("#age option:selected").val();
      console.log(selectedAge);
      var ticketPurchase = new Ticket(selectedMovie, selectedTime, selectedAge);
      currentOrder.ticketsOrdered.push(ticketPurchase);
    });
    console.log(currentOrder);

    // Calculate current order total
    var calculateTotal = function() {
      var total = 0;
      for (i=0; i < currentOrder.ticketsOrdered.length; i++) {
       total += currentOrder.ticketsOrdered[i].calculatePrice();
       }
       return total;
       }
       var price = calculateTotal();

       currentOrder.ticketsOrdered.forEach(function(ticketOrdered){
         $("#output").show().append(
                "<p>The " + ticketOrdered.showtime + " showing of " + "'" + ticketOrdered.title +  "'"
              + "<br>" + "Ticket price: " + "$" + ticketOrdered.calculatePrice() + "</p>")
            });

            $("#ticket-total").text(price);

  });
});
