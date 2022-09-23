import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Spinner from './Spinner';

function CountryPicker(props) {
	const [countries, setCountries] = useState([
		{ label: 'global', value: 'global' },
	]);

	useEffect(() => {
		const apiCountry = props.countries
			.filter((country) => country.iso3 || country.iso2)
			.map((country) => ({
				label: country.name,
				value: country.iso3 || country.iso2,
			}));

		setCountries([{ label: 'global', value: 'global' }, ...apiCountry]);
	}, [props.countries]);

	if (props.isLoading) {
		return (
			<div className='my-3'>
				<Spinner />
			</div>
		);
	}

	return (
		<div>
			<div className='row justify-content-center'>
				<div className='col-md-6'>
					<Select
						defaultValue={countries[0]}
						onChange={(country) => props.onChange(country.value)}
						options={countries}
						className='react-select-container'
						classNamePrefix="react-select"
						isSearchable
					/>
				</div>
			</div>
		</div>
	);
}

CountryPicker.defaultProps = {
	countries: [],
	onChange: (data) => console.log(data),
};

export default CountryPicker;
