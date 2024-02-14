// Import modules
import { useEffect, useState, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../server/HostHandler";

// Import icons
import { FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

// Auth
import { AuthContext } from '../../Auth';

// Import page css
import './dashboard.scss';

const Dashboard = () => {
	const authContext = useContext<any>(AuthContext);
	const { isLoggedIn } = authContext;
	const navigate = useNavigate();

	const [ userData, setUserData ] = useState<any>({});

	async function getUserData() {
		console.log(!!localStorage.getItem('token'));

		try {
			const response = await axiosInstance.post(
				'/get-account-data', { token: localStorage.getItem('token') }
			);

			console.log(response);

			setUserData({
				username: response.data.message.username,
				email: response.data.message.email,
				id: response.data.message.userid
			});
		} catch (error) {
			
		}
	}

	useEffect(() => {
		if (!isLoggedIn) {
			return navigate('/');
		}
		
		getUserData();
		document.title = "EzRental - Dashboard";
		window.scrollTo(0,0);
	}, []);

	const [ activeTab, setActiveTab ] = useState<number>(0);

	interface TabProps {
		icon: any;
		name: string;
		link: string;
		index: number;
	}

	const Tab = (props: TabProps) => {
		const { icon, name, link, index } = props;

		const colors = index === activeTab
			? 'black-bg white'
			: 'white-bg black'

		const onClick = () => {
			setActiveTab(index);
		}

		return (
			<Link
				to={link}
				rel="noreferrer noopener nofollow"
				className={`b-4 ${colors} flex gap-12 max-c no-deco align-center p-6-12`}
				onClick={onClick}
			>
				{icon}

				<span className="fs-18 fw-500 ls-05 no-deco">{name}</span>
			</Link>
		);
	}

	return (
		<main className="main">
			<section
				className="wrapper relative"
				id="dashboard-hero"
			>
				<img
					src="/images/about/hero.webp"
					alt="Background"
					className="absolute z-0 w100 h100 bg-img"
					loading="eager"
				/>

				<div className="content flex flex-column gap-12 justify-center align-center absolute z-1">
					<h2 className="fs-36 fw-600 white ls-05">Dashboard</h2>
				</div>
			</section>

			<section className="wrapper">
				<div className="content flex db-content">
					<div className="sidebar flex flex-column gap-24">
						{userData && (
						<div className="flex flex-column gap-12 w100 justify-center align-center">
							<img
								src="/images/placeholder_pfp.jpg"
								alt="Profile"
								className="pfp"
								loading="lazy"
							/>

							<span className="fs-18 fw-600 ls-05 black text-center">
								{userData.username}
							</span>

							<span className="fs-16 fw-500 ls-05 black">
								{userData.email}
							</span>
						</div>
						)}

						<div className="flex flex-column gap-12">
							<Tab
								icon={<FaHome className="fs-24"/>}
								name="Dashboard"
								link='#'
								index={0}
							/>

							<Tab
								icon={<FaUserCircle className="fs-24"/>}
								name="My Profile"
								link='#profile'
								index={1}
							/>

							<button
								className="b-4 flex gap-12 max-c align-center p-6-12 white-bg black no-border c-pointer"
							>
								<FaSignOutAlt className="fs-24"/>

								<span
									className="fs-18 fw-500 ls-05 no-deco"
								>
									Sign Out
								</span>
							</button>
						</div>
					</div>

					<div className="main-c">
						<span>Hello, World!</span>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Dashboard;