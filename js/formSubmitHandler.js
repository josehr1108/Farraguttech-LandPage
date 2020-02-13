var token = "696dcd8b-e240-4eb0-8b02-ce99512a3668";

$("#serviceRequestForm").submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();

    
    /*Email.send({
        SecureToken : token,
        To : 'farraguttech@gmail.com',
        From : "you@isp.com",
        Subject : "New Service Request for Farraguttech",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );*/
});