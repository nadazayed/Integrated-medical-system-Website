const sosList = document.querySelector('#sos-list');
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

function home()
{
    window.location.replace("profile.html");
}

function community()
{
    window.location.replace("community.html");
}

function renderSOS(doc)
{
    if (doc.data().medicalprovider == credentials)
    {
        let tr = document.createElement('tr');
        let name = document.createElement('th');
        let loc = document.createElement('th');
        let cross = document.createElement('th');

        tr.setAttribute('data-id', doc.id);
        cross.setAttribute('class', "cross");

        name.textContent = doc.data().name;
        loc.textContent = doc.data().loc;
        cross.textContent = 'Confirm';

        tr.appendChild(name);
        tr.appendChild(loc);
        tr.appendChild(cross);

        sosList.appendChild(tr);


        // deleting data
        cross.addEventListener('click', (e) =>
        {
            console.log("iii");
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute('data-id');
            console.log(id);
            db.collection('Emergency').doc(id).delete();

            document.getElementById("sos-list").contentWindow.location.reload(true);
        });

    }
}

// real-time listener
db.collection('Emergency').orderBy('medicalprovider').onSnapshot(snapshot =>
{
    let changes = snapshot.docChanges();
    changes.forEach(change =>
    {
        console.log(change.doc.data());
        if(change.type == 'added')
        {
            renderSOS(change.doc);
        }

        else if (change.type == 'removed')
        {
            let li = sosList.querySelector('[data-id=' + change.doc.id + ']');
            sosList.removeChild(li);
        }
    });
});