// START INTRO //
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");
var ppButton = document.querySelector("#polina .bt2");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Log In";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
ppButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    ppButton.innerHTML = "Sign Up";
  } else {
    vid.pause();
    ppButton.innerHTML = "Paused";
  }
})
// END INTRO //

// START GOOGLE MAP //
function init_map() {
    var var_location = new google.maps.LatLng(25.0198096, 121.531437);

    var var_mapoptions = {
        center: var_location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        panControl:false,
        rotateControl:false,
        scrollwheel: false,
        streetViewControl: false,
    	};
    var var_pin = 'images/pin.png';
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        icon: var_pin,
        title: "t,mot"
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map);


}

google.maps.event.addDomListener(window, 'load', init_map);

// END GOOGLE MAP //