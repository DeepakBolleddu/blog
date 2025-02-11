document.addEventListener("DOMContentLoaded", () => {
  const tabContents = document.querySelectorAll(".tabs__tab");
  const navLinks = document.querySelectorAll("nav ul li a");
  const projectContent = document.getElementById("project-content");
  const publicationContent = document.getElementById("publication-content");
  const courseworkContent = document.getElementById("coursework-content");

  // Function to remove active class and set the active tab
  function setActiveTab(tabId) {
    tabContents.forEach(tab => tab.classList.remove("active"));
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
      targetTab.classList.add("active");
    }
    // Update active class on navigation links (only for main tabs)
    navLinks.forEach(link => {
      const dataTab = link.getAttribute("data-tab");
      if (dataTab === tabId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Function to load project details
  function loadProject(projectId) {
    const projectData = {
      "project1": `<h2><b>New Project Name 1</b></h2><p>No content available.</p>`,
      "project2": `<h2><b>New Project Name 2</b></h2><p>No content available.</p>`,
      "project3": `<h2><b>New Project Name 3</b></h2><p>No content available.</p>`,
      "project4": `<h2><b>New Project Name 4</b></h2><p>No content available.</p>`
    };
    projectContent.innerHTML = projectData[projectId] || "<p>No project found.</p>";
    setActiveTab("tab_project");
  }

  // Function to load publication details
  function loadPublication(publicationId) {
    const publicationData = {
      "pub1": `<h2><b>New Publication Name 1</b></h2><p>No content available.</p>`,
      "pub2": `<h2><b>New Publication Name 2</b></h2><p>No content available.</p>`,
      "pub3": `<h2><b>New Publication Name 3</b></h2><p>No content available.</p>`,
      "pub4": `<h2><b>New Publication Name 4</b></h2><p>No content available.</p>`
    };
    publicationContent.innerHTML = publicationData[publicationId] || "<p>Publication not found.</p>";
    setActiveTab("tab_publication");
  }

  // Function to load coursework details
  function loadCoursework(courseworkId) {
    const courseworkData = {
      "course1": `<h2><b>Coursework Title 1</b></h2><p>Description of coursework goes here.</p>`,
      "course2": `<h2><b>Coursework Title 2</b></h2><p>Description of coursework goes here.</p>`
    };
    courseworkContent.innerHTML = courseworkData[courseworkId] || "<p>No coursework found.</p>";
    setActiveTab("tab_coursework");
  }

  // Function to handle hash-based routing
  function handleRouting() {
    const hash = window.location.hash || "#/";
    if (hash === "#/" || hash === "#") {
      setActiveTab("tab_1");
      return;
    }
    if (hash.startsWith("#/projects")) {
      if (hash.includes("project1")) {
        loadProject("project1");
      } else if (hash.includes("project2")) {
        loadProject("project2");
      } else if (hash.includes("project3")) {
        loadProject("project3");
      } else if (hash.includes("project4")) {
        loadProject("project4");
      } else {
        setActiveTab("tab_2");
      }
    } else if (hash.startsWith("#/publications")) {
      if (hash.includes("pub1")) {
        loadPublication("pub1");
      } else if (hash.includes("pub2")) {
        loadPublication("pub2");
      } else if (hash.includes("pub3")) {
        loadPublication("pub3");
      } else if (hash.includes("pub4")) {
        loadPublication("pub4");
      } else {
        setActiveTab("tab_3");
      }
    } else if (hash.startsWith("#/coursework")) {
      if (hash.includes("course1")) {
        loadCoursework("course1");
      } else if (hash.includes("course2")) {
        loadCoursework("course2");
      } else {
        setActiveTab("tab_4");
      }
    } else {
      setActiveTab("tab_1");
    }
  }

  window.addEventListener("hashchange", handleRouting);
  handleRouting();
});
