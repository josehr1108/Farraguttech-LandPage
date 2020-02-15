//No ES6 for now(gulp-babel needed)
var token = "696dcd8b-e240-4eb0-8b02-ce99512a3668";

$("#serviceRequestForm").submit(function( event ) {
    event.preventDefault();

    var contactFullName = $('#contactName').val();
    var companyName = $('#companyName').val();
    var contactEmail = $('#contactEmail').val();
    var projectTitle = $('#projectTitle').val();
    var projectDescription = $('#projectDescription').val();
    var serviceRequested = $('#serviceRequested').val();
    var projectScope = $('#projectScope').val();
    var projectBudget = $('#projectBudget').val();

    
    var emailBody = getEmailBody(contactFullName,companyName,contactEmail,projectTitle,
                                projectDescription,serviceRequested,projectScope,projectBudget);
    
    Email.send({
        SecureToken : token,
        To : 'farraguttech@gmail.com',
        From : 'farraguttech@gmail.com',
        Subject : "There is a new service request from Farraguttech",
        Body : emailBody
    }).then(function(message){
      console.info("Message is: " + message);
      if(message == "OK"){
        Swal.fire(
          'Request Sent!',
          'Your request has been sent successfully, we will get in contact as soon as posible',
          'success'
        )
      }else{
        Swal.fire(
          'There was an error!',
          'Your request has not been sent, try again or contact farraguttech@gmail.com if the problem persist',
          'error'
        )
      }
    });
});

function getEmailBody(name,companyName,email,title,description,service,scope,budget){
  var str = "<div style=\"background-color:#f5f5f5;width: 100%\"> " +
              "<div style=\"max-width:500px;margin:0 auto;background-color:white;\">" + 
                "<div style=\"margin:0 auto;background-color:#00b9ff;color: white;height:50px\">"+
            	    "<h2 style=\"text-align:center\">You have received a new project request!</h2>"+
                "</div>"+
                "<div style=\"color:black;padding-top:20px;width:90%;margin:0 auto;\">"+
                  "<p>There is a new service request sent from the website, here is the information provided:</p>"+
                  "<ul>"+
                    "<li>Contact Full Name: "+ name +"</li>"+
                    "<li>Company/Organization Name: "+ companyName +"</li>"+
                    "<li>Contact Email: "+ email +"</li>"+
                    "<li>Project Title: "+ title +"</li>"+
                    "<li>Project Description: "+ description +"</li>"+
                    "<li>Requested Service: "+ service +"</li>"+
                    "<li>Project Scope: "+ scope +"</li>"+
                    "<li>Project Budget: "+ budget +"</li>"+
                  "</ul>"+
                  "<p>Try to get in contact with the sender to complete the business!</p>"                                
                "</div>"+
  	          "</div>"+
            "</div>";
  return str;
}