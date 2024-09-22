document.addEventListener('DOMContentLoaded', function(){
    const btnSacar = document.getElementById('btnSacar')

    if(btnSacar){
        btnSacar.addEventListener('click', function(){
            window.location.href = 'sacar.html'
        })
    }
})

document.addEventListener('DOMContentLoaded', function(){
    const btnDeposito = document.getElementById('btnDeposito')

    if(btnDeposito){
        btnDeposito.addEventListener('click', function(){
            window.location.href = 'depositar.html'
        })
    }
})

document.addEventListener('DOMContentLoaded', function(){
    const btnLogar = document.getElementById('logar')

    if(btnLogar){
        btnLogar.addEventListener('click', function(){
            const nameUser = document.getElementById('nameUser').value
            localStorage.setItem('name', nameUser)
            localStorage.setItem('money', 0)
            window.location.href = 'index.html'
        })
    }
})

function atualizarInfoUser(){
    var elementName = document.getElementById('nomeUser')
    var elementMoney = document.getElementById('moneyUser')
    var money = localStorage.getItem('money')
    var name = localStorage.getItem('name')
    
    elementName.innerHTML = `${name}`
    elementMoney.innerHTML = `R$ ${parseFloat(money).toFixed(2)}` 
}

function addMoneyUser(valorAdd){
    localStorage.setItem('money', valorAdd)
}

function removeMoneyuser(valorRemove){
    var money = localStorage.getItem('money')
    var valorAposSacar = money - valorRemove
    localStorage.setItem('money', valorAposSacar)
}


document.addEventListener('DOMContentLoaded', function() {
    const pagSacar = document.getElementById('pagSacar');
    
    if (pagSacar) {
      pagSacar.addEventListener('click', function() {
        var moneyUser = localStorage.getItem('money')
        var inputMoney = document.getElementById('inputSacar').value
        var elementError = document.getElementById('error')
    
        var valorFinal = moneyUser - inputMoney
    
        if (valorFinal > 0){ //fds kkkkkkkk se tu tiver 12 conto e quiser retirar 12 conto nao vai retirar pq é normas do banco
            removeMoneyuser(inputMoney)
            console.log(localStorage.getItem('money'))
            elementError.innerHTML = `Retirado com sucesso!`
            atualizarInfoUser();
        }
        else{
            console.log(valorFinal)
            elementError.innerHTML = `Saldo insuficiente`
    
        }
      });
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    const pagDepositar = document.getElementById('pagDepositar');
    
    if (pagDepositar) {
      pagDepositar.addEventListener('click', function() {
        var moneyUser = localStorage.getItem('money')
        var inputMoney = document.getElementById('inputDepositar').value
        var elementError = document.getElementById('error')
    
        if(inputMoney > 0){
            var moneyAdd = (parseFloat(moneyUser) + parseFloat(inputMoney))
            addMoneyUser(moneyAdd)
            elementError.innerHTML = `Valor adicionado com sucesso!`
            atualizarInfoUser()
        }
        else{
            elementError.innerHTML = `Voce não pode adicionar um valor negativo!`
        }      
    });
    }
  });







//localStorage.setItem('name', 'vapo')
//localStorage.setItem('money', 232.65)
window.onload = atualizarInfoUser;
