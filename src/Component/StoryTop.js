import React from 'react';

function StoryTop(props) {
    return (
        <div className="story_top">
            <span className="gray">{props.left}</span>
            <span className="right">{props.right}</span>
        </div>
    )
}

export default StoryTop;