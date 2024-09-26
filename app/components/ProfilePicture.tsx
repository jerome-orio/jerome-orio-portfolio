import React from 'react'
import Image from "next/image"
import profileImg from '../images/profile.jpg'

/* interface Props {
    className: string;
    alt: string;
} */

const ProfilePicture = (/* { className, alt }: Props */) => {
    return (
        <div><Image width={200} height={200} alt="Jerome Orio Profile Picture" src={profileImg} /* className={className} */ /></div>
    )
}

export default ProfilePicture