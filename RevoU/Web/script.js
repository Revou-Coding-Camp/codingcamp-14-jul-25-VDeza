
showName()
function showName(){
    let username = prompt("Please Enter Your Name ...");
    if (username != ''){
        document.getElementById("welcome").innerHTML = "Hello " + username + ", welcome to Our Website!";
     }
    }   
function input(){
    const nama = document.getElementById("inputn"); 
    console.log(nama.value);

    const lahir = document.getElementById("inputtl"); 
    console.log(lahir.value);

    const jenisk = document.getElementById("inputjk"); 
    console.log(jenisk.value);

    const pesan = document.getElementById("inputp"); 
    console.log(pesan.value);

    if (nama !== '') {
        document.getElementById("output").innerHTML = nama.value + ", " + lahir.value  + ". Pesan : " + pesan.value;

    }

}