import React from "react";
import "../styles/home.css";
import { GrClose } from "react-icons/gr";
import {BsSearch} from "react-icons/bs";

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-header">
				<h1 className="title">Compare your Air</h1>
				<div className="text">
					<p>Compare the air quality between cities in the UK.</p>
					<p>Select cities to compare using the search tool below.</p>
				</div>
				<div className="search-input">
                    <span className="search-icon"><BsSearch className="icon"/></span>
					<input type="text" />
				</div>
			</div>
			<div className="home-body">
				<div className="search-results">
					<div className="card">
						<div className="card-close">
							<GrClose className="close-btn" />
						</div>
						<p className="card-time">update an hour ago</p>
						<h3 className="card-title">manchester picadilly</h3>
						<p className="card-city">in Manchester, united kingdom</p>
						<p className="card-value">values: pm25, so2: 32, o3: 8, NO2: 43</p>
					</div>

					<div className="card">
						<div className="card-close">
							<GrClose className="close-btn" />
						</div>
						<p className="card-time">update an hour ago</p>
						<h3 className="card-title">manchester picadilly</h3>
						<p className="card-city">in Manchester, united kingdom</p>
						<p className="card-value">values: pm25, so2: 32, o3: 8, NO2: 43</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
