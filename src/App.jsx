import React, { useEffect, useState } from 'react';
import { getAllCountries, getDailySummery, getGlobalStatus } from './api';
import CountryPicker from './components/CountryPicker';
import StatusCards from './components/StatusCards';
import Chart from './components/Chart';
import covidImage from './assets/images/icons/covid-19.png';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/scss/core.scss';

function App() {
	const [selectedCountry, setSelectedCountry] = useState('global');
	const [countries, setCountries] = useState([]);
	const [globalStatus, setGlobalStatus] = useState({});
	const [dailyStatus, setDailyStatus] = useState([]);
	const [isLoading, setIsLoading] = useState({
		status: true,
		country: true,
	});

	useEffect(() => {
		apiGetCountries();
		apiGetDailySummery();
	}, []);

	useEffect(() => {
		const apiGetGlobalStatus = async () => {
			setIsLoading((load) => ({ ...load, status: true }));
			getGlobalStatus(selectedCountry)
				.then((response) => {
					setGlobalStatus(response.data);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setIsLoading((load) => ({ ...load, status: false }));
				});
		};

		apiGetGlobalStatus();
	}, [selectedCountry]);

	const apiGetCountries = async () => {
		getAllCountries()
			.then((response) => {
				setCountries(response.data.countries);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading((load) => ({ ...load, daily: false }));
			});
	};

	const apiGetDailySummery = async () => {
		getDailySummery()
			.then((response) => {
				setDailyStatus(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading((load) => ({ ...load, country: false }));
			});
	};

	return (
		<div className='container my-4'>
			<div className='text-center my-5'>
				<img src={covidImage} alt='covid-19' />
			</div>

			<StatusCards status={globalStatus} isLoading={isLoading.status} />

			<CountryPicker
				countries={countries}
				onChange={setSelectedCountry}
				isLoading={isLoading.country}
			/>

			<Chart
				status={selectedCountry === 'global' ? dailyStatus : globalStatus}
				selectedCountry={selectedCountry}
				isLoading={isLoading.status}
			/>
		</div>
	);
}

export default App;
