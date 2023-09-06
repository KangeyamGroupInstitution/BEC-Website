var i = 0;
var txt1 = "The anti ragging policies of BEC are based on the Honorable Supreme Court of India's ruling and UGC regulations on curbing the menace of ragging in higher education institutions, 2009. Our institute has been free from this menace because of the active cooperation of the faculty members, students, parents and staff.The anti ragging cell is being constituted and stringent measures are being taken to prevent ragging in the campus. The mobile numbers of anti ragging cell members are prominently displayed in the notice boards and banners. The anti ragging squad conducts regular and surprise visits to the hostels, library, food court, sport facilities and ensure freshers comfort.";
var speed1 = 10;
window.onload = function() {
  typeWriter();
};

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}