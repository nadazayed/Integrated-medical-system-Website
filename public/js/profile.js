
//profile
console.log("n");
const profileForm = document.querySelector('#profile-form');
const readForm = document.querySelector('#reading-form');
const medcForm = document.querySelector('#medc-form');
const allergiesForm = document.querySelector('#allergies-form');
const proceduresForm = document.querySelector('#procedures-form');
const testsForm = document.querySelector('#tests-form');

const btn_insrt = document.getElementById('btn_insrt');
const btn_allergies = document.getElementById('btn_insrt_allergies');
const btn_procedures = document.getElementById('btn_insrt_procedures');
const btn_tests = document.getElementById('btn_insrt_tests');

function logout()
{
    auth.signOut().then(function()
    {
        sessionStorage.setItem('status','loggedOut');
        window.location.replace("index.html");
    }, function(error)
    {
        console.log("Error in logout");
    });
}

function emergency()
{
    window.location.replace("sos.html");
}

function community()
{
    window.location.replace("community.html");
}

profileForm.addEventListener('submit', (e) => 
{   
  e.preventDefault();
  
  const username = profileForm['profile-username'].value;
  //console.log(username);

  db.collection("Patient").where("name","==",username.toLowerCase()).get()
  .then(function (querySnapshot)
  {
      if (querySnapshot.size >0)
      {
        querySnapshot.forEach(function (doc) 
        {
            btn_insrt.removeAttribute("disabled");
            btn_allergies.removeAttribute("disabled");
            btn_procedures.removeAttribute("disabled");
            btn_tests.removeAttribute("disabled");

            (document.getElementById("hr_chart")).style.display = "block";
            (document.getElementById("steps_chart")).style.display = "block";
            setDetails(doc.data());
        });
      }
      else
      {
          alert("Patient doesn't exist");
          //profileForm.reset();
          //setDetails(null);
          btn_insrt.setAttribute("disabled", "true");
          btn_allergies.setAttribute("disabled", "true");
          btn_procedures.setAttribute("disabled", "true");
          btn_tests.setAttribute("disabled","true");

          profileForm.reset();
          (document.getElementById("hr_chart")).style.display = "none";
          (document.getElementById("steps_chart")).style.display = "none";
          medcForm.reset();
      }
      
  })
  
});


medcForm.addEventListener('submit', (e) => 
{
    //14=1=4=1=Take after launch
    e.preventDefault();

    const username = profileForm['profile-username'].value;

    const medcName = medcForm['profile-medName'].value;
    const medcDays = medcForm['profile-medDays'].value;
    const medTimes = medcForm['profile-medTimes'].value;
    const medTime = medcForm['profile-medTime'].value;
    const medDose = medcForm['profile-medDose'].value;
    const medDesc = medcForm['profile-medDesc'].value;

    var currentdate = new Date(); 
    var datetime =currentdate.getDate();

    const data = medcDays+"="+medTimes+"="+medTime+"="+medDose+"="+medDesc+"="+datetime;

    db.collection("Patient").where("name","==",username.toLowerCase()).get()
    .then(function (querySnapshot)
    {
        if (querySnapshot.size >0)
        {
            querySnapshot.forEach(function (doc) 
            {
                console.log(doc.id, " => ", doc.data());
                // Build doc ref from doc.id
                db.collection("Patient").doc(doc.id).update({["medication."+medcName.toLowerCase()] : data.toLowerCase()}); //medication.avamys : medArr
            });
        }
        medcForm.reset(); 
    })

});

proceduresForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const username = profileForm['profile-username'].value;

    const procedureName = proceduresForm['profile-proName'].value;
    const procedureDate = proceduresForm['profile-proDate'].value;
    const procedureDesc = proceduresForm['profile-proDesc'].value;

    const data = procedureDate+"="+procedureDesc;
    db.collection("Patient").where("name","==",username.toLowerCase()).get()
        .then(function (querySnapshot)
        {
            if (querySnapshot.size >0)
            {
                querySnapshot.forEach(function (doc)
                {
                    console.log(doc.id, " => ", doc.data());
                    // Build doc ref from doc.id
                    db.collection("Patient").doc(doc.id).update({["procedures."+procedureName.toLowerCase()] : data.toLowerCase()});
                });
            }
            proceduresForm.reset();
        })
});

allergiesForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const username = profileForm['profile-username'].value;

    const allergiesName = allergiesForm['profile-allergiesName'].value;
    const allergiesDesc = allergiesForm['profile-allergiesDesc'].value;

    db.collection("Patient").where("name","==",username.toLowerCase()).get()
        .then(function (querySnapshot)
        {
            if (querySnapshot.size >0)
            {
                querySnapshot.forEach(function (doc)
                {
                    console.log(doc.id, " => ", doc.data());
                    // Build doc ref from doc.id
                    db.collection("Patient").doc(doc.id).update({["allergies."+allergiesName.toLowerCase()] : allergiesDesc.toLowerCase()});
                });
            }
            allergiesForm.reset();
        })
});

