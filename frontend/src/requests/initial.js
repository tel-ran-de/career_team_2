export const initial_req = (callback) => {
	fetch('./data.json')
		.then((res) => res.json())
		.then((res) => callback(res));
};
