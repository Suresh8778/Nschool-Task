import React, { useRef, useEffect } from 'react';
import { CardImg } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import slide3 from './img/slide3.png';
import slide4 from './img/slide4.png';


export default function Slider() {
    const products = [
        { id: 1, image: slide3 },
        { id: 2, image: slide4 },
        { id: 3, image: slide3 },
        { id: 4, image: slide3 },
        { id: 5, image: slide4 }
    ];
    const scrollRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const autoScroll = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1;
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        }, 30);

        return () => clearInterval(autoScroll);
    }, []);

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
    };

    return (
        <div className="container text-center mt-3 col-12">
            <h4 className="display-6">Nschool Academy's <span style={{color:"#f17424"}}>Placement Partners</span></h4>
            <p className="px-5 py-2">
                We feel honored to train Top Notch Technologies to our students and thereby
                providing proven placement training strategies to our students at NSCHOOL Academy.
                Here you go with our student reviews about our top IT training center.
            </p>
            <div
                className="scroll-container"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            >
                {products.concat(products).map((product, index) => (
                    <div key={index} className="moving-card px-5">
                        <div className="hover-container">
                            <CardImg src={product.image} alt={`Slide ${index + 1}`} className="product-image p-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
