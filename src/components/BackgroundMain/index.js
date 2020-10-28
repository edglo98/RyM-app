import React from 'react'
import images from "../../assets/images"
import "./styles.css"

export default function BackgroundMain() {
    return (
        <span
            className="main-background"
            style={{
                backgroundImage: `url(${ images.mainBackground })`
            }}
        />
    )
}
