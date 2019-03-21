
$(function () {
    $(".change-state").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");
        let bool = 1
        if (newState === true) {
            bool = 0
        };
        var cookedState = {
            devoured: bool,
            id: id
        };
        console.log(cookedState)
        $.ajax("/api/burgers/eat", {
            type: "PUT",
            data: cookedState
        }).then(
            function () {
                console.log("changed cooked to", cookedState[1]);
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
});
