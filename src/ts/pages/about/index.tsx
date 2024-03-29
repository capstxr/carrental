// Import modules
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import components
import FAQ from '../../components/body/faq';

// Import page CSS
import './about.scss';

// Import icons
import { GiCarSeat, GiGearStick } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";

const About = () => {
    useEffect(() => {
		document.title = "EzRental - About";
		window.scrollTo(0,0);
	}, []);

    interface FleetProps {
        name: string;
        image: string;
        seats: number;
        price: number;
        fuel_type: string;
        gear_amount: number;
        clutch: string;
    }

    const Fleet = (props: FleetProps) => {
        const { name, image, seats, price, 
            fuel_type, gear_amount, clutch } = props;

        return (
            <div className="fleet-wrapper flex flex-column gap-24 justify-center align-center gray-3-border b-4">
                <img
                    src={`/images/fleet/${image}`}
                    alt={name}
                    className="fleet-img"
                    loading='lazy'
                />

                <div className="fleet-bottom flex flex-column gap-12 w100">
                    <h4 className="fw-550 ls-05 fs-24">
                        {name}
                    </h4>

                    <div className="flex align-center gap-12">
                        <GiCarSeat className='fleet-icon'/>

                        <span className="fs-18 black fw-450 ls-05">
                            Seats
                        </span>

                        <span className="gray-1 fs-16 fw-400 ls-05 m-t-2">
                            {seats}
                        </span>
                    </div>

                    <div className="flex gap-12 align-center">
                        <BsFuelPumpFill className='fleet-icon'/>
                        
                        <span className="fs-18 black fw-450 ls-05">
                            Fuel type
                        </span>

                        <span className="gray-1 fs-16 fw-400 ls-05 m-t-2">
                            {fuel_type}
                        </span>
                    </div>

                    <div className="flex gap-12 align-center">
                        <GiGearStick className='fleet-icon'/>
                        
                        <span className="fs-18 black fw-450 ls-05">
                            Gearbox
                        </span>

                        <span className="gray-1 fs-16 fw-400 ls-05 m-t-2">
                            {clutch}
                        </span>
                    </div>

                    <div className="flex gap-12 align-center">
                        <TbAutomaticGearbox className='fleet-icon'/>
                        
                        <span className="fs-18 black fw-450 ls-05">
                            Gears
                        </span>

                        <span className="gray-1 fs-16 fw-400 ls-05 m-t-2">
                            {gear_amount}
                        </span>
                    </div>

                    <div className="flex gap-12 align-center">
                        <IoIosPricetags className='fleet-icon'/>
                        
                        <span className="fs-18 black fw-450 ls-05">
                            Daily price
                        </span>

                        <span className="gray-1 fs-16 fw-400 ls-05 m-t-2">
                            ${price}
                        </span>
                    </div>

                    <Link
                        to='/cars-for-rent'
                        rel='noreferrer noopener nofollow'
                        className='white black-bg capital fw-450 fs-16 btn-1 no-deco ls-05 maxc m-t-20'
                    >
                        Rent Now
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="main">
            <section id="about-hero" className="wrapper relative">
                <img
                    src="/images/about/hero.webp"
                    alt="Background"
                    className="absolute z-0 w100 h100 about-hero-img"
                    loading='eager'
                />

                <div className="content relative z-1 flex flex-column justify-center align-center">
                    <h2 className="ls-05 text-center capital white a-hero-head">
                        <span className="fs-54 fw-600">EzRental</span>
                        <hr />
                        <span className="fs-42 fw-500">Your car rental company</span>
                    </h2>

                    <p className="fs-18 fw-400 ls-05 text-center white a-hero-text m-t-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem temporibus aperiam, nam provident quam?
                    </p>
                </div>
            </section>

            <section id="mission" className="wrapper">
                <div className="content">
                    <h2 className="fs-42 fw-550 ls-1 text-center">
                        Our Mission
                    </h2>

                    <div className="about-grid m-t-20">
                        <div className="left">
                            <p className="fs-16 black fw-400 lh-200 ls-03">
                                At EzRental, we are driven by a singular mission: <span className="fs-18 fw-600">to provide</span> our customers with unparalleled convenience, reliability, and <span className="fs-18 fw-600">exceptional service</span> in every journey they undertake.
                                We understand that renting a car or a bike is not merely about transportation; it's about facilitating unforgettable experiences, enabling seamless travel, <span className="fs-18 fw-600">and fostering lasting memories</span>.
                            </p>
                        </div>

                        <div className="right">
                            <img
                                src="/images/about/1.webp"
                                alt="Car Rental"
                                className="about-img"
                            />
                        </div>
                    </div>

                    <h2 className="fs-42 fw-550 ls-1 text-center">
                        Our Values
                    </h2>

                    <div className="about-grid m-t-20 w100">
                        <div className="left">
                            <img
                                src="/images/about/handshake.webp"
                                alt="Car Rental"
                                className="about-img"
                            />
                        </div>

                        <div className="right">
                            <p className="fs-16 black fw-400 lh-200 ls-03">
                                Our values are the foundation of everything we do. They guide our decisions, shape our interactions, and inspire us to provide exceptional service to our customers. We sorely focus on <span className="fw-600 fs-18">customer satisfaction</span>, <span className="fw-600 fs-18">quality and safety</span>, <span className="fw-600 fs-18">sustainability</span>, <span className="fw-600 fs-18">community engagement</span> and <span className="fs-18 fw-600">continuous improvement</span>. At EzRental, we prioritize your satisfaction and safety above everything else.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="fleet" className="wrapper">
                <div className="content">
                    <h2 className="fs-42 fw-550 ls-1 text-center">
                        Our Fleet
                    </h2>

                    <div className="fleet-grid align-center w100 m-t-40">
                        <Fleet
                            name='KPR 150'
                            image='kpr_150.png'
                            seats={2}
                            price={16}
                            fuel_type='Gasoline'
                            gear_amount={5}
                            clutch='Manual'
                        />

                        <Fleet
                            name='Jeep Renegade'
                            image='jeep.png'
                            seats={5}
                            price={28}
                            fuel_type='Gasoline'
                            gear_amount={9}
                            clutch='Automatic'
                        />

                        <Fleet
                            name='Audi A5 Sportback'
                            image='audi_a5.png'
                            seats={5}
                            price={32}
                            fuel_type='Hybrid'
                            gear_amount={7}
                            clutch='Automatic'
                        />

                        <Fleet
                            name='Dethleffs I 7017 Trend'
                            image='dethleffs.png'
                            seats={4}
                            price={48}
                            fuel_type='Diesel'
                            gear_amount={6}
                            clutch='Manual'
                        />

                        <Fleet
                            name='Kia Rio'
                            image='kia_rio.png'
                            seats={5}
                            price={16}
                            fuel_type='Gasoline'
                            gear_amount={4}
                            clutch='Automatic'
                        />

                        <Fleet
                            name='Genergia LX 05'
                            image='genergia_lx05.png'
                            seats={2}
                            price={14}
                            fuel_type='Electric'
                            gear_amount={1}
                            clutch='Electric'
                        />
                    </div>

                    <div className="w100 flex align-center justify-center m-t-20">
                        <Link
                            to='/cars-for-rent'
                            rel='noreferrer noopener nofollow'
                            className='white black-bg capital fw-450 fs-16 btn-1 no-deco ls-05 maxc'
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </section>

            <FAQ/>
        </main>
    );
}

export default About;