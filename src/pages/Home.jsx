import { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import { BsSearch } from "react-icons/bs";
import SearchResult from "../components/SearchResult";

const Home = () => {
	const [airQualityData, setairQualityData] = useState([]);
	const [allSuggestions, setAllSuggestions] = useState([]);
	const [uniqueCities, setUniqueCities] = useState([]);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

   
	// useeffect to fetch data===================================
	useEffect(() => {
		const fetchData = async () => {
			const airRes = await fetch(
				"https://api.openaq.org/v1/measurements?country_id=gb&country=uk&parameter=pm25&parameter=so2&parameter=o3&parameter=no2"
			);

			const airData = await airRes.json();
			console.log(airData.results);
			setairQualityData(airData.results);
		};
		fetchData();

		if (allSuggestions) {
			let cities = allSuggestions.map((suggest) => suggest.city);
			setUniqueCities([...new Set(cities)]);
		}
	}, [allSuggestions]);

    // useEffect(() => {
    //     if(ref.current.clientHeight > 0 && uniqueCities){
    //         setHeight(ref.current.clientHeight)
    //     }else{
    //         setHeight(0);
    //     }
        
    // }, [ref, uniqueCities]);

    function convertPXToVh(px) {
        console.log( px * (100 / document.documentElement.clientHeight));
        return (px * (100 / document.documentElement.clientHeight)) + 50;
    }


	// change handler==============================================
	const changeHandler = (e) => {
		const { value } = e.target;
		let matches = [];

		if (value.length > 0) {
			airQualityData.filter((data) => {
				const str1 = data.city.slice(0, value.length).toLowerCase();
				if (str1 === value.toLowerCase()) {
					matches.push(data);
				}
			});
		}
        console.log(matches)
        setAllSuggestions(matches)
	}

    const cleanFn = () => {
        console.log('allSuggestions', allSuggestions)
        const uniqueData = [...new Map(allSuggestions.map((item) => [item["location"], item])).values()];
        console.log('uniqueData', uniqueData)
    }

    if(allSuggestions.length > 0){
        cleanFn()
    }
 
    // style={{height: height > 0 ?  convertPXToVh(height) + 'vh': '50vh'}}
    
	return (
		<div className='home-page'>
			<div className='home-header'>
				<h1 className="title">Compare your Air</h1>
				<div className="text">
					<p>Compare the air quality between cities in the UK.</p>
					<p>Select cities to compare using the search tool below.</p>
				</div>
				<div className="search-input">
					<span className="search-icon">
						<BsSearch className="icon" />
					</span>
					<input type="text" onChange={changeHandler} />
					<div className='dropdown-menu' ref={ref}>
						{uniqueCities &&
							uniqueCities.map((city, index) => {
								return (
									<div key={index} className='dropdown-list'>
                                        {city}
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className="home-body">
				<div className="search-results-container">
                    {allSuggestions.map((data, index)=> {
                        return <SearchResult key={index} data={data}/>
                    })}
					
				</div>
			</div>
		</div>
	);
};

export default Home;
