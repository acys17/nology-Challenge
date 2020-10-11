function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


/* /Get the button */
  var mybutton = document.getElementById("myBtn");
  
  /* When the user scrolls down 20px from the top of the document, show the button */
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // open side navigation
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  // close side navigation
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

// open and close about me paragraphs
  var zoology = document.getElementById("zoology-text");
  var publishing = document.getElementById("publishing-text");
  var police = document.getElementById("police-text");

  function showZoology() {
  if (zoology.style.display == "none") {
    zoology.style.display = "block";
    publishing.style.display = "none";
    police.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    zoology.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

function showPublishing() {
  if (publishing.style.display == "none") {
    publishing.style.display = "block";
    zoology.style.display = "none";
    police.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    publishing.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

function showPolice() {
  if (police.style.display == "none") {
    police.style.display = "block";
    zoology.style.display = "none";
    publishing.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    police.style.display = "none";
      document.getElementsByClassName("about-me")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

// future paragraphs
var lightbulb = document.getElementById("lightbulb");
var chart = document.getElementById("chart");
var smiley = document.getElementById("smiley");

function showLightbulb() {
  if (lightbulb.style.display == "none") {
    lightbulb.style.display = "block";
    chart.style.display = "none";
    smiley.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    lightbulb.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}
function showChart() {
  if (chart.style.display == "none") {
    chart.style.display = "block";
    lightbulb.style.display = "none";
    smiley.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    chart.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}function showSmiley() {
  if (smiley.style.display == "none") {
    smiley.style.display = "block";
    chart.style.display = "none";
    lightbulb.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(4, 1fr)";
  } else {
    smiley.style.display = "none";
      document.getElementsByClassName("future-goals")[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

function messageAlert() {
  alert('Thanks for the message, I will reply as soon as I can. Thank you for your patience.');
}