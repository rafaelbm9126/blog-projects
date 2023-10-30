export function format_date(date_string: string) {
	const date = new Date(date_string);
	return {
		print: `${date.toLocaleString("default", {
			month: "long"
		})} ${date.getDate()}, ${date.getFullYear()}`,
		iso: date.toISOString()
	};
}
