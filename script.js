const callButton = document.getElementById('call-button');


callButton.addEventListener('click', function() {

    alert("Calling the given number...");

    // Here, you can perform the desired action when the button is clicked

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var date = document.getElementById('date-input').value;
    var time = document.getElementById('time-input').value;

    // Print the user information to the console
    console.log('Name:', username);
    console.log('Email:', email);
    console.log('Phone:', number);
    console.log('Date:', date);
    console.log('Time:', time);

    
    
    // You can replace the alert with the code to initiate a call using appropriate APIs or technologies
});
