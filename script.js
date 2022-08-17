function login(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user == ""){
        alert('Insira um usuário para entrar');
    }

    if(password == ""){
        alert('Insira uma senha para entrar');
    }
}