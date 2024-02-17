'use strict';

let output = document.querySelector(".output-data");
const def_text = document.querySelector(".in").innerHTML;
let input_cmd = document.querySelector('.type_pannu');
let help_helper = document.querySelector('.help-helper');
printHelpCmd();
function init(){
    document.querySelector('body').addEventListener('keydown', function(e){
        var val = input_cmd.value;
        if (e.key === 'Enter' && val != ""){
            main(val.trim());
        }
    });
}

function main(val){
    clearInputBox();
    modhalVelai(val);
    switch(val){
        case 'help':
            printHelpCmd();
            break;
        case 'resume':
            printResumeCmd();
            break;
        case 'whoami':
            printAboutCmd();
            break;
        case 'projects':
            printProjectsCmd();
            break;
        case 'achievements':
            printAchievementsCmd();
            break;
        case 'techstack':
            printTechStackCmd();
            break;
        /*
        case 'certifications':
            printCertificationsCmd();
            break;
        case 'socials':
            printAllSocialsCmd();
            break;
        */
        case 'linkedin':
            openLinkedin();
            break;
        case 'github':
            openGit();
            break;
        case 'leetcode':
            openLeetcode();
            break;
        case 'skillrack':
            openSkillrack();
            break;
        case 'clear':
            clearOutput();
            break;
        default:
            illaSaab();
            break;
    }
    input_cmd.focus();
    input_cmd.scrollIntoView({behavior: 'smooth'});
}

function clearInputBox(){
    input_cmd.value = "";
}

function clearOutput(){
    output.innerHTML = "";
}

function modhalVelai(cmd){
    const html = `<p class="us-clr">${def_text}</p><p class = "text" style = "display:inline-block">${cmd}</p><br />`;
    output.insertAdjacentHTML('beforeend',html);
}

function illaSaab(){
    const html = `<br /><p class = "text">Command does not exist! ${help_helper.innerHTML}</p> <br />`;
    output.insertAdjacentHTML('beforeend',html);
}

function printHelpCmd(){
    let data = "";
    data += '<br />';
    data += "<p class = 'text' style='font-size: 20px;'><span class = 'highlight-cmd'>whoami</span> - A quick introduction about me.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>resume</span> - To take a look at my resume.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>projects</span> - To know & view my recent projects.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>achievements</span> - To know my accomplishments till now.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>techstack</span> - To take a look at my skillset.<br /></p>";
    /*data += "<span class = 'highlight-cmd'>certifications</span> - To view my certifications.<br />";
    data += "<span class = 'highlight-cmd'>socials</span> - To take a look at all my socials.<br />";*/
    data += "<p class = 'text'><span class = 'highlight-cmd'>linkedin</span> - To view my linkedin profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>github</span> - To view my Github profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>leetcode</span> - To check out my leetcode profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>skillrack</span> - To check out my skillrack profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>help</span> - To view all the available commands.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>clear</span> - To clear the terminal window.<br /></p>";
    data += `<br />`;

    output.insertAdjacentHTML('beforeend',data);
}

function openLinkedin(){
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening LinkedIn...</p><br />`);
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/balaji-t-0b1506221/','_blank');
    }, 3000);
}

function openGit(){
    output.insertAdjacentHTML('beforeend' ,`<br /><p class = "text" >Opening GitHub...</p><br />`);
    setTimeout(() => {
        window.open('https://github.com/Balaji-04','_blank');
    }, 3000);
}

function openLeetcode(){
    output.insertAdjacentHTML('beforeend',`<br /><p class = "text">Opening Leetcode...</p><br />`);
    setTimeout(() => {
        window.open('https://leetcode.com/BalajiT2004/','_blank');
    }, 3000);
}

function openSkillrack(){
    output.insertAdjacentHTML('beforeend',`<br /><p class = "text">Opening Skillrack...</p><br />`);
    setTimeout(() => {
        window.open('https://www.skillrack.com/faces/resume.xhtml?id=350111&key=54c10cc6d07977b759e5b1c0c7e62275e3410d77','_blank');
    }, 3000);
}

function printAboutCmd(){
    const html = `<br /><div class = "container">
    <div class = "container-right">
      <img class = "my-pic" src="balaji.jpeg" alt="my-image" />
    </div>
    <div class = "container-left">
      <p class = "text"> Hello people! I am Balaji from tirunelveli. I completed my schooling at Sri Jayendra Swamigal Silver Jubilee School, Tirunelveli with 88 percentage.I am a dedicated Computer Science and Engineering student currently in my third year of Bachelor's degree. With a passion for technology and a strong academic foundation (CGPA of 8.24 up to the 4th Semester).
        In addition to my academic pursuits, I actively contribute to the student community. I am honored to serve as the Secretary of the IEEE Computer Society Student's Chapter for the year 2023-24, where I am involved in organizing and leading various technical events and initiatives. Additionally, I hold the role of Student Program Sub-Coordinator at the Computer Society of India Student's Chapter for the same year, further showcasing my leadership skills and ability to manage multiple responsibilities.</p>
    </div>
  </div><br />`;
    output.insertAdjacentHTML('beforeend',html);
}

//update your resume
function printResumeCmd(){
    const html = `<br /><a href = "resume.pdf" download = "balaji-cv" target = "_blank">balaji-cv.pdf</a><br /><br />`;
    output.insertAdjacentHTML('beforeend',html);
}
//update project details here.
function printProjectsCmd(){
    const html = `<p class = "text"><ul type = "square"><li><a href = "https://guess-the-number-game-three.vercel.app/" target="_blank">Retro Guess my number game</a></li> 
    <li><a href = "https://retro-pig-game.vercel.app/" target="_blank">Retro Pig game</a></li>
    <li><a href = "https://qr-code-component-using-html-css-lime.vercel.app/" target="_blank">QR Code Component - Frontend Mentor Challenge</a></li>
    <li><a href = "https://nft-preview-card-frontend-mentor-sage.vercel.app/" target="_blank">NFT Prview Card Component - Frontend Mentor Challenge</a></li>
    <li><a href = "https://newyearcountdown-rosy.vercel.app/" target="_blank">New Year Countdown Application</a></li>
    <li>Terminal based portfolio - The one you're currently on!😉 </li>
    </ul></p>`;
    output.insertAdjacentHTML('beforeend',html);
}

//update achievements heere
function printAchievementsCmd(){
    const html = `<ul> 
    <li>250+ programs solved on Leetcode.</li>
    <li>1400+ programs solved on Skillrack including mastery of 
    190+ daily challenges and completion of 40+ daily tests.</li>
    <li>Won second prize in an poster designing contest conducted by 
    IE(I) Students chapter.</li>
    <li>Won the second prize, including a cash prize of Rs. 1000, in a Technical Connexion contest conducted by Paavai Engineering College - Namakkal.</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend',html);
}

function printTechStackCmd(){
    const html = `<ul type = "square">
    <li>Java</li>
    <li>Javascript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>SQL</li>
    <li>C</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend',html);
}

//yet to implement certifications,all socials
// main code starts here
init();