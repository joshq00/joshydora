import React from 'react';
import Station from './station';

export default class StationList extends React.Component {
	render () {
		const { stations } = this.props;

		return (
		<div>
			{ stations.map( station =>
				<Station key={ station.stationId } station={ station } />
			) }
		</div>
		);
	}
}

StationList.propTypes = {
	stations: React.PropTypes.array.isRequired,
};
