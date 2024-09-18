


export default function projectDetails(id) {
    let storedProject = JSON.parse(localStorage.getItem("Projects")).filter((project)=> project.id === id);

    document.getElementById("content-header").textContent = storedProject[0].name;

}