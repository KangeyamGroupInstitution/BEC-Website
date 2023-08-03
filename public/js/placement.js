const centerText = document.getElementById('center-text');

const statistics = document.getElementById('Statistics');
const testimonials = document.getElementById('testimonials');
const Recruters=document.getElementById('Recruters');
const Process=document.getElementById('Process');
const Training = document.getElementById('Training');
const Opportunities=document.getElementById('Opportunities');
const Alumni = document.getElementById('Alumni');
const Contact=document.getElementById('Contact');

const pIcons=document.getElementById('p-icons');
const pIcons1=document.getElementById('p-icons1');
const pIcons2=document.getElementById('p-icons2');
const pIcons3=document.getElementById('p-icons3');
const pIcons4=document.getElementById('p-icons4');
const pIcons5=document.getElementById('p-icons5');
const pIcons6=document.getElementById('p-icons6');
const pIcons7=document.getElementById('p-icons7');

const iconInfos=document.getElementById('icon-infos');
const iconInfos1=document.getElementById('icon-infos1');
const iconInfos2=document.getElementById('icon-infos2');
const iconInfos3=document.getElementById('icon-infos3');
const iconInfos4=document.getElementById('icon-infos4');
const iconInfos5=document.getElementById('icon-infos5');
const iconInfos6=document.getElementById('icon-infos6');
const iconInfos7=document.getElementById('icon-infos7');

var statisticsText="Placement Statistics: Discover our impressive success rates and attractive salary averages while getting access to a diverse list of recruiting companies.";
var testimonialsText=" Testimonials and Success Stories: Be inspired by our students' praises and learn from their career achievements as they share their uplifting narratives.";
var RecrutersText=" Recruiting Companies: Explore opportunities from prominent employers across various sectors, and find contact details for potential connections.";
var ProcessText="Placement Process: Navigate through our straightforward registration steps, ace the interview rounds, and secure your dream position.";
var TrainingText="Preparation and Training: Gain a competitive edge with our comprehensive workshops, expert resume building, and personalized soft skills development.";
var OpportunitiesText="Internship Opportunities: Acquire valuable industry experiences through our student internships and excel in your chosen field.";
var AlumniText="Alumni Placements: Witness the remarkable success of our alumni, discovering their extraordinary career paths and notable achievements.";
var ContactText="Placement cell contacts, inquiries.";

const iconList = [pIcons, pIcons1,pIcons2,pIcons3,pIcons4,pIcons5,pIcons6,pIcons7];
const iconInfo=[iconInfos,iconInfos1,iconInfos2,iconInfos3,iconInfos4,iconInfos5,iconInfos6,iconInfos7];
const iconCon=[statistics,testimonials,Recruters,Process,Training,Opportunities,Alumni,Contact]


function changeText() {
   function handleClick1(){
    iconList.forEach((element) => {
      
      if (element === pIcons) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1');
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }

    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == statistics){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    centerText.innerText =statisticsText;
  }

  function handleClick2(){
    iconList.forEach((element) => {
      
      if (element === pIcons1) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos1){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == testimonials){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =testimonialsText;
   
  }
  function handleClick3(){
    iconList.forEach((element) => {
      
      if (element === pIcons2) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos2){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Recruters){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =RecrutersText;
   
  }
  function handleClick4(){
    iconList.forEach((element) => {
      
      if (element === pIcons3) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos3){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Process){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =ProcessText;
   
  }
  function handleClick5(){
    iconList.forEach((element) => {
      
      if (element === pIcons4) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos4){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Training){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =TrainingText;
   
  }
  function handleClick6(){
    iconList.forEach((element) => {
      
      if (element === pIcons5) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos5){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Opportunities){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =OpportunitiesText;
   
  }
  function handleClick7(){
    iconList.forEach((element) => {
      
      if (element === pIcons6) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos6){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Alumni){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =AlumniText;
   
  }
  function handleClick8(){
    iconList.forEach((element) => {
      
      if (element === pIcons7) {
        element.classList.toggle('p-icon1');
      }
      else{
        element.classList.remove('p-icon1')
      }
    });

    iconInfo.forEach((iconInfoClass)=>{
      if(iconInfoClass == iconInfos7){
        iconInfoClass.classList.toggle('icon-info1');
      }
      else{
        iconInfoClass.classList.remove('icon-info1');
      }
    });

    iconCon.forEach((iconConClass)=>{
      if(iconConClass == Contact){
        iconConClass.classList.toggle('s-round1');
      }
      else{
        iconConClass.classList.remove('s-round1');
      }
    });
    
    centerText.innerText =ContactText;
   
  }

    statistics.addEventListener('click', handleClick1);
    testimonials.addEventListener('click', handleClick2);
    Recruters.addEventListener('click', handleClick3);
    Process.addEventListener('click', handleClick4);
    Training.addEventListener('click', handleClick5);
    Opportunities.addEventListener('click', handleClick6);
    Alumni.addEventListener('click', handleClick7);
    Contact.addEventListener('click', handleClick8);

    
}
document.addEventListener('DOMContentLoaded', function() {
  changeText();
});


//change aos
document.addEventListener('DOMContentLoaded', function () {
  const pgText= document.querySelectorAll('.s-round');
  const ScreenSmall = window.matchMedia("(max-width: 1150px)").matches;
  pgText.forEach(element => {
    if (ScreenSmall) {
      element.setAttribute('data-aos', '');
    }
  });
});

//text animation
const animatedTextSpans = document.querySelectorAll(".animated-text");

animatedTextSpans.forEach((span, index) => {
  const animationDelay = (index + 1) * 0.010;
  span.style.animationDelay = `${animationDelay}s`;
  console.log(animationDelay);
});

// alumini gal
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false, 
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
