import React from 'react'
import Image from "next/image"
import profileImg from '@/public/images/profile-clear-bg-webp.webp'

interface Props {
    className?: string;
    alt?: string;
    width?: number;
    height?: number;
}

const ProfilePicture = ({ className = "", alt = "Jerome Orio Profile Picture", width = 200, height = 200 }: Props) => {
    return (
        <div><Image width={width} height={height} alt={alt} src={profileImg} className={`rounded-full ${className}`} /></div>
    )
}

export default ProfilePicture