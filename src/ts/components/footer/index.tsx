// Import modules
import { Link } from 'react-router-dom';

// Import component css
import './footer.scss';

// Import icons
import { FaFacebookF, FaTwitter, FaInstagram,
    FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="wrapper">
            <div className="content flex justify-space">
                <div className="flex flex-column">
                    <h2 className="fs-36 fw-550 ls-05 white">
                        EzRental
                    </h2>

                    <p className="fs-18 fw-400 ls-05 gray-1 lh-150 m-t-20">
                        Your rental car is just a button click away. Take control of your journey today.
                    </p>

                    <div className="flex gap-24 align-center m-t-40">
                        <a
                            href="https://www.facebook.com/"
                            className="no-deco white fs-24"
                            rel='noreferrer noopener nofollow'
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.twitter.com/"
                            className="no-deco white fs-24"
                            rel='noreferrer noopener nofollow'
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            className="no-deco white fs-24"
                            rel='noreferrer noopener nofollow'
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            className="no-deco white fs-24"
                            rel='noreferrer noopener nofollow'
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="flex flex-column">
                    <h2 className="fs-24 fw-550 ls-05 white">
                        Navigation
                    </h2>

                    <div className="flex flex-column gap-12 m-t-20">
                        <Link
                            to='/'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Home
                        </Link>

                        <Link
                            to='/about'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            About us
                        </Link>

                        <Link
                            to='/renting'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Renting
                        </Link>

                        <Link
                            to='/contact'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="flex flex-column">
                    <h2 className="fs-24 fw-550 ls-05 white">
                        Vehicles
                    </h2>

                    <div className="flex flex-column gap-12 m-t-20">
                        <Link
                            to='/cars-for-rent'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Cars
                        </Link>

                        <Link
                            to='/bikes-for-rent'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Bikes
                        </Link>
                    </div>
                </div>

                <div className="flex flex-column">
                    <h2 className="fs-24 fw-550 ls-05 white">
                        Policies
                    </h2>

                    <div className="flex flex-column gap-12 m-t-20">
                        <Link
                            to='/privacy-policy'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Privacy policy
                        </Link>

                        <Link
                            to='/terms-of-service'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Terms of service
                        </Link>

                        <Link
                            to='/legal-info'
                            rel='noreferrer noopener nofollow'
                            className='no-deco white fs-16 capital underline-hover'
                        >
                            Legal info
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;