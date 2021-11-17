import React from 'react';

export default function Project ({project}) {
    return (
    <div>
         <a href={project.liveLink} target="_blank"><img src={project.image}/></a>
    </div>
    )
}