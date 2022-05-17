import React from "react";

const Home = () => {
	return (
		<div className="home-page">
			<div className="home-header">
				<h1>Compare your Air</h1>
				<p>Compare the air quality between cities in the UK.</p>
				<p>Select cities to compare using the search tool below.</p>
			</div>
            <div className="home-body">
                <div className="search-input">
                    <input type="text" />
                </div>
                <div className="search-results">
                    <div className="card">
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
