import React from 'react';
import CountUp from 'react-countup';
import { timeToX } from '../utils/dayjs';

function StatusCards({ status, isLoading }) {
	const SingleCard = (props) => {
		const {
			className = '',
			title = '',
			info = '',
			count = 0,
			lastUpdate = new Date(),
		} = props;

		return (
			<div className='col-md-4 my-3'>
				<div className={`card status-card nice-shadow ${className}`}>
					<div className='card-body'>
						<h5 className='card-title'>{title}</h5>
						<h3 className='card-title'>
							<CountUp separator=',' end={count} />
						</h3>
						<p className='card-text mb-1 text-muted'>{timeToX(lastUpdate)}</p>
						<p className='card-text'>{info}</p>
					</div>
				</div>
			</div>
		);
	};

	const Placeholder = () => {
		return (
			<>
				<div className='col-md-4 my-3'>
					<div className={`card status-card nice-shadow `}>
						<div className='card-body'>
							<h5 className='card-title placeholder-glow'>
								<span className='placeholder col-6'></span>
							</h5>
							<p className='card-text placeholder-glow'>
								<span className='placeholder col-4'></span>
							</p>
							<p className='card-text placeholder-glow'>
								<span className='placeholder col-7'></span>
								<span className='placeholder col-4'></span>
								<span className='placeholder col-4'></span>
								<span className='placeholder col-6'></span>
								<span className='placeholder col-8'></span>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	};

	if (isLoading) {
		return (
			<div className='row my-3'>
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</div>
		);
	}

	return (
		<div className='row my-3'>
			<SingleCard
				title='confirmed'
				className='confirmed'
				info='number of active cases COVID 19'
				lastUpdate={status.lastUpdate}
				count={status.confirmed.value}
			/>
			<SingleCard
				title='recovered'
				className='recovered'
				info='number of recovered from COVID 19'
				lastUpdate={status.lastUpdate}
				count={status.recovered.value}
			/>
			<SingleCard
				title='deaths'
				className='deaths'
				info='number of deaths cases by COVID 19'
				lastUpdate={status.lastUpdate}
				count={status.deaths.value}
			/>
		</div>
	);
}

StatusCards.defaultProps = {
	status: {},
};

export default StatusCards;
