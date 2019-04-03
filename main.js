// xhr XmlHttpREQUEST
let rides = [];

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
}

function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  rides = data.rides;
  domStringBuilder(data.rides);

}

function executeThisCodeIfXHRFails() {
    console.error('oh shit');
}

const getRidesData = () => {
    // constructor XMLHttpRequest();
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  // My request is a copy of XMLHttpRequest();
  myRequest.addEventListener('error', executeThisCodeIfXHRFails);
  myRequest.open('GET', './db/rides.json');
  myRequest.send();
    console.log(myRequest);

}

// constructor - predetermined object that you can modify later


const init = () => {
    getRidesData();
}

init();