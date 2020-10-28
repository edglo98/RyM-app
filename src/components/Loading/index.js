
import React from 'react'
import images from "../../assets/images"
import "./styles.css"

export default function Loading() {
    return (
        <span
            className="loading-main"
            style={{
                backgroundImage: `url(${ images.pickleRick })`
            }}
        />
    )
}