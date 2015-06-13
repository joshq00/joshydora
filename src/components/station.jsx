import React from 'react';
import { choose } from '../actions/station-action-creator';
import StationPropType from './station-prop-type';

export default class Station extends React.Component {
	constructor ( ...args ) {
		super( ...args );
		this._listen = this._listen.bind( this );
	}

	_listen () {
		choose( this.props.station );
	}

	render () {
		const {
			stationName,
		} = this.props.station;

		return (
		<div>
			<button onClick={ this._listen }>{ stationName }</button>
		</div>
		);
	}
}

Station.propTypes = {
	station: StationPropType.isRequired,
};
