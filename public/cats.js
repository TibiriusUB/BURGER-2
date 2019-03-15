// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-state").on("click", function (event) {
    var id = $(this).data("id");
    var newState = $(this).data("devoured");

    var cookedState = {
      devoured: newState
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: cookedState
    }).then(
      function () {
        console.log("changed cooked to", cookedState);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newRecipe = {
      name: $("#recipe").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newRecipe
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
