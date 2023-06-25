
// let w;
// function startWorker() {
//     if(typeof(Worker) == "undefined") {
//      w =  new Worker("demo_workers.js");
//     }
//     w.onmessage = function(event){
//         document.getElementById("result").innerHTML = event.data;
//     };
// }
// function stopWorker(){
//     w.terminate();
//     w = undefined;
// }
// let file = "fetch.txt";
// fetch (file)
// .then(x => x.text())
// .then(y =>
//     document.getElementById("demo").innerHTML = y)
// const x = document.getElementById("demo");
// function getPosition(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(current)}
//         else{
//             X.innerHTML=  "Gelolocation is not supported";
//         }
//     }
//     function current(position){
//       x.innerHTML= "longitude:" + this.coords.longitude + "lattitude :" + this.coords.longitude
//     }
function showCustomer(str){
    if( str.length == 0){
        document.getElementById("hint").innerHTML = "";
        return;
    }
    else{
        const xhttp =  new XMLHttpRequest()//creat xmlhttprequest object
        xhttp.onload = function(){         //ceate a callback function
            document.getElementById("hint").innerHTML = 
            this.responseText;
        }
    }
    xhttp.open("GET","gethint.php?q="+str);//send xmlhttp request
    xhttp.send();
    
}
