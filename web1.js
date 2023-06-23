
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
const x = document.getElementById("demo");
function getPosition(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(current)}
        else{
            X.innerHTML=  "Gelolocation is not supported";
        }
    }
    function current(position){
      x.innerHTML= "longitude:" + this.coords.longitude + "lattitude :" + this.coords.longitude
    }
