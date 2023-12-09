//TEXTBOX
const textbox = document.getElementById("void");
//RADIO BTNS
const educ = document.getElementById("option1");
const skill = document.getElementById("option2");
const achieve = document.getElementById("option3"); 
//NAVIGATIONS
const home = document.getElementById("home"); 
const about = document.getElementById("aboutme"); 
const contact = document.getElementById("contacts"); 
const project = document.getElementById("projects"); 
const updated = document.getElementById("updates"); 

const text1 = "Educational Background: In my secondary education, I graduated from San Francisco High School, located in Bago Bantay, Quezon City." + 
              " During my senior year of high school, I stayed at my secondary school as an ICT programming student. "+
              " Currently, in my tertiary education, I studied at a local university here in Quezon City named 'Quezon City University' "+
              "and am taking a Bachelor of Science in Information Technology (1st year)."; 
const text2 = "Skills: These are my list of skills that I developed: Coding skill (I developed it during pandemic), Leadership, " + 
              "Computer Literate, Task Oriented, editing skill (I also developed during the year 2020),"+
              "and Teaching basic programming. "+
              "I also have working experience. In the year 2022, in the month of August, I was an encoder working at SpeedTyping jobs. I'm working at home "+
              "since our local city was under community quarantine";
const text3 = "Achievements: I gained some achievement during my secondary education, starting in grade 10 (2021), when I was an honor student. Even in "+
              "my senior high school year, I'm running for honors, plus I received an award for one of the outstanding students in "+
              "Media Information Literacy. Another award is from Research colloquium where my group received certification and medal"; 


textbox.value = text1; 

educ.addEventListener('click',function(){
   textbox.value = text1; 
}); 

skill.addEventListener('click',function(){
   textbox.value = text2; 
}); 

achieve.addEventListener('click', function(){
   textbox.value = text3; 
});


const navItems = [home, about, contact, project, updated];

function handleNavClick(clickedIndex) {
    for (let i = 0; i < navItems.length; i++) {
        if (i === clickedIndex) {
            navItems[i].classList.add("underline");
        } else {
            navItems[i].classList.remove("underline");
        }
    }
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function () {
        handleNavClick(i);
    });
}

function rel(){
    window.location.href = "#homeDiv"; 
}

