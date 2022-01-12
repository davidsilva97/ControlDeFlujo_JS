/*
Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

function businessHours(dayNumber, hourNumber)

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).
*/
// (() =>{
//     let dia = prompt("Ingresa el dia en formato numero (0-6)");
//     let hora = prompt("Ingresa la hora en formato (0-24)")
    
//     if(dia<0 || dia >6){
//         alert("El dia no es correcto, ingresa en formato (0-6)");
//     } else{
//         businessHours(dia,hora);
//     }
// })()

function businessHours(dayNumber,hourNumber){
    if((dayNumber >= 1 && dayNumber <=5) && (hourNumber>= 9 && hourNumber<=18) ){
        return console.log(true);
    } else{
        return console.log(false);
    }
}

/*Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7. */

function calcularDia(yearDayNumber){
    let diaSemana = yearDayNumber % 7;
    let semana = Math.floor(yearDayNumber/7);
    console.log(diaSemana);
    console.log(semana);
    Number(diaSemana)
    switch(diaSemana) {
        case 1:
            alert(`El dia es Lunes de la semana ${semana}`);
            break;
        case 2:
            alert(`El dia es Martes de la semana ${semana}`);
            break;
        case 3:
            alert(`El dia es Miercoles de la semana ${semana}`);
            break;
        case 4:
            alert(`El dia es Jueves de la semana ${semana}`);
            break;
        case 5:
            alert(`El dia es Viernes de la semana ${semana}`);
            break;
        case 6:
            alert(`El dia es Sabado de la semana ${semana}`);
            break;
        case 7:
            alert(`El dia es Domingo de la semana ${semana}`);
            break;
        default:
          // code block
            console.log("Numero invalido, debe ser entre 0-6");
        }
}

// (() => {
//     let numero = prompt("Ingresa el dia del año");
//     calcularDia(numero);
// })();

/*
Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

*/
function calcularDiaLaboral(yearDayNumber,hourNumber){
    let diaSemana = yearDayNumber % 7;
    if((diaSemana >=1 && diaSemana<=5) && (hourNumber>=9 && hourNumber<=18)){
        return alert(`true es dia y horario laboral`);
    }else{
        return alert(`false no es dia u hora laboral`)
    }
}

(()=>{
    let dia = prompt("Ingresa el dia del año: ");
    let hora = prompt("Ingresa la hora en formato (0-24)");
    if(!(dia <=0 || dia > 365) || (hora <0 || hora>24)){
        calcularDiaLaboral(dia,hora);
    } else{
        alert("datos incorrectos")
    }
})();