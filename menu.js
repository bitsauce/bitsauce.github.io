var arrowToProjects = true;//document.getElementById("arrow-to-projects");
var viewProjectBtn = document.getElementById("view-project-btn");
var contentContainer = document.getElementById("content-container");
var transitioning = false;

function transitionFromProject(key) {
    if(transitioning) return;
    transitioning = true;
    if(arrowToProjects !== undefined) {
        //arrowToProjects.style.display = "none";
        arrowToProjects = undefined;
        showProject(key);
    }
    else {
        var animationTime = 350;
        var timer = 0;
        var id = setInterval(frame, 5);
        function frame() {
            timer += 5;
            contentContainer.style.opacity = (1.0 - timer / animationTime).toString();
            if(timer >= animationTime) {
                clearInterval(id);
                showProject(key);
            }
        }
    }
}

function showProject(key) {
    var project = projects[key];
    contentContainer.style.opacity = 0;
    document.getElementById("description-title").innerHTML = project.title;
    document.getElementById("description-text").innerHTML = project.description;
    if(project.url === "") {
        viewProjectBtn.style.display = "none";
    }
    else {
        viewProjectBtn.style.display = "inline";
        document.getElementById("view-project-btn").href = project.url;
    }

    setupCarousel(project.images);

    var animationTime = 350;
    var timer = 0;
    var id = setInterval(frame, 5);
    function frame() {
        timer += 5;
        contentContainer.style.opacity = (timer / animationTime).toString();
        if(timer >= animationTime) {
            clearInterval(id);
            transitioning = false;
        }
    }
}

function setupCarousel(images) {
    document.getElementById("my-carousel").style.display = "flex";

    var indicators = document.getElementById("my-carousel-indicators");
    while(indicators.children.length > 0) indicators.removeChild(indicators.children[0]);
    var inner = document.getElementById("my-carousel-inner");
    while(inner.children.length > 0) inner.removeChild(inner.children[0]);

    for(var i = 0; i < images.length; i++) {
        var indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#my-carousel");
        indicators.appendChild(indicator);
    
        var imageDiv = document.createElement("div");
        imageDiv.className = "item";
        
        if(i == 0) {
            indicator.className = "active";
            imageDiv.className += " active";
        }
    
        var imageObject = document.createElement("img");
        imageObject.src = images[i];
        imageDiv.appendChild(imageObject);
        inner.appendChild(imageDiv);
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var menu = document.getElementById("menu");
var categories = null;
for(var key in projects) {
    if (projects.hasOwnProperty(key)) {
        var category = projects[key].category;

        if(!categories || !categories.hasOwnProperty(category)) {
            var li = document.createElement("li");
            if(!categories) {
                categories = {};
            }
            else {
                li.style.marginTop = "20px";
            }
            var i = document.createElement("i");
            i.className = "fa fa-2x";
            var span = document.createElement("span");
            span.className = "nav-text";
            span.style.fontWeight = "bold";
            span.innerHTML = projects[key].category;
            li.appendChild(i);
            li.appendChild(span);
            menu.appendChild(li);
            categories[category] = li;
        }

        var a = document.createElement("a");
        var li = document.createElement("li");
        var i = document.createElement("i");
        i.className = "fa fa-2x " + projects[key].icon;
        var span = document.createElement("span");
        span.className = "nav-text";
        span.innerHTML = projects[key].title;
        a.appendChild(i);
        a.appendChild(span);
        li.appendChild(a);
        insertAfter(li, categories[category]);
        categories[category] = li;
        a.addEventListener("click", transitionFromProject.bind(null, key));
    }
}
window.onload = function() { document.body.style.display = "inline"; }