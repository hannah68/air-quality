import { GrClose } from "react-icons/gr";

import "../styles/home.css";

import { dateDiffInDays } from "../utils/utils";

const SearchResult = ({ data, closeCartHandler }) => {
	const today = new Date();
	const postDate = new Date(data.date.utc);

	return (
		<div className="card">
			<div className="card-close">
				<GrClose className="close-btn" onClick={() => closeCartHandler(data)} />
			</div>

			<p className="card-time">updated {dateDiffInDays(postDate, today)}</p>
			<h3 className="card-title">{data.location}</h3>
			<p className="card-city">
				in {data.city},{" "}
				{data.country === "GB" ? "United Kingdom" : data.country}
			</p>
			<p className="card-value">{`values: ${data.parameter}: ${data.value}`}</p>
		</div>
	);
};

export default SearchResult;
