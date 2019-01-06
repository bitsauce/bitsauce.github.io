var contentContainer = document.getElementById("content-container");

//---------------------------------------------------
// TAB PAGE SETUP FUNCTIONS
//---------------------------------------------------

function createProjectEntry(projectKey, project) {
    // Create project div
    var projectDiv = document.createElement("div");
    projectDiv.id = projectKey + "-div";
    
    // Add carousel
    var landscape = true;
    if(project.hasOwnProperty("orientation") && project.orientation === "portrait") landscape = false;
    projectDiv.appendChild(createCarousel(project.images, projectKey, landscape));

    // Create project details div
    var projectDetails = document.createElement("div");
    projectDetails.className = "project-container";

    // Add project title
    var projectTitle = document.createElement("div");
    projectTitle.className = "project-title";
    projectTitle.innerHTML = project.title;
    projectDetails.appendChild(projectTitle);

    // Add project description
    var projectDescription = document.createElement("div");
    projectDescription.className = "project-description";
    projectDescription.innerHTML = project.description;
    projectDetails.appendChild(projectDescription);
    
    // Add project button if url provided
    if(project.url !== "") {
        var viewProjectButton = document.createElement("a");
        viewProjectButton.className = "view-project-btn btn btn-default";
        viewProjectButton.href = project.url;
        viewProjectButton.innerHTML = "View Project Page"
        projectDetails.appendChild(viewProjectButton);
    }

    projectDiv.appendChild(projectDetails);
    return projectDiv;
}

function createTabPageButton(tabName, tabPageDiv) {
    // Add tab button
    var tabButton = document.createElement("button");
    tabButton.onclick = changeActiveTab;
    tabButton.innerHTML = tabName;
    tabButton.pageDiv = tabPageDiv;
    tabs[tabName] = tabButton;
    return tabButton;
}

function createProjectPageTab(tabName, projects) {
    var projectPageDiv = document.createElement("div");
    projectPageDiv.className = "tab-page";
    var i = 0;
    for(var projectKey in projects) {
        projectPageDiv.appendChild(createProjectEntry(projectKey, projects[projectKey]));
        if(i++ < Object.keys(projects).length - 1) {
            projectPageDiv.appendChild(document.createElement("hr"));
        }
    }
    tabMenu.appendChild(createTabPageButton(tabName, projectPageDiv));
    return projectPageDiv;
}

function createCarousel(images, key, landscape) {
    if(images.length === 1) {
        var imageObject = document.createElement("img");
        imageObject.className = landscape ? "image-landscape" : "image-portrait";
        imageObject.src = images[0];
        return imageObject;
    }

    var carousel = document.createElement("div");
    carousel.className = "carousel slide " + (landscape ? "image-landscape" : "image-portrait");
    carousel.style.display = "flex";
    carousel.id = key + "-carousel"
    carousel.setAttribute("data-interval", "false");

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
        imageObject.className = landscape ? "image-landscape" : "image-portrait";
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
function changeActiveTab() {
    if(activeTab) {
        activeTab.id = "";
        activeTab.pageDiv.classList.remove("fade-in");
    }
    this.id = "tab-active";
    this.pageDiv.classList.add("fade-in");
    activeTab = this;
}

// Show project directly if key provided
// E.g. https://bitsauce.github.io/#overworld
var initialProjectKey = location.hash.substr(1);
if(initialProjectKey === "") {
    var url = new URL(window.location.href);
    initialProjectKey = url.searchParams.get("project");
}

// Setup tab menu
var tabMenu = document.getElementById("tab-menu");
var tabs = {};
var initalTabName = undefined;
for(var tabName in projectTabs) {
    contentContainer.appendChild(createProjectPageTab(tabName, projectTabs[tabName]));

    // Check if any of the projects on this page should be displayed after load
    for(var projectKey in projectTabs[tabName]) {
        if(projectKey === initialProjectKey) {
            initalTabName = tabName;
        }
    }
}

$(document).ready(function() {
    if(initalTabName) {
        changeActiveTab.call(tabs[initalTabName]);

        // Schedule smooth scroll
        function smoothScroll() {
            $("#" + initialProjectKey + "-div")[0].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            activeTab.pageDiv.removeEventListener("transitionend", smoothScroll);
        }
        activeTab.pageDiv.addEventListener("transitionend", smoothScroll);
    }
    else {
        changeActiveTab.call(tabs[Object.keys(tabs)[0]]);
    }
});

function nextCarouselImage() {
    $(".carousel", activeTab.pageDiv).each(function() {
        $(this).carousel("next");
    });
}

/*var carouselFrequency = 10000;
var carouselInterval = setInterval(nextCarouselImage, carouselFrequency);
$('.carousel').on('slide.bs.carousel', function () {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextCarouselImage, carouselFrequency);
});*/
