import React from 'react';
import { getPlaylist } from '../actions/station-action-creator';

export default class Station extends React.Component {
	constructor ( ...args ) {
		super( ...args );
		this._listen = this._listen.bind( this );
	}
	_listen () {
		getPlaylist( this.props );
	}
	render () {
		const {
			stationName,
			stationToken,
			// genre,
		} = this.props;

		return (
		<div>
			<button onClick={ this._listen }>Listen</button>
			{ stationName } ({ stationToken })
		</div>
		);
	}
}

Station.propTypes = {
	stationId: React.PropTypes.string.isRequired,
	stationToken: React.PropTypes.string.isRequired,
	stationDetailUrl: React.PropTypes.string,
	stationName: React.PropTypes.string.isRequired,
	genre: React.PropTypes.arrayOf( React.PropTypes.string ),
	isQuickMix: React.PropTypes.bool.isRequired,
};

/*
{
	"suppressVideoAds": false,
	"stationId": "2678254795917231707",
	"topStationsScore": "0",
	"allowAddMusic": true,
	"dateCreated": {
		"date": 1,
		"day": 1,
		"hours": 19,
		"minutes": 34,
		"month": 5,
		"nanos": 699000000,
		"seconds": 56,
		"time": 1433212496699,
		"timezoneOffset": 420,
		"year": 115
	},
	"stationDetailUrl": "https://www.pandora.com/login?target=%2Fstations%2F9c570468d846e1cfe66d05469b9b4496ddbc949e1d014eab",
	"topStationsSortIndex": 20,
	"requiresCleanAds": false,
	"stationToken": "2678254795917231707",
	"stationName": "Mase Radio",
	"recentStationsScore": "1434152490708",
	"isShared": false,
	"allowDelete": true,
	"recentStationsSortIndex": 0,
	"genre": [
		"Rap / Hip-Hop"
	],
	"isQuickMix": false,
	"allowRename": true,
	"stationSharingUrl": "https://www.pandora.com/login?target=%2Fshare%2Fstation%2F9c570468d846e1cfe66d05469b9b4496ddbc949e1d014eab"
}
*/
