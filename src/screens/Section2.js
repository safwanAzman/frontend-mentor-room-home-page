import React from 'react';
import Desktopimg4 from '../img/image-about-dark.jpg';
import Desktopimg5 from '../img/image-about-light.jpg';
import GridManualflow from '../components/Grid/GridManualflow';
import GridManualitem from '../components/Grid/GridManualitem';

export default function Section2() {

    return(
        <section className="bg-white">
            <GridManualflow anyclass="h-full" gap="0">
                <GridManualitem mobile="12" sm="12" md="12" lg="3" xl="3" anyclass="">
                    <div className="h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Desktopimg4})` }}>
                        <div className="w-auto px-12 py-12 h-96 lg:h-full "></div>
                    </div>
                </GridManualitem>
                <GridManualitem mobile="12" sm="12" md="12" lg="6" xl="6" anyclass="flex justify-center items-center px-8 lg:px-24 py-20 lg:py-4 h-full">
                    <div className="py-0 lg:py-12">
                        <p className="text-lg uppercase myfont tracking-widestcustom">ABOUT OUR FURNITURE</p>
                        <p className="py-2 text-lg text-gray-400">
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
                            Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                            Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                </GridManualitem>
                <GridManualitem mobile="12" sm="12" md="12" lg="3" xl="3" anyclass="">
                    <div className="h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Desktopimg5})` }}>
                        <div className="w-auto py-12 h-96 lg:h-full "></div>
                    </div>
                </GridManualitem>
            </GridManualflow>
        </section>
    );

}