import React from 'react';

function StoryImg(props) {
    return(
        <div className="story_img">
            <img src={props.src} alt="."/>
            <div className="story_text">
            <p>{props.name}</p><p className="gray">{props.time}</p>
            </div>
        </div>
    )
}

export default StoryImg