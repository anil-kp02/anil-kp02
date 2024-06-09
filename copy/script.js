// Sample projects data
const projectsData = [
    {
        title: "Project 1",
        description: "This is the first project.",
        link: "#"
    },
    {
        title: "Project 2",
        description: "This is the second project.",
        link: "#"
    },
    {
        title: "Project 3",
        description: "This is the third project.",
        link: "#"
    }
];

// Function to create project cards
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    
    const title = document.createElement("h3");
    title.textContent = project.title;
    
    const description = document.createElement("p");
    description.textContent = project.description;
    
    const link = document.createElement("a");
    link.textContent = "View Project";
    link.href = project.link;
    link.target = "_blank";
    
    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(link);
    
    return projectCard;
}

// Function to render projects
function renderProjects() {
    const projectContainer = document.getElementById("project-container");
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Call renderProjects when the page loads
window.addEventListener("load", renderProjects);
