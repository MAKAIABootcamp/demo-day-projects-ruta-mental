

 export const ubi =()=>{

 
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
  }
function success(geolocationPsition) {
  console.log(geolocationPsition)
let coords = geolocationPsition.coords;

}
}
