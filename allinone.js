document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to close icon
    document.getElementById('closeIcon').addEventListener('click', () => {
        var formcontainer = document.querySelector('.form');
        if (formcontainer) {
            formcontainer.style.display = 'none'; // Hide the form instead of removing it
            document.body.style.opacity='1';
        }
    });


    // Add click event listener to the "Login" button
    const loginCheck = localStorage.getItem('isLogin')
    if(loginCheck){
            const profile = document.getElementById('profile');
            profile.style.display = 'block';
            const loginnow = document.getElementById('login-button');
            loginnow.style.display = 'none';
        }


    document.querySelector('#header .btnlogin').addEventListener('click', function() {

        if(loginCheck){
            alert('login already done')
            const profile =   document.getElementById('profile');
            profile.style.display = 'block';
        }else{
            var formshow = document.getElementById('btnlogin'); // Select the form container by its ID
            if (formshow) {
                formshow.style.display = 'block';
            }
        }
    });



    // Add click event listener to the "Login" link

    document.getElementById('loginhere').addEventListener('click', function() {
        var loginform = document.getElementById('loginbtn');
        var signup = document.getElementById('btnlogin');
        if (loginform) {
            signup.style.display = 'none';
            loginform.style.display = 'block';
        }
    });

    // for back to signup
    document.getElementById('arrowleft').addEventListener('click', function() {
        var loginform = document.getElementById('loginbtn');
        var signup = document.getElementById('btnlogin');
        if(loginform)
        {
            loginform.style.display='none';
            signup.style.display='block';
        }
    });   

    // for back to login
    document.getElementById('leftarrow').addEventListener('click', function() {
        var loginform = document.getElementById('loginbtn');
        var signup = document.getElementById('btnlogin');
        var forgotpassword = document.getElementById('forgotpassword');
        if(loginform)
        {
            loginform.style.display='block';
            signup.style.display='none';
            forgotpassword.style.display = 'none';

        }
    });   

    // for forgotpassword popup
    document.getElementById('forgotpswd').addEventListener('click', function() {
        var loginform = document.getElementById('loginbtn');
        var signup = document.getElementById('btnlogin');
        var forgotpassword = document.getElementById('forgotpassword');
        if(forgotpassword)
        {
            loginform.style.display='none';
            signup.style.display='none';
            forgotpassword.style.display='block';
        }

    });

        // get signup value and check whether it is already present or not

    document.getElementById('signin').addEventListener('click', function () {
    // Get user input data
    const name = document.getElementById('namevalue').value;
    const email = document.getElementById('emailvalue').value;
    const password = document.getElementById('passwordvalue').value; // Corrected the ID
    const confirmPassword = document.getElementById('confirmpassword').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const address = document.getElementById('addressid').value;
    const email_check = email.trim();
    if(email_check.includes('@') && phoneNumber.length===10){
    // Construct the API URL with query parameters
    const apiUrl = `http://10.140.0.25/signupuser.php?name=${name}&email=${email}&password=${password}&confirmpassword=${confirmPassword}&phonenumber=${phoneNumber}&address=${address}`;

    // Make a GET request to your PHP API
    fetch(apiUrl)
        .then(response => response.json())
        .then(result => {
            if (result.response === 'User with the same phone number already exists') {
                alert('User with the same phone number already exists.');
            } else if (result.response === 'Account has been successfully created') {
                
                alert('Registration successful!');
            } else {
                alert('Password and confirm password do not match');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    }
    else{
        alert('Details are not correct');
    }
}); 

        document.getElementById('loginnow').addEventListener('click', function () {
    // Get user input data
    const emailhere = document.getElementById('emailhere').value;
    const passwordhere = document.getElementById('passwordhere').value;

    // Construct the API URL
    const apiUrl = `http://10.140.0.25/loginuser.php?email=${emailhere}&password=${passwordhere}`;

    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(result => {
        if (result.response === 'successful authentication') {
            // Save user data to local storage
          localStorage.setItem('name', result.name);
          localStorage.setItem('email', result.email);
          localStorage.setItem('phone', result.phone);
          localStorage.setItem('address', result.address);
          const bag1 = document.getElementById('bag1');
          bag1.style.display='block';
          const profile = document.getElementById('profile');
          profile.style.display = 'block';
          const loginuserbutton = document.getElementById('login-button');
          loginuserbutton.style.display = 'none';
        //   loginbtn.style.display  = 'none';
          localStorage.setItem('isLogin', true);
          loginbtn.style.display = 'none';
          // Redirect to the new HTML page
          // Redirect or perform other actions for a successful login
        } else if (result.response === 'not successful authentication') {
          alert('Login failed');
          // Handle login failure (e.g., display an error message)
        } else {
          alert('Something went wrong');
          // Handle unexpected errors
        }
      });
});

        document.getElementById('passwordhere').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Simulate a click on the login button
        document.getElementById('loginnow').click();
    }
});


    // // for visit the user information after login successfull 

         document.getElementById('profile').addEventListener('click', function()  {
        window.location.href = 'myprofile.html';
    });
          });