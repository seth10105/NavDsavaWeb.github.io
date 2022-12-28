



document.getElementById("btn").onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var country = document.getElementById('country').value;

    if(country == 'Usa'  && username == 'Seth' && password == '1234'){
        alert('Password, Username and Country correct.');
        window.open("nav.html");
    } else {
      alert("Password, Username or Country incorrect.");
    }
    
    
}
document.getElementById("b").onclick = function() {
    window.open('forgot.html');
}
