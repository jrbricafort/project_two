$(document).ready(function () {

    var updating = false;
    // Adding an event listener for when the form is submitted
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        var form = true;
        if (form === true) {
            var userInput = {
                name: $('#name').val().trim(),
                question1: $('#question1').val().trim(),
                question2: $('#question2').val().trim(),
                question3: $('#question3').val().trim(),
                question4: $('#question4').val().trim(),
                question5: $('#question5').val().trim(),
            };
            console.log(userInput);
        }

        // Constructing a new object to hand to the database
        var input = {
            name: $("#name").val().trim(),
            activityLevel: $('#question1').val().trim(),
            workhours: $('#question2').val().trim(),
            activityTime: $('#question3').val().trim(),
            sociability: $('#question4').val().trim(),
            sociability: $('#question5').val().trim(),
        };

        submitPost(input);

        // Submits a new input and brings user to blog page upon completion
        function submitPost(adopt) {
            $.post("/api/adopts", adopt, function () {
                window.location.href = "/homepage";
            }); 
        }

        // Clear the form when submitting
        $("#name").val("");
        $("#question1").val("");
        $("#question2").val("");
        $("#question3").val("");
        $("#question4").val("");
        $("#question5").val("");

    });
})