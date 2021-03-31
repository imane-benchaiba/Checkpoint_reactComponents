import React from 'react'


const ProfilePhoto = (props) => {
    return (
        <div>
            <img src={props.data} style={{width:"100px"}}></img>
        </div>
    )
}

export default ProfilePhoto
