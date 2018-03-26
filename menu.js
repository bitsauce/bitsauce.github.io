var contentContainer = document.getElementById("content-container");
var transitioning = false;

//---------------------------------------------------
// TAB PAGE SETUP FUNCTIONS
//---------------------------------------------------

function appendProject(tabKey, projectKey, addSeparator) {
    var project = projectTabs[tabKey][projectKey];
    contentContainer.style.opacity = 0;

    var anchor = document.createElement("a");
    anchor.name = projectKey;
    contentContainer.appendChild(anchor);
    
    // Add carousel
    contentContainer.appendChild(createCarousel(project.images, projectKey));

    // Add project title and description
    var projectContainer = document.createElement("div");
    projectContainer.className = "project-container";

    var projectTitle = document.createElement("div");
    projectTitle.className = "project-title";
    projectTitle.innerHTML = project.title;
    projectContainer.appendChild(projectTitle);

    var projectDescription = document.createElement("div");
    projectDescription.className = "project-description";
    projectDescription.innerHTML = project.description;
    projectContainer.appendChild(projectDescription);
    
    if(project.url !== "") {
        var viewProjectButton = document.createElement("a");
        viewProjectButton.className = "view-project-btn btn btn-default";
        viewProjectButton.href = project.url;
        viewProjectButton.innerHTML = "View Project Page"
        projectContainer.appendChild(viewProjectButton);
    }

    contentContainer.appendChild(projectContainer);
    if(addSeparator) contentContainer.appendChild(document.createElement("hr"));

    // Animate between tab pages
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

function createCarousel(images, key) {
    var carousel = document.createElement("div");
    carousel.className = "carousel slide";
    carousel.style.display = "flex";
    carousel.id = key + "-carousel"
    carousel.setAttribute("data-ride", "carousel");

    var indicators = document.createElement("ol");
    indicators.className = "carousel-indicators";
    carousel.appendChild(indicators);

    var inner = document.createElement("div");
    inner.className = "carousel-inner";
    carousel.appendChild(inner);

    for(var i = 0; i < images.length; i++) {
        var indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#" + carousel.id);
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

    var leftControl = document.createElement("a");
    leftControl.href = "#" + carousel.id;
    leftControl.className = "left carousel-control";
    leftControl.setAttribute("data-slide", "prev");
    carousel.appendChild(leftControl);
                   
    var leftIcon = document.createElement("span");
    leftIcon.className = "glyphicon glyphicon-chevron-left";
    leftControl.appendChild(leftIcon);
    
    var rightControl = document.createElement("a");
    rightControl.href = "#" + carousel.id;
    rightControl.className = "right carousel-control";
    rightControl.setAttribute("data-slide", "next");
    carousel.appendChild(rightControl);
                   
    var rightIcon = document.createElement("span");
    rightIcon.className = "glyphicon glyphicon-chevron-right";
    rightControl.appendChild(rightIcon);

    return carousel;
}

//---------------------------------------------------
// TAB MENU
//---------------------------------------------------

var activeTab = null;
function setActiveTabPage() {
    if(activeTab) activeTab.id = "";
    this.id = "tab-active";
    activeTab = this;

    var contentCont = document.getElementById("content-container");
    while(contentCont.children.length > 0) contentCont.removeChild(contentCont.children[0]);

    var projectList = projectTabs[activeTab.key];
    var i = Object.keys(projectList).length - 1;
    for(var projectKey in projectList) {
        appendProject(activeTab.key, projectKey, i > 0);
        i--;
    }
}

// Show project direcly if key provided
// E.g. https://bitsauce.github.io/#overworld
var initialKey = location.hash.substr(1);

// Setup tab menu
var tabMenu = document.getElementById("tab-menu");
for(var tabKey in projectTabs) {
    if (projectTabs.hasOwnProperty(tabKey)) {
        var tabBtn = document.createElement("button");
        tabBtn.onclick = setActiveTabPage;
        tabBtn.key = tabKey;
        tabBtn.innerHTML = tabKey;
        tabMenu.appendChild(tabBtn);
        
        // Check if any of the projects on this page
        // should be shown initially
        var keyFound = false;
        for(var projectKey in projectTabs[tabKey]) {
            if(projectKey === initialKey) {
                keyFound = true;
                break;
            }
        }

        if(keyFound || !activeTab) {
            setActiveTabPage.call(tabBtn);
        }
    }
}

location.hash = "#" + initialKey;
