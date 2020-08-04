const communityList = document.querySelector('#community-list');
const credentials = sessionStorage.getItem('credentials');

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

function home()
{
    window.location.replace("profile.html");
}

function renderComunity(doc)
{
    
        let tr = document.createElement('tr');
        let qus = document.createElement('th');
        // let ans = document.createElement('input');
        let cross = document.createElement('th');

        // ans.setAttribute('type',"text");

        tr.setAttribute('data-id', doc.id);
        cross.setAttribute('class', "cross");

        qus.textContent = doc.data().question;
        cross.textContent = 'Answer';

        tr.appendChild(qus);
        // tr.appendChild(ans);
        tr.appendChild(cross);

        communityList.appendChild(tr);


        cross.addEventListener('click', (e) =>
        {
            console.log("iii");
            e.stopPropagation();
            
                var answer = prompt("Please enter your answer", "");
                if (answer != null) 
                {
                    console.log(answer);
                    console.log(doc.id);
                    var tmp = answer + "//";
                    db.collection("Community").doc(doc.id).update({["answer."+credentials] : tmp});
                }
        });
    
}

// real-time listener
db.collection('Community').orderBy('question').onSnapshot(snapshot =>
    {
        let changes = snapshot.docChanges();
        changes.forEach(change =>
        {
            console.log(change.doc.data());
            if(change.type == 'added')
            {
                renderComunity(change.doc);
            }
    
            else if (change.type == 'removed')
            {
                let li = communityList.querySelector('[data-id=' + change.doc.id + ']');
                communityList.removeChild(li);
            }
        });
    });