import { useState, useEffect } from 'react';

import './works.scss';

import { ImCross } from "react-icons/im";
import { BsExclamationTriangle } from "react-icons/bs";

const InWorks = () => {
    const [ popupOpen, setPopupOpen ] = useState<boolean>(true);

    useEffect(() => {
        document.body.classList.add('modal-open');
        window.scrollTo(0,0);
	}, []);

    const handleClose = () => {
        setPopupOpen(false);
        document.body.classList.remove('modal-open');
    }

    return (
        <>
        {popupOpen && (
            <div className="absolute h100vh w100vw z999 flex justify-center align-center in-works-popup">
                <div className="content b-4 flex flex-column justify-center align-center">  
                    <div className="w100 flex justify-end align-center p-18">
                        <button 
                            onClick={handleClose}
                            className='no-border c-pointer transparent hover-opacity'
                        >
                            <ImCross className='hover-opacity'/>
                        </button>
                    </div>

                    <div className="flex flex-column justify-center align-center gap-24 p-24">
                        <div className="flex justify-center align center caution-wrapper">
                            <BsExclamationTriangle className='white'/>
                        </div>

                        <span className="fs-16 text-center fw-600 ls-05">
                            Under Development
                        </span>

                        <p className="fs-14 text-center fw-400 ls-05 gray-1">
                            Hi! Our website is actively under development and some features may not be available yet.
                        </p>

                        <span className="fs-14 text-center fw-500 ls-05 black">
                            <a
                                href="https://veeti-webdev.vercel.app/"
                                className="no-deco black"
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                ~ EzRental Team
                            </a>
                        </span>

                        <button
                            className="w100 no-border b-4 text-center p-12 c-pointer fw-500 ls-05 fs-14 dark-gray-bg white hover-opacity"
                            onClick={handleClose}
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default InWorks;