// Import modules
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../server/HostHandler";
import Cookies from "js-cookie";

// Import icons
import { FaHome, FaUserCircle, FaTag,
		FaSignOutAlt, FaCalendar  } from "react-icons/fa";

import { IoSpeedometerSharp } from "react-icons/io5";

// Auth
import { AuthContext } from '../../Auth';

// Import page css
import './dashboard.scss';

const Dashboard = () => {
	const authContext = useContext<any>(AuthContext);
	const { isLoggedIn, logout } = authContext;
	const navigate = useNavigate();

	const [ userData, setUserData ] = useState<any>({});

	async function getUserData() {
		try {
			const response = await axiosInstance.post(
				'/get-account-data', { token: Cookies.get('jwtToken') }
			);

			setUserData({
				username: response.data.message.username,
				email: response.data.message.email,
				id: response.data.message.userid
			});
		} catch (error) { console.error(error) }
	}

	useEffect(() => {
		if (!isLoggedIn) {
			return navigate('/');
		}

		getUserData();
		document.title = "EzRental - Dashboard";
		window.scrollTo(0,0);
	}, [isLoggedIn, navigate]);

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

	interface StatProps {
		icon: any;
		amt: number;
		name: string;
	}

	function formatNumber(n: number) {
		return (n < 10 ? '0' : '') + n;
	}

	const Stat = (props: StatProps) => {
		const { icon, amt, name } = props;

		return (
			<div className="flex flex-column gap-12 stat-wrapper">
				{icon}

				<span className="fs-42 ls-15 fw-550">
					{formatNumber(amt)}
				</span>

				<span className="fs-24 fw-500 ls-05">
					{name}
				</span>
			</div>
		);
	}

	const RenderTabContent = () => {
		return (
			<div className="main-c">
				{activeTab === 0 && (
				<div className="flex flex-column gap-36">
					<div className="flex w-100 align-center justify-space">
						<Stat
							icon={<FaCalendar className="fs-42"/>}
							amt={3}
							name="Total orders"
						/>

						<Stat
							icon={<IoSpeedometerSharp className="fs-42"/>}
							amt={237}
							name="Miles driven"
						/>

						<Stat
							icon={<FaTag className="fs-42"/>}
							amt={836}
							name="Credits"
						/>
					</div>

					<div className="flex flex-column gap-12">
						<h3 className="fs-28 fw-600 ls-05 black">
							Recent Orders
						</h3>

						<table className="w100 order-table">
							<tr>
								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Booking No
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Vehicle
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Pick Up Location
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Date
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Return Date
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Payment
								</th>

								<th
									className="fs-18 fw-600 black ls-05 text-center"
								>
									Status
								</th>
							</tr>

							<tr>
								<td
									className="fs-18 fw-500 black ls-05 text-center"
								>
									#02345
								</td>

								<td
									className="fs-18 fw-500 black ls-05 text-center"
								>
									Kia Rio
								</td>
							</tr>
						</table>
					</div>
				</div>
				)}

				{activeTab === 1 && (
				<div className="flex flex-column gap-36">
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
					<span>Profile</span>
				</div>
				)}	
			</div>
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
								link='#main'
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
								onClick={logout}
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

					<RenderTabContent/>
				</div>
			</section>
		</main>
	);
}

export default Dashboard;