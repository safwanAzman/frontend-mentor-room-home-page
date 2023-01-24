import React, { useState } from "react";
import humburger from '../../img/icon-hamburger.svg';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, fab);

function Humbuger(props) {
    const [setShow, setShowState] = useState(false);

    function togglebtn() {
        setShowState(!setShow);
    }
    return (
        <div>
            <div className="-mt-5">
                <button onClick={togglebtn}>
                    <img src={humburger} alt="humbuger" className="w-auto" />
                </button>
            </div>

            <div className={setShow ? `fixed bg-black opacity-80 inset-0 z-50 h-screen` :`hidden`}>
                <Fade top>
                    <div className="bg-white py-4 px-12 h-32 flex justify-center space-x-8">
                        <button onClick={togglebtn}>
                            <FontAwesomeIcon icon={["fas", "times"]} color="#c7c7c7" size="lg" />
                        </button>
                        <div className="flex items-center w-full">
                            <div className="flex-row space-x-4">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Humbuger;