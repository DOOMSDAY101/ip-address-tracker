let searchBtn = document.querySelector(".submit-button");
let loadingAnimation = document.querySelector('.loader');
let descBox = document.querySelector('.details');
let boxContent = document.querySelector('.inner-content');



function showLoader() {
  loadingAnimation.classList.add('show'); 
  boxContent.style.display = "none"; 
}
function hideLoader() {
  loadingAnimation.classList.remove('show');
  boxContent.style.display = "flex";
}

// map datas
const map = L.map('map').setView([0, 0], 1);
var tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
var attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);
//making a marker
var marker = L.marker([0, 0]).addTo(map);
marker.setLatLng([0, 0]);





function getLocation() {
    //ipify map variables
    ipContent = document.getElementById("ip-address-no").value;
    let text1 = document.querySelector('.input-session p');
    text1.innerHTML = "";
    
    var regEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let result = regEx.test(ipContent);
    if (ipContent == "") {
        text1.innerHTML = "Please type in an ip address"
        return;
    } else {
        text1.innerHTML = "";
    }
    if (result) {
        text1.innerHTML = "";
    } else {
        text1.innerHTML = "invalid Ip address";
        $('.details').fadeOut(900);
        return;
    }
    $('.details').fadeIn(900);

    let ipAddressValue = document.querySelector('.ip-address-value');
    let locationValue = document.querySelector('.location-value');
    let timeZone = document.querySelector('.timezone-value');
    let ispValue = document.querySelector('.isp-value');

    let apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipContent}`


    showLoader()
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        hideLoader();
        console.log(data);
        ipAddressValue.innerText = data.ip;

        locationValue.innerHTML= data.location.country + ", " + data.location.region + " " + data.location.postalCode;

        timeZone.innerHTML = "UTC" + data.location.timezone;
        ispValue.innerText = data.isp;
        
        let lat = data.location.lat;
        let long = data.location.lng;

        map.setView([lat, long], 8);
        marker.setLatLng([lat, long]);
        marker.bindTooltip(data.location.country + ", " + data.location.region).openTooltip();

    });
}
map.setView([0, 0], 1);
marker.setLatLng([0, 0]);
//automatically pin the location of the user
let pinLocationDiv = document.querySelector('.pin-location');
pinLocationDiv.addEventListener("click", pinLocation);

function pinLocation() {
    $('.details').fadeOut(900);
    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}
function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude;

    
    console.log(position);
    map.setView([latitude,longitude], 8);
    marker.setLatLng([latitude, longitude]);
    marker.bindTooltip("Your current Location").openTooltip();

    navigator.geolocation.clearWatch
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied request for geolocation");
        break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable");
        break;
        case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
      break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occured");
        break;
    }
}