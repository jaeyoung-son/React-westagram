import React from 'react';
import StoryImg from './StoryImg'
import StoryTop from './StoryTop'

function Story() {
    return(
        <div className="story">
          <StoryTop
            left="스토리"
            right="모두보기"/>
          <StoryImg 
            src="https://scontent-icn1-1.cdninstagram.com/vp/b53b10a8028d28cfdef1bfed70b18ae0/5DFBB2D3/t51.2885-19/s150x150/49724010_236895490557524_3249308360478031872_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
            name="wework"
            time="25분전"/>
          <StoryImg 
            src="https://scontent-gmp1-1.cdninstagram.com/vp/00a5a7a558c031da28f63d062e90cfef/5E6E584A/t51.2885-19/s150x150/47581322_331313240788424_7580673034705436672_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
            name="han_ye_seul"
            time="19분전" />        
        </div>
    )
}

export default Story