export const dateDiffInDays = (a, b) => {
	const day = 1000 * 60 * 60 * 24;

	const utc1 = Date.UTC(
		a.getFullYear(),
		a.getMonth(),
		a.getDate(),
		a.getHours()
	);

	const utc2 = Date.UTC(
		b.getFullYear(),
		b.getMonth(),
		b.getDate(),
		b.getHours()
	);

	const showDay = Math.floor((utc2 - utc1) / day);

	if (showDay < 24) {
		return `${Math.abs(utc2 - utc1) / 36e5} hours ago`;
	}

	return `${Math.floor((utc2 - utc1) / day)} days ago`;
};
