import React from 'react';
import Project from "../Project"
import proj1 from "../../images/Proj1.jpg"
import proj2 from "../../images/Proj2.jpg"

export default function Portfolio() {
  const project = [
    {
      image: proj1, 
      liveLink: "https://mapono.github.io/Project_1/",
      text: "Find Pixels & Pints here:",
      gitHubLink: "https://github.com/Mapono/Project_1",
      deployLink: "https://mapono.github.io/Project_1/",
    },
    {
      image: proj2, 
      liveLink: "https://powerful-dawn-85424.herokuapp.com/",
      text: "Find HomeInventory_DB here:",
      gitHubLink: "https://github.com/ljbrewer/HomeInventory",
      deployLink: "https://powerful-dawn-85424.herokuapp.com/",
    }
  ]
  return (
    <div class="card mb-3">
    <div class="row no-gutters">
  <div class="col-md-2">
    <h2>My Work:</h2>
  </div>
  <div class="col-md-10">
    <div class="card-body">
      {project.map(project => (
        <Project project = {project} />
      ))}
      
    </div>
  </div>
</div>
</div>
  );
}
