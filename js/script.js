let segundosCentesimas = document.getElementById("segundosCent");
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("horas");
let tiempo = document.getElementById("tiempo");
const boton = document.getElementById("boton");
const boton3 = document.getElementById("boton3");
let segundoSelec = document.getElementById("segundoSelec");
let minutoSelec = document.getElementById("minutoSelec");
let horaSelec = document.getElementById("horaSelec");
let inicialHora = 0;
let inicialMinuto = 0;
let inicialSegundo = 0;
let horasTemp = 0;
let minutosTemp = 0;
let segundosTemp = 0;
let segundosCentTemp = 0;
let stop = false;

function temporizador() {
    boton.setAttribute("disabled", true);
    boton3.setAttribute("disabled", true);
    let idTemp = setInterval(function () {
        compararTiempos();
        if (stop) {
            clearInterval(idTemp);
            boton3.removeAttribute("disabled");
            alert("Tiempo cumplido!!");
            return "";
        }
        if (segundosCentTemp < 10) {
            segundosCentesimas.innerHTML = `0${segundosCentTemp}`;
        } else if (segundosCentTemp >= 10 && segundosCentTemp < 100) {
            segundosCentesimas.innerHTML = segundosCentTemp;
        } else if (segundosCentTemp == 100) {
            temporizadorSegundos();
        }
        segundosCentTemp++;
    }, 10);
}

function temporizadorSegundos() {
    segundosTemp++;
    segundosCentTemp = 0;
    if (segundosCentTemp < 10) {
        segundosCentesimas.innerHTML = `0${segundosCentTemp}`;
    }
    if (segundosTemp < 10) {
        segundos.innerHTML = `0${segundosTemp}`;
    } else if (segundosTemp >= 10 && segundosTemp < 60) {
        segundos.innerHTML = segundosTemp;
    } else if (segundosTemp == 60) {
        temporizadorMinutos();
    }
}

function temporizadorMinutos() {
    minutosTemp++;
    segundosTemp = 0;
    if (segundosTemp < 10) {
        segundos.innerHTML = `0${segundosTemp}`;
    }
    if (minutosTemp < 10) {
        minutos.innerHTML = `0${minutosTemp}`;
    } else if (minutosTemp >= 10 && minutosTemp < 60) {
        minutos.innerHTML = minutosTemp;
    } else if(minutosTemp == 60){
        temporizadorHora();
    }
}

function temporizadorHora() {
    horasTemp++;
    minutosTemp = 0;
    if (minutosTemp < 10) {
        segundos.innerHTML = `0${segundosTemp}`;
    }
    if (horasTemp < 10) {
        horas.innerHTML = `0${horasTemp}`;
    } else if (horasTemp >= 10 && horasTemp < 24) {
        horas.innerHTML = horasTemp;
    }
}

const paro = function () {
    boton3.removeAttribute("disabled");
    stop = true;
};

const reset = function () {
    boton.removeAttribute("disabled");
    segundosCentesimas.innerHTML = "00";
    segundos.innerHTML = "00";
    minutos.innerHTML = "00";
    horas.innerHTML = "00";
    segundoSelec.innerHTML = "00";
    minutoSelec.innerHTML = "00";
    horaSelec.innerHTML = "00";
    stop = false;
    segundosCentTemp = 0;
    segundosTemp = 0;
    minutosTemp = 0;
    horasTemp = 0;
    inicialHora = 0;
    inicialMinuto = 0;
    inicialSegundo = 0;
};

const incrementarHora = () => {
    if (horaSelec.innerHTML < 24) {
        inicialHora++;
        if (inicialHora < 10) {
            horaSelec.innerHTML = `0${inicialHora}`;
        } else if (inicialHora >= 10) {
            horaSelec.innerHTML = inicialHora;
        }
    }
};

const decrementarHora = () => {
    if (horaSelec.innerHTML > 0) {
        inicialHora--;
        if (inicialHora < 10) {
            horaSelec.innerHTML = `0${inicialHora}`;
        } else if (inicialHora >= 10) {
            horaSelec.innerHTML = inicialHora;
        }
    }
};

const incrementarMinuto = () => {
    if (minutoSelec.innerHTML < 59) {
        inicialMinuto++;
        if (inicialMinuto < 10) {
            minutoSelec.innerHTML = `0${inicialMinuto}`;
        } else if (inicialMinuto >= 10) {
            minutoSelec.innerHTML = inicialMinuto;
        }
    }
};

const decrementarMinuto = () => {
    if (minutoSelec.innerHTML > 0) {
        inicialMinuto--;
        if (inicialMinuto < 10) {
            minutoSelec.innerHTML = `0${inicialMinuto}`;
        } else if (inicialMinuto >= 10) {
            minutoSelec.innerHTML = inicialMinuto;
        }
    }
};

const incrementarSegundo = () => {
    if (segundoSelec.innerHTML < 59) {
        inicialSegundo++;
        if (inicialSegundo < 10) {
            segundoSelec.innerHTML = `0${inicialSegundo}`;
        } else if (inicialSegundo >= 10) {
            segundoSelec.innerHTML = inicialSegundo;
        }
    }
};

const decrementarSegundo = () => {
    if (segundoSelec.innerHTML > 0) {
        inicialSegundo--;
        if (inicialSegundo < 10) {
            segundoSelec.innerHTML = `0${inicialSegundo}`;
        } else if (inicialSegundo >= 10) {
            segundoSelec.innerHTML = inicialSegundo;
        }
    }
};

const compararTiempos = () => {
    if (inicialHora > 0) {
        if (inicialHora == horasTemp && inicialMinuto == minutosTemp && inicialSegundo == segundosTemp) {
            stop = true;
        }
    } else if (inicialMinuto > 0) {
        if (inicialMinuto == minutosTemp && inicialSegundo == segundosTemp) {
            stop = true;
        }
    } else if (inicialSegundo > 0) {
        if (inicialSegundo == segundosTemp) {
            stop = true;
        }
    }
};

document.getElementById("boton").addEventListener("click", temporizador);
document.getElementById("boton2").addEventListener("click", paro);
document.getElementById("boton3").addEventListener("click", reset);
document.getElementById("horaInc").addEventListener("click", incrementarHora);
document.getElementById("horaDec").addEventListener("click", decrementarHora);
document.getElementById("minutoInc").addEventListener("click", incrementarMinuto);
document.getElementById("minutoDec").addEventListener("click", decrementarMinuto);
document.getElementById("segundoInc").addEventListener("click", incrementarSegundo);
document.getElementById("segundoDec").addEventListener("click", decrementarSegundo);
