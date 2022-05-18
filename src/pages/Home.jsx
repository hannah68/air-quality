import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

import "../styles/home.css";

import SearchResult from "../components/SearchResult";

import { EXTERNAL_API } from "../utils/config";

const Home = () => {
	const [airQualityData, setairQualityData] = useState([]);
	const [allSuggestions, setAllSuggestions] = useState([]);
	const [uniqueCities, setUniqueCities] = useState([]);
	const [selectedCity, setSelectedCity] = useState([]);

	// useeffect to fetch data===================================
	useEffect(() => {
		const fetchData = async () => {
			const airRes = await fetch(EXTERNAL_API);
			const airData = await airRes.json();
			setairQualityData(airData.results);
		};
		fetchData();

		if (allSuggestions) {
			const cities = allSuggestions.map((el) => el.city);
			setUniqueCities([...new Set(cities)]);
		}
	}, [allSuggestions]);

	// change handler==============================================
	const changeHandler = (e) => {
		const { value } = e.target;
		let matches = [];

		if (value.length > 0) {
			airQualityData.forEach(data => {
				const cityName = data.city.slice(0, value.length).toLowerCase();
				if (cityName === value.toLowerCase()) {
					matches.push(data);
				}
			});
		}

		const uniqueData = [
			...new Map(matches.map((item) => [item["location"], item])).values(),
		];
		setAllSuggestions(uniqueData);
	};

	// click on selected city=========================================
	const clickListHandler = (city) => {
		const filteredCity = allSuggestions.filter((el) => el.city === city);
		setSelectedCity(filteredCity);
	};

	// close cart=====================================================
	const closeCartHandler = (data) => {
		const filteredArr = selectedCity.filter(
			(el) => el.location !== data.location
		);
		setSelectedCity(filteredArr);
	};

	return (
		<div className="home-page">
			<div className="home-header">
				<h1 className="title">Compare your Air</h1>
				<div className="text">
					<p>Compare the air quality between cities in the UK.</p>
					<p>Select cities to compare using the search tool below.</p>
				</div>
				<div className="search-input">
					<span className="search-icon">
						<BsSearch className="icon" />
					</span>
					<input
						type="text"
						onChange={changeHandler}
						placeholder="Enter city name..."
					/>
				</div>
				<ul className="dropdown-menu">
					{uniqueCities &&
						uniqueCities.map((city, index) => {
							return (
								<li
									key={index}
									className="dropdown-list"
									onClick={() => clickListHandler(city)}
								>
									{city}
								</li>
							);
						})}
				</ul>
			</div>
			<div className="home-body">
				<div className="search-results-container">
					{selectedCity.length > 0
						? selectedCity.map((data, index) => {
								return (
									<SearchResult
										key={index}
										data={data}
										closeCartHandler={closeCartHandler}
									/>
								);
						  })
						: allSuggestions.map((data, index) => {
								return (
									<SearchResult
										key={index}
										data={data}
										closeCartHandler={closeCartHandler}
									/>
								);
						  })}
				</div>
			</div>
		</div>
	);
};

export default Home;
