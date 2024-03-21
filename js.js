let difficolta = prompt("Seleziona la difficoltà tra facile,medio,difficile")
let numero = undefined
let numeroVincente = undefined
let tentativi = undefined
let haVinto = false
const easy = "facile"
const medium = "medio"
const hard = "difficile"
let messaggio = "inserisci un numero"

switch (difficolta){
    case easy :  
     tentativi = 8
     numeroVincente = Math.floor(Math.random()*10)
    break;

    case medium :
     tentativi = 8
     numeroVincente = Math.floor(Math.random()*40)
     break;

     case hard:
     tentativi = 5
     numeroVincente = Math.floor(Math.random()*60)
     break;
     default: alert("Non hai inserito un valore corretto")

   }
 
while (tentativi > 0 && !haVinto){
    tentativi --
    numero = prompt(messaggio)
    if(numero > numeroVincente){
      messaggio = "Inserisci un numero più basso"
    }else if(numero < numeroVincente){
      messaggio = "Inserisci un numero più alto"
    }
      else{
        haVinto = true
      }
      }

  if(haVinto){
    alert("Hai vinto!")
  }
  else{
    alert("Hai perso il numero vincente era " + numeroVincente)
  }
  




