import React from "react"


function Video(props) {
    let video = props.video
    if(video !== undefined) {
        return(
            <div className="preview-item__video-container">
                <video
                    id={"ref" + props.ref}
                    className="preview-item__video"
                    src={require("../videos/" + video + ".mp4").default}
                    controls="true"
                    ></video>
            </div>
        )
    }
    else {
        return (null)
    }
}

export default Video