document.addEventListener("DOMContentLoaded", () => {
  const tabContents = document.querySelectorAll(".tabs__tab");
  const navLinks = document.querySelectorAll("nav ul li a");
  const projectContent = document.getElementById("project-content");
  const publicationContent = document.getElementById("publication-content");
  const storyContent = document.getElementById("story-content");

  // Function to remove active class and set the active tab
  function setActiveTab(tabId) {
    tabContents.forEach(tab => tab.classList.remove("active"));
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
      targetTab.classList.add("active");
    }
    // Update active class on nav links (only for main tabs)
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
      "project1": `<h2><b>Project One Details</b></h2><p>Details for project one.</p>`,
      "project2": `<h2><b>Project Two Details</b></h2><p>Details for project two.</p>`,
      "project3": `<h2><b>Project Three Details</b></h2><p>Details for project three.</p>`,
      "project4": `<h2><b>Project Four Details</b></h2><p>Details for project four.</p>`
    };
    projectContent.innerHTML = projectData[projectId] || "<p>No project found.</p>";
    setActiveTab("tab_project");
  }

  // Function to load publication details
  function loadPublication(publicationId) {
    const publicationData = {
      "pub1": `<h2><b>Publication One Details</b></h2><p>Details for publication one.</p>`,
      "pub2": `<h2><b>Publication Two Details</b></h2><p>Details for publication two.</p>`,
      "pub3": `<h2><b>Publication Three Details</b></h2><p>Details for publication three.</p>`,
      "pub4": `<h2><b>Publication Four Details</b></h2><p>Details for publication four.</p>`
    };
    publicationContent.innerHTML = publicationData[publicationId] || "<p>No publication found.</p>";
    setActiveTab("tab_publication");
  }

  // Function to load story details
  function loadStory(storyId) {
    const storyData = {
      "story1": `<h2><b>Story One</b></h2><p>Details about the secret data behind Apple’s innovation.</p>`,
      "story2": `<h2><b>Story Two</b></h2><p>Details about the hidden world of AI at Google.</p>`,
      "story3": `<h2><b>Story Three</b></h2><p>Details about how OpenAI is paving the way for new intelligence.</p>`
    };
    storyContent.innerHTML = storyData[storyId] || "<p>No story found.</p>";
    setActiveTab("tab_story");
  }

  // Function to handle hash‐based routing
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
    } else if (hash.startsWith("#/stories")) {
      if (hash.includes("story1")) {
        loadStory("story1");
      } else if (hash.includes("story2")) {
        loadStory("story2");
      } else if (hash.includes("story3")) {
        loadStory("story3");
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
