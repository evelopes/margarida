const url = "https://api.telegram.org/bot5694149422:AAFAdlAKzYQ5vJISwZtHz-XF1W-TQDNV1wI/getUpdates";

passaURL(url)
function passaURL(url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        consoleD(this.responseText)
    }
    xhttp.open("GET", url);
    xhttp.send();
}

let data;
function consoleD(dados) {
    console.log(dados)
}