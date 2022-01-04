
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', startWorker);
stopBtn.addEventListener('click', stopWorker);

var w;


function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result6").innerHTML = event.data;
    };
  } else {
    document.getElementById("result6").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}

