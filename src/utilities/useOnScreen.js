import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function useOnScreen(ref) {
    const {width} = useWindowDimensions();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const checkOffScreen = () => {
        ref.current.getBoundingClientRect().right < width?
        setIsIntersecting(false):
        setIsIntersecting(true);
    }
 
    useEffect(() => { 
        checkOffScreen();
    }, [ref, width]);

    return isIntersecting;
} 