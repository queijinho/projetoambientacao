function validar(){
    //declarar as variáveis
    //O tipo é implicito
    //o JS é fracamente tipada
    var login;
    var senha;
    
    //pega o elemento
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    if( login === ""){
        alert("login obrigatorio")
        return false;
    }else if(senha === ""){
        alert("senha obrigatorio")
        return false;
    }else{
        if(login === "senai" && senha === "123"){
            alert("sucesso")
            window.sessionStorage.setItem('login',login);
            return true;
        }else{
            return false;
        }
            
    }
                    
        
    }
