import axios from 'axios';

const instanceApi = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

async function getGlobalStatus(country = 'global') {
	return instanceApi.get(
		country && country !== 'global' ? `/countries/${country}` : '/'
	);
}

async function getAllCountries() {
	return instanceApi.get(`/countries`);
}

async function getDailySummery() {
	return instanceApi.get(`/daily`);
}

export { getGlobalStatus, getAllCountries, getDailySummery };
