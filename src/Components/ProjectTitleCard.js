import React from 'react';

const ProjectTitleCard = ({titleImg, description}) => {
    return (
        <article className='main__works__card'>
            <img src={titleImg} className='main__works__card__img'/>
            <p className='main__works__card__description'>{description}</p>
        </article>
    )
}

export default ProjectTitleCard