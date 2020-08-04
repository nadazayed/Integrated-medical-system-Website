// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => 
{
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const name = signupForm['signup-name'].value;
  const phone = signupForm['signup-phone'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email.toLowerCase(), password).then(cred => {
      var user = firebase.auth().currentUser;
      //create uid in db
      return db.collection('MedicalProvider').doc(cred.user.uid).set({
          email: email.toLowerCase(),
          name: name.toLowerCase(),
          phone: phone
      }).then(() =>{
          user.sendEmailVerification().then(function() {
              alert ("Verification Email Sent.");
              const modal = document.querySelector('#modal-signup');
              M.Modal.getInstance(modal).close();
          });
          // sessionStorage.setItem('status','loggedIn');
          // window.location.replace("profile.html");
      })
  })

    .catch(function(error)
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') 
        {
          alert('Email aready used.');
        } 

        else if (errorCode == 'auth/invalid-email')
        {
            alert('Email is invalid.');
        }
        
        else 
        {
          alert(errorMessage);
        }
        console.log(error);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })

});

//Get credentials
function credentials()
{
    const email = loginForm['login-email'].value;

    db.collection("MedicalProvider").where("email","==",email.toLowerCase()).get()
        .then(function (querySnapshot)
        {
            if (querySnapshot.size >0)
            {
                querySnapshot.forEach(function (doc)
                {
                    sessionStorage.setItem('credentials',(doc.data().name).toLowerCase());
                    window.location.replace("profile.html");
                });
            }
            else
            {
                alert("User not found.");
            }
            loginForm.reset();
        })

        .catch(function (error)
        {
            alert(error);
            loginForm.reset();
        })
}


// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email.toLowerCase(), password)
      .then((cred) => {
    console.log(cred.user);

    var user = firebase.auth().currentUser;
    if (user != null && user.emailVerified)
    {
        console.log("Verified");
        sessionStorage.setItem('status','loggedIn');
        credentials();
    }
    else
    {
        user.sendEmailVerification();
        alert("Email is not verified.");
    }
  })

  .catch(function(error)
    {
        alert(error);
        console.log(error);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })

});

function reset()
{
    const email = loginForm['login-email'].value;
    var auth = firebase.auth();

    if (email != null && auth != null)
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            alert("Reset Password Email sent.")
        }).
        catch(function(error)
        {
            alert(error);
        });
    }
    else
    {
        alert("Error Occurred");
    }
}
