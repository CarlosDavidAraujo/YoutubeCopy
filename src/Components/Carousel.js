import styled from "styled-components";
import preview from "../video.jpg";
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./Button";


const StyledCarousel = styled(motion.div)`
    width: 100%;
    margin: 0 auto;
    cursor: grab;
    overflow: hidden;
    background-color: white;
`;

const CarouselInner = styled(motion.div)`
    display: flex;
    gap: 20px;
    ${Button} {
        padding: 8px 12px;
    }
`;


export default function Carousel({ tags }) {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth)
    }, []);

    return (
        <StyledCarousel ref={carouselRef}>
            <CarouselInner
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                {tags.map((tag) =>
                    <Button>{tag}</Button>
                )}
            </CarouselInner>
        </StyledCarousel>
    )
}