/////////////////////////
testsForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const username = profileForm['profile-username'].value;

    const testsName = testsForm['profile-tesName'].value;

    const testsDesc = testsForm['profile-tesDesc'].value;

    db.collection("Patient").where("name","==",username.toLowerCase()).get()
        .then(function (querySnapshot)
        {
            if (querySnapshot.size >0)
            {
                querySnapshot.forEach(function (doc)
                {
                    console.log(doc.id, " => ", doc.data());
                    // Build doc ref from doc.id
                    db.collection("Patient").doc(doc.id).update({["tests."+testsName.toLowerCase()] : testsDesc.toLowerCase()});
                });
            }
            testsForm.reset();
        })
});


function setDetails (data)
{
    if (data != null)
    {
        document.getElementById('profile-name').value = (data.name).toLowerCase();
        document.getElementById('profile-gender').value = (data.gender);
        document.getElementById('profile-weight').value = (data.weight);
        document.getElementById('profile-height').value = (data.height);
        document.getElementById('profile-blood').value = (data.bloodtype);
        document.getElementById('profile-smoker').value = (data.smoker);
        document.getElementById('profile-pregnant').value = (data.pregnant);

        console.log(data.dob);
        var temp = (data.dob).split('/');
        dob = new Date(Number(temp[2]), Number(temp[1]), Number(temp[0]));
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        document.getElementById('profile-age').value = Math.abs(age_dt.getUTCFullYear() - 1970);
    
        var arrMedcs = data.medication;
        var conc="";
        for (var key in arrMedcs)
        {
            conc+= "NAME: "+key+"\n";

            var temp = arrMedcs[key].split("=");
            conc+= "DAYS: "+temp[0]+"\n";
            conc+= "TIMES: "+temp[1]+"\n";
            conc+= "TIME: "+temp[2]+"\n";
            conc+= "DOSE: "+temp[3]+"\n";
            conc+= "DESC: "+temp[4]+"\n";
            conc+= "\n";
        }
        document.getElementById("medcs").value = conc.toLowerCase();

        var arrPro = data.procedures;
        var conc1="";
        for (var key in arrPro)
        {
            conc1+= "NAME: "+key+"\n";

            var temp = arrPro[key].split("=");
            conc1+= "DATE: "+temp[0]+"\n";
            conc1+= "DESC: "+temp[1]+"\n";
            conc1+= "\n";
        }
        document.getElementById("procedures").value = conc1.toLowerCase();

        var arrAlerg = data.allergies;
        var conc2="";
        for (var key in arrAlerg)
        {
            conc2+= "NAME: "+key+"\n";
            conc2+= "DESC: "+arrAlerg[key]+"\n";
            conc2+= "\n";
        }
        document.getElementById("allergies").value = conc2.toLowerCase();

        var arrtes = data.tests;
        var conc3 = "";
        for(var key in arrtes)
        {
            conc3+= "name: "+key+"\n";

            var temp = arrtes[key].split("=");
            conc3+= "desc: "+temp[0]+"\n";
        }
        document.getElementById("tests").value = conc3.toLowerCase();
////////////////////////////////////////////////////////////////////

        var arrHr = data.hr;
        var hr_readings =[['Date','Reading']] ;
        // hr_readings.push(["-",0]);

        for (var key in arrHr)
        {
            var valueString = arrHr[key];
            var value = Number(valueString);
            hr_readings.push([key,value]);
        }


        var arrSteps = data.steps;
        var steps_readings =[['Date','Reading']] ;
        // steps_readings.push(["-",0]);

        for (var key in arrSteps)
        {
            var valueString = arrSteps[key];
            var value = Number(valueString);
            steps_readings.push([key,value]);
        }

        var arrSleep = data.sleep;
        var sleep_readings =[['Date','Reading']] ;
        // sleep_readings.push(["-",0]);
        for (var key in arrSleep)
        {
            var value = arrSleep[key];
            sleep_readings.push([key,value]);
        }

        google.charts.load('current', {'packages':['corechart']});
        if (arrHr != null)
        {
            google.charts.setOnLoadCallback(hr);
        }
        if (arrSteps != null)
        {
            google.charts.setOnLoadCallback(steps);
        }
        if (arrSleep != null)
        {
            google.charts.setOnLoadCallback(sleep);
        }

        function hr()
        {
            var data = google.visualization.arrayToDataTable(hr_readings);
    
            var options = {
                title: 'Heart Rate',
                curveType: 'function',
                legend: {position: 'bottom'}
            };

            var chart = new google.visualization.LineChart(document.getElementById('hr_chart'));

            chart.draw(data, options);
        }
    
        function steps()
        {
            var data = google.visualization.arrayToDataTable(steps_readings);
            var options = {
                title: 'Steps',
                curveType: 'function',
                legend: {position: 'bottom'}
            };
            var chart = new google.visualization.LineChart(document.getElementById('steps_chart'));
            chart.draw(data, options);
        }

        function sleep()
        {
            var data = google.visualization.arrayToDataTable(sleep_readings);
            var options = {
                title: 'Sleep',
                curveType: 'function',
                legend: {position: 'bottom'}
            };
            var chart = new google.visualization.LineChart(document.getElementById('sleep_chart'));
            chart.draw(data, options);
        }
    }
    else
    {
        readForm.reset();
        medcForm.reset();
        
    }
}
