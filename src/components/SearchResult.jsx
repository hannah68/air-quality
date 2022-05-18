import useState from "react";
import { GrClose } from "react-icons/gr";
import '../styles/home.css';

const SearchResult = ({data}) => {
  // console.log(data);
	return (
		<div className="card">
			<div className="card-close">
				<GrClose className="close-btn" />
			</div>
			<p className="card-time">{data.date.utc}</p>
			<h3 className="card-title">{data.location}</h3>
			<p className="card-city">in {data.city}, {data.country === 'GB' ? 'United Kingdom' : data.country}</p>
			{/* <p className="card-value">{`values: ${data.parameter}: ${data.value}`}</p> */}
		</div>
	);
};

export default SearchResult;
