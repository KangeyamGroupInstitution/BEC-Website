let valueIdEl = document.getElementById("valueId");
let industryIdEl = document.getElementById("industryId");
let researchIdEl = document.getElementById("researchId");
let professionalIdEl = document.getElementById("professionalId");
let softwareIdEl = document.getElementById("softwareId");
let learnIdEl = document.getElementById("learnId");


let navCon1IdEl = document.getElementById("navCon1Id");
let navCon2IdEl = document.getElementById("navCon2Id");
let navCon3IdEl = document.getElementById("navCon3Id");
let navCon4IdEl = document.getElementById("navCon4Id");
let navCon5IdEl = document.getElementById("navCon5Id");
let navCon6IdEl = document.getElementById("navCon6Id");


valueIdEl.addEventListener("click" , function(){
   
    navCon1IdEl.style.display = "block";
    navCon2IdEl.style.display = "none";
    navCon3IdEl.style.display = "none";
    navCon4IdEl.style.display = "none";
    navCon5IdEl.style.display = "none";
    navCon6IdEl.style.display = "none";
    valueIdEl.classList.add("value");
    industryIdEl.classList.remove("value");
    researchIdEl.classList.remove("value");
    professionalIdEl.classList.remove("value");
    softwareIdEl.classList.remove("value");
    learnIdEl.classList.remove("value");
    
   
});
industryIdEl.addEventListener("click" , function(){
    navCon1IdEl.style.display = "none";
    navCon2IdEl.style.display = "block";
    navCon3IdEl.style.display = "none";
    navCon4IdEl.style.display = "none";
    navCon5IdEl.style.display = "none";
    navCon6IdEl.style.display = "none";
    industryIdEl.classList.add("value");
    valueIdEl.classList.remove("value");
    researchIdEl.classList.remove("value");
    professionalIdEl.classList.remove("value");
    softwareIdEl.classList.remove("value");
    learnIdEl.classList.remove("value");
    
});
researchIdEl.addEventListener("click" , function(){
    navCon1IdEl.style.display = "none";
    navCon2IdEl.style.display = "none";
    navCon3IdEl.style.display = "block";
    navCon4IdEl.style.display = "none";
    navCon5IdEl.style.display = "none";
    navCon6IdEl.style.display = "none";
    valueIdEl.classList.remove("value");
    industryIdEl.classList.remove("value");
    researchIdEl.classList.add("value");
    professionalIdEl.classList.remove("value");
    softwareIdEl.classList.remove("value");
    learnIdEl.classList.remove("value");
});
professionalIdEl.addEventListener("click" , function(){
    
    navCon1IdEl.style.display = "none";
    navCon2IdEl.style.display = "none";
    navCon3IdEl.style.display = "none";
    navCon4IdEl.style.display = "block";
    navCon5IdEl.style.display = "none";
    navCon6IdEl.style.display = "none";
    professionalIdEl.classList.add("value");
    valueIdEl.classList.remove("value");
    industryIdEl.classList.remove("value");
    researchIdEl.classList.remove("value");
    softwareIdEl.classList.remove("value");
    learnIdEl.classList.remove("value");
});
softwareIdEl.addEventListener("click" , function(){
    navCon1IdEl.style.display = "none";
    navCon2IdEl.style.display = "none";
    navCon3IdEl.style.display = "none";
    navCon4IdEl.style.display = "none";
    navCon5IdEl.style.display = "block";
    navCon6IdEl.style.display = "none";
    softwareIdEl.classList.add("value");
    valueIdEl.classList.remove("value");
    industryIdEl.classList.remove("value");
    researchIdEl.classList.remove("value");
    professionalIdEl.classList.remove("value");
    learnIdEl.classList.remove("value");
});
learnIdEl.addEventListener("click" , function(){
    navCon1IdEl.style.display = "none";
    navCon2IdEl.style.display = "none";
    navCon3IdEl.style.display = "none";
    navCon4IdEl.style.display = "none";
    navCon5IdEl.style.display = "none";
    navCon6IdEl.style.display = "block";
    learnIdEl.classList.add("value");
    valueIdEl.classList.remove("value");
    industryIdEl.classList.remove("value");
    researchIdEl.classList.remove("value");
    professionalIdEl.classList.remove("value");
    softwareIdEl.classList.remove("value");
   
});
