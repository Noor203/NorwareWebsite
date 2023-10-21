function confirmBox(){
    //storing data that needs to be validated before submitting
    var inputEmail = document.getElementById("enter-email").value; 
    var confirmEmail = document.getElementById("confirm-email").value;
    
    if (inputEmail != confirmEmail){
         alert("Emails do not match.");
         return false; //prevents page from reloading before user can fix email
    }

    else{
    var inputName = document.getElementById("enter-name").value;
    var inputNum = document.getElementById("enter-number").value;  
    var endDate = document.getElementById("end-date").value;
    var startDate  = document.getElementById("start-date").value;


    confirm("Are you sure this information is correct?" + "\nName: " + inputName + 
    "\nEmail: " + inputEmail + "\nPhone number: " + inputNum + "\nStart date: " + startDate +
     "\nEnd date: " + endDate);
    }
}