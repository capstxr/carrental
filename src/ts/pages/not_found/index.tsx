// Import page css
import './not_found.scss';

// Import packages & modules
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
		document.title = "Drivee - Error Page";
		window.scrollTo(0,0);
	}, []);

    return (
        <main className="main">
            <section className="wrapper w100vw h100vh flex justify-center align-center">
                <div className="content flex flex-column justify-center align-center">
                    <h2 className="fs-72 fw-600 ls-05 lh-125" id='not-found-head'>
                        Oops!
                    </h2>

                    <h3 className="fs-36 fw-500 ls-05 capital m-t-20" id='not-found-2'>
                        Page not found!
                    </h3>

                    <p className="fs-20 fw-450 ls-05 m-t-20 text-center" id='not-found-text'>
                        We're sorry! The requested page could not be found. It may have been removed or unavailable.
                    </p>

                    <Link
                        to='/'
                        rel='noreferrer noopener nofollow'
                        className='white black-bg capital fw-450 fs-16 btn-1 no-deco ls-05 m-t-40'
                    >
                        Return Home
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default NotFound;