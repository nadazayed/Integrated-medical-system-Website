 function show()
{
  // Get the output text
      sp = document.getElementById("pregchoice");

    if ( document.getElementById("female").checked == true) {

        sp.style.display = "block";
    }
    else
    {
        sp.style.display = "none";
        pregnant = false;
        notPregnant = false;
    }
  }