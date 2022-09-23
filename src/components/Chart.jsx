import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Chart(props) {
	if (props.isLoading) {
		return (
			<div className='my-3'>
				<svg
					className={`card-img-top placeholder-glow`}
					width='100%'
					height='400'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-label='Placeholder'
					preserveAspectRatio='xMidYMid slice'
					focusable='false'
				>
					<title>Placeholder</title>
					<rect width='100%' height='100%' fill='#ddd'></rect>
				</svg>
			</div>
		);
	}

	return (
		<div className='mt-4'>
			<div className='row justify-content-center'>
				<div className='col-md-10'>
					{props.selectedCountry === 'global' ? (
						<Line
							data={{
								labels: props.status.map((report) => report.reportDate),
								datasets: [
									{
										data: props.status.map((report) => report.confirmed.total),
										label: 'Infected',
										borderColor: 'rgb(153, 102, 255)',
										backgroundColor: 'rgba(153, 102, 255, 0.2)',
										fill: false,
										borderWidth: 1,
									},
									{
										data: props.status.map((report) => report.deaths.total),
										label: 'Deaths',
										borderColor: 'rgb(75, 192, 192)',
										backgroundColor: 'rgba(75, 192, 192, 0.2)',
										fill: false,
										borderWidth: 1,
									},
									{
										data: props.status.map((report) => report.recovered.total),
										label: 'Recovered',
										borderColor: 'rgb(255, 99, 132)',
										backgroundColor: 'rgba(255, 99, 132, 0.2)',
										fill: false,
										borderWidth: 1,
									},
								],
							}}
						/>
					) : (
						<Bar
							data={{
								labels: ['Infected', 'Recovered', 'Deaths'],
								datasets: [
									{
										label: 'People',
										backgroundColor: [
											'rgba(153, 102, 255, 0.2)',
											'rgba(75, 192, 192, 0.2)',
											'rgba(255, 99, 132, 0.2)',
										],
										borderColor: [
											'rgb(153, 102, 255)',
											'rgb(75, 192, 192)',
											'rgb(255, 99, 132)',
										],
										borderWidth: 1,
										data: [
											props.status?.confirmed?.value,
											props.status?.recovered?.value,
											props.status?.deaths?.value,
										],
									},
								],
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

Chart.defaultProps = {
	status: [],
	selectedCountry: 'global',
};

export default Chart;
