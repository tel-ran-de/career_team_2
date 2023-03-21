export const initialReq = (callback) => {
	fetch('./data.json')
		.then((res) => res.json())
		.then((res) => callback(res));
};
