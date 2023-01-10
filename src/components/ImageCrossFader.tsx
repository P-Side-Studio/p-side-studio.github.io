import React from "react";
import { useEffect } from "react";
import CrossfadeImage from "react-crossfade-image"

interface ImageCrossFaderProps {
    urls: string[]
    intervalTime?: number
    fadeTime?: number
    pause?: boolean
    style?: React.CSSProperties | undefined
}

export function ImageCrossFader({ urls, intervalTime = 4000, fadeTime = 500, pause = false, style}: ImageCrossFaderProps) {

    const [currentURL, setCurrentURL] = React.useState<string>(urls[0]);
    var urlIndex = 0
    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                urlIndex++
                urlIndex %= urls.length
                setCurrentURL(urls[urlIndex])
            }
        }, intervalTime);
        return () => clearInterval(interval);
    }, [pause])

    return (
            <CrossfadeImage src={currentURL} duration={fadeTime} style={style}/>
    )
}