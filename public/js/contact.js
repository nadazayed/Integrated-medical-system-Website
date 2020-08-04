const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const username = contactForm['contact-name'].value;
    const email = contactForm['contact-email'].value;
    const msg  = contactForm['contact-msg'].value;

        Email.send({
        Host: "smtp.gmail.com",
        Username : "spprtwecare@gmail.com",
        Password : "00000wecare",
        To : 'spprtwecare@gmail.com',
        From : email,
        Subject : "Medical Provider Problem",
        Body : "Hello My Name is "+username+" \n"+msg,
        }).then(
            message => alert("mail sent successfully")
        );
        contactForm.reset();
});

