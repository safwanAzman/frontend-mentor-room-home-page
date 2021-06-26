import React, { useState } from 'react';
import Desktopimg1 from '../img/desktop-image-hero-1.jpg';
import Desktopimg2 from '../img/desktop-image-hero-2.jpg';
import Desktopimg3 from '../img/desktop-image-hero-3.jpg';
import GridManualflow from '../components/Grid/GridManualflow';
import GridManualitem from '../components/Grid/GridManualitem';
import Navbar from '../screens/Navbar'
import Fade from 'react-reveal/Fade';


export default function Section1() {

    const [slides] = useState([
        {               
            source1: <Fade left>
                        <div className="h-96 lg:h-full bg-no-repeat bg-cover bg-center relative " style={{ backgroundImage: `url(${Desktopimg1})` }}>
                        </div>
                    </Fade>,
            title1:<Fade big>
                        Discover innvovative ways to decorate
                    </Fade>,
            desc1: <Fade big>
                        We provide unmatched quality, comfort, and style for property owners across the country.
                        Our experts combine form and function in bringing your vision to life.
                        Create a room in your own style with our collection and make your property a reflection of you and what you love.
                    </Fade>
            
        },
        {
            source2:<Fade left>
                        <div className="h-96 lg:h-full bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${Desktopimg2})` }}>
                        </div>
                    </Fade>,
            title2: <Fade big>
                        We are available all across the globe
                    </Fade>,
            desc2: <Fade big>
                        With stores all over the world, it's easy for you to find furniture for your home or place of business.
                        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator.
                        Any questions? Don't hesitate to contact us today.
                    </Fade>
            
        },
        {
            source3:<Fade left>
                        <div className="h-96 lg:h-full bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${Desktopimg3})` }}>
                        </div>
                    </Fade>,
            title3: <Fade big>
                        Manufactured with the best materials
                    </Fade>,
            desc3:  <Fade big>
                        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                        to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry,
                        we understand what customers want for their home and office.
                    </Fade>
            
        }
    ]);


    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
    let currentSlide = slides[currentPosition]; // variable index value we can reference later

    const arrowRightClick = () => {
        
        currentPosition !== slides.length - 1 ? // Check index length
            setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
        currentSlide = slides[currentPosition];
    }

    const arrowLeftClick = () => {
        currentPosition !== 0 ? // Check index length
            setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
        currentSlide = slides[currentPosition];
    }
    return(
        <section className="bg-white">
            <GridManualflow anyclass="h-full" gap="0">
                <GridManualitem mobile="12" sm="12" md="12" lg="7" xl="7" anyclass="relative">

                    {currentSlide.source1}
                    {currentSlide.source2}
                    {currentSlide.source3}

                    <Navbar />
                    
                    <div className="absolute bottom-0 right-0 lg:-right-29 z-30 w-auto lg:w-29" >
                        <div className="flex  justify-center w-auto bg-black">
                            <button onClick={arrowLeftClick} className="flex items-center justify-center py-6 btnNextPrev  bg-black hover:bg-gray-700 w-full">
                                <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={arrowRightClick} className="flex items-center  justify-center py-6 btnNextPrev bg-black hover:bg-gray-700 w-full">
                                <svg width="14" height="24" className="text-center" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </GridManualitem>

                <GridManualitem mobile="12" sm="12" md="12" lg="5" xl="5" anyclass="relative flex justify-center items-center relative">
                    <div className="px-8 max-w-xl py-20 lg:py-32">
                        <h1 className="myfont text-2xl lg:text-5xl">
                            {currentSlide.title1} 
                            {currentSlide.title2}
                            {currentSlide.title3}
                        </h1>
                        <p className="text-gray-400 py-8 text-lg">
                            {currentSlide.desc1}
                            {currentSlide.desc2}
                            {currentSlide.desc3}
                        </p>
                        <div className="flex space-x-6 items-center text-black hover:text-gray-400">
                            <a href="#" className="myfont uppercase tracking-widestcustom text-lg">Shop Now</a>
                            <svg className="animate-bounce" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                    fill="#000" fillRule="nonzero" />
                            </svg>
                        </div>
                    </div>
                </GridManualitem>
            </GridManualflow>
        </section>
    );
}