import React from 'react';
import Project from "../Project"
import Pints from "../../images/Pints.png"
import HomeDB from "../../images/HomeDB.png"
import JSQuiz from "../../images/JSQuiz.png"
import WeatherDB from "../../images/WeatherDB.png"
import DayPlan from "../../images/DayPlan.png"
import RoadTrip from "../../images/RoadTrip.png"

export default function Portfolio() {
  const project = [
    {
      image: Pints, 
      liveLink: "https://mapono.github.io/Project_1/",
      text: "Find Pixels & Pints here:",
      gitHubLink: "https://github.com/Mapono/Project_1",
      deployLink: "https://mapono.github.io/Project_1/",
    },
    {
      image: HomeDB, 
      liveLink: "https://powerful-dawn-85424.herokuapp.com/",
      text: "Find HomeInventory_DB here:",
      gitHubLink: "https://github.com/ljbrewer/HomeInventory",
      deployLink: "https://powerful-dawn-85424.herokuapp.com/",
    },
    {
      image: JSQuiz, 
      liveLink: "https://liztozireland.github.io/Javascript-Quiz/",
      text: "Find Super Rad Javascript Quiz here:",
      gitHubLink: "https://github.com/liztozireland/Javascript-Quiz",
      deployLink: "https://liztozireland.github.io/Javascript-Quiz/",
    },
    {
      image: WeatherDB, 
      liveLink: "https://liztozireland.github.io/WeatherDashboard/",
      text: "Find New Wave Weather Dashboard here:",
      gitHubLink: "https://github.com/liztozireland/WeatherDashboard",
      deployLink: "https://liztozireland.github.io/WeatherDashboard/",
    },
    {
      image: DayPlan, 
      liveLink: "https://liztozireland.github.io/WorkPlanner/",
      text: "Find a Helpful Day Planner here:",
      gitHubLink: "https://github.com/liztozireland/WorkPlanner",
      deployLink: "https://liztozireland.github.io/WorkPlanner/",
    },
    {
      image: RoadTrip, 
      liveLink: "https://github.com/ljbrewer/AWheelGoodTime",
      text: "Coming Soon: Wheel Good Time: a Road Trip Planner",
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
