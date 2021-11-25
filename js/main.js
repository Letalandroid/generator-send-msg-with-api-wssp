document.getElementById("send").addEventListener("click", () => {

    let num = document.getElementById("num").value;
    let msj = document.getElementById("mssg").value;
    let apiWssp = 'https://api.whatsapp.com/send/?phone=';
    let link = document.getElementById("link");

    let result = apiWssp + num + "&text=" + msj;

    link.innerHTML = result;
    link.href = result;

});