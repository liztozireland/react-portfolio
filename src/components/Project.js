import React from 'react';

export default function Project ({project}) {
    return (
    <div>
         <a href={project.liveLink} target="_blank" rel="noreferrer"><img src={project.image}/></a>
         <p>{project.text}</p>
         <a href={project.gitHubLink} target="_blank" rel="noreferrer"><p>GitHub Link</p></a>
         <a href={project.deployLink} target="_blank" rel="noreferrer"><p>App Link</p></a>
    </div>
    )
}