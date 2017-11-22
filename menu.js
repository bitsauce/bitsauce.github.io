/*               
<div class="side-category">-- Personal --</div>
<button id="overworld-btn"   class="btn side-btn">Overworld</button>
<button id="engine-btn"      class="btn side-btn">SuperSauce Engine</button>
<button id="hoverlookup-btn" class="btn side-btn">HoverLookup Extension</button>
<button id="tankai-btn"      class="btn side-btn">TankAI (framework)</button>
<button id="aside-btn"           class="btn side-btn">ASIDE</button>

<div class="side-category">-- Collaborative --</div>
<button id="holmgang-btn" class="btn side-btn">Holmgang</button>
<button id="grabster-btn" class="btn side-btn">Grabster</button>

<div class="side-category">-- School --</div>
<button id="computer-vision-btn"       class="btn side-btn">Autonomous Vehicle Perception</button>
<button id="visual-computing-btn"      class="btn side-btn">Visual Computing Fundamentals</button>
<button id="compiler-construction-btn" class="btn side-btn">Compiler Construction</button>*/

var arrowToProjects = document.getElementById("arrow-to-projects");
var viewProjectBtn = document.getElementById("view-project-btn");
viewProjectBtn.style.display = "none";

function showProject(key) {
    if(arrowToProjects !== undefined) {
        arrowToProjects.style.display = "none";
        viewProjectBtn.style.display = "inline";
        arrowToProjects = undefined;
    }
    var project = projects[key];
    document.getElementById("description-title").innerHTML = project.title;
    document.getElementById("description-text").innerHTML = project.description;
    document.getElementById("view-project-btn").href = project.url;
    document.getElementById("slideshow-img").src = project.image;
}


document.getElementById("overworld-btn").addEventListener("click", function() { showProject("overworld"); });
document.getElementById("engine-btn").addEventListener("click", function() { showProject("supersauce-engine"); });
document.getElementById("hoverlookup-btn").addEventListener("click", function() { showProject("hoverlookup"); });
document.getElementById("tankai-btn").addEventListener("click", function() { showProject("tank-ai"); });
document.getElementById("aside-btn").addEventListener("click", function() { showProject("aside"); });