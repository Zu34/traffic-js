
const traffic_Light_Container = document.getElementById("traffic-light-container");
const change_Button = document.getElementById("change-light");

// Render lights
traffic_Light_Container.innerHTML = `
  <div id="red" class="light"></div>
  <div id="yellow" class="light"></div>
  <div id="green" class="light"></div>
`;

//light sequence 
const light_Orders = ["red", "yellow", "green"];
let start_Index = 0;

// clear all lights
function clearallLights() {
  light_Orders.forEach(lightId => {
    document.getElementById(lightId).style.backgroundColor = "black";
  });
}
// change the light
function changeLight() {
  clearallLights(); // Turn off all lights

  const currentLight = light_Orders[start_Index];
  document.getElementById(currentLight).style.backgroundColor = currentLight;

  // Move to the next light
  start_Index = (start_Index + 1) % light_Orders.length;
}

change_Button.addEventListener("click", changeLight);

// start first light
changeLight();




