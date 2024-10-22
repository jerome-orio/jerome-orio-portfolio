import React from 'react'
import Image from "next/image"
import profileImg from '@/images/profile-clear-bg-webp.webp'

interface Props {
    className: string;
    alt: string;
    width: number;
    height: number;
}

const ProfilePicture = ({ className, alt, width, height }: Props) => {
    return (
        <div><Image width={width || 200} height={height || 200} alt={alt || "Jerome Orio Profile Picture"} src={profileImg} className={className} /></div>
    )
}

export default ProfilePicture