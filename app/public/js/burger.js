/* global moment */

// When user clicks add-btn
$("#burger-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newburger object
    var newburger = {
      burger: $("#burger").val().trim(),
      taste: $("#burger-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newburger);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newburger)
      // On success, run the following code
      .done(function() {
  
        var row = $("<div>");
        row.addClass("burger");
        
  
        row.append("<p>" + newburger.burger + " </p>");
        row.append("<p>" + newburger.taste + "</p>");
        row.append(`<p> eaten? false </p>`)
        row.append("<p>At " + moment(newburger.created_at).format("h:mma on dddd") + "</p>");
        row.append(`<a href="api/burger"<button id="devour" class="btn">Devour ${newburger.burger} </button></a>`)
  
        $("#burger-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#burger").val("");
    $("#burger-box").val("");
  });

$("#devour").on("click", function(){
    console.log("devoured")

})
  
  // When the page loads, grab all of our chirps
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("burger");
  
        row.append("<p>" + data[i].burger + " burger.. </p>");
        row.append("<p> How does it taste? " + data[i].taste + "</p>");
        row.append(`<p> eaten? ${data[i].is_devoured} </p>`)
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        row.append(`<button id="devour" class="btn">Devour? ${data[i].burger}</button>`)
  
        $("#burger-area").prepend(row);
  
      }
  
    }
  
  });
  