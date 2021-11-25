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
      altText:"Preview image of the app Pints & Pixels.", 
      liveLink: "https://mapono.github.io/Project_1/",
      text: "Find Pixels & Pints here:",
      gitHubLink: "https://github.com/Mapono/Project_1",
      deployLink: "https://mapono.github.io/Project_1/",
    },
    {
      image: HomeDB,
      altText:"Homepage for the HomeInventory_DB app.", 
      liveLink: "https://powerful-dawn-85424.herokuapp.com/",
      text: "Find HomeInventory_DB here:",
      gitHubLink: "https://github.com/ljbrewer/HomeInventory",
      deployLink: "https://powerful-dawn-85424.herokuapp.com/",
    },
    {
      image: JSQuiz,
      altText:"A rocket ship pointing you to a JavaScript quiz.", 
      liveLink: "https://liztozireland.github.io/Javascript-Quiz/",
      text: "Find Super Rad Javascript Quiz here:",
      gitHubLink: "https://github.com/liztozireland/Javascript-Quiz",
      deployLink: "https://liztozireland.github.io/Javascript-Quiz/",
    },
    {
      image: WeatherDB,
      altText:"Click the image to find a weather app.", 
      liveLink: "https://liztozireland.github.io/WeatherDashboard/",
      text: "Find New Wave Weather Dashboard here:",
      gitHubLink: "https://github.com/liztozireland/WeatherDashboard",
      deployLink: "https://liztozireland.github.io/WeatherDashboard/",
    },
    {
      image: DayPlan,
      altText:"Image of a day planner. Click the image to view.", 
      liveLink: "https://liztozireland.github.io/WorkPlanner/",
      text: "Find a Helpful Day Planner here:",
      gitHubLink: "https://github.com/liztozireland/WorkPlanner",
      deployLink: "https://liztozireland.github.io/WorkPlanner/",
    },
    {
      image: RoadTrip,
      altText:"Coming Soon: An app that helps you plan a road trip.", 
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
