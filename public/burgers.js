$(function () {
    $(".change-state").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");
        console.log("HITME!")
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
        console.log("am I on?")
        event.preventDefault();
        var newRecipe = {
            name: $("#recipe").val().trim(),
        };
        console.log("am I on?")
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
});