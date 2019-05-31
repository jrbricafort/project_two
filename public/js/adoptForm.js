$(document).ready(function () {
    $('#modal1').on('hide.bs.modal', function (e) {
        $('#modal1').html(`<div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Your Matches!!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>`)
    })
    var email = "";
    // Adding an event listener for when the form is submitted
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        email = $("#email").val().trim();
        var form = true;
        if (form === true) {
            var userInput = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                question1: $('#question1').val().trim(),
                question2: $('#question2').val().trim(),
                question3: $('#question3').val().trim(),
                question4: $('#question4').val().trim(),
                question5: $('#question5').val().trim(),
            };
            console.log(userInput);


            // Add user inputs
            $.post("/api/pets", userInput, function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var petCard = `
                    <div class="card">
                        <img src = "${data[i].petPicture}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].petName}</h5>
                            <h5 class="card-title">${data[i].gender}</h5>
                            <p class="card-text">The pet fun facts: ${data[i].funFacts}</p>
                            <a href="#" 
                                petId= "${data[i].id}"
                                petName = "${data[i].petName}"
                                petUrl = "${data[i].petPicture}"
                                petGender = "${data[i].gender}"
                                petFacts = "${data[i].funFacts}"
                                class="btn btn-primary emailBtn">Email Selection</a>
                        </div>
                    </div>
                    <br>
                    `;
                    $(".modal-body").append(petCard);
                }
                $('#modal1').modal("toggle");
            });
        } else {
            // If a required field is missing, show alert
            alert("Survey is incomplete!");
        }

        // Clear the form when submitting
        $("#name").val("");
        $("#email").val("");
        $("#question1").val("Select an Option");
        $("#question2").val("Select an Option");
        $("#question3").val("Select an Option");
        $("#question4").val("Select an Option");
        $("#question5").val("Select an Option");

    });

    $(document).on("click", ".emailBtn", function (event) {
        location.reload();
        // event.preventDefault();
        var petInfo = {
            petId: $(this).attr("petId"),
            petGender: $(this).attr("petGender"),
            petName: $(this).attr("petName"),
            petUrl: $(this).attr("petUrl"),
            petFacts: $(this).attr("petFacts"),
            email: email
        }
        console.log(petInfo);
        $.post("/api/emailInfo", petInfo, function (data) {
            console.log(data);
        })
        alert("Message Sent!");
    })
})