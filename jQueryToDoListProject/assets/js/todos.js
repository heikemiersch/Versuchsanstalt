// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on X to delete to-do (without triggering event-bubbling)
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// select input text and add event listener
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // extract input text value
        let newToDo = $(this).val();
        $(this).val("");
        // create a new li and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>")
    }
});

$("i").on("click", function () {
    $("input[type='text']").fadeToggle();
});