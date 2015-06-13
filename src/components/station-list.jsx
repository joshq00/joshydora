import React from 'react';
import Station from './station';

export default class StationList extends React.Component {
	render () {
		const { stations } = this.props;

		return (
		<div>
			{ stations.map( ( station, i ) =>
				<Station key={ i } { ...station } />
			) }
		</div>
		);
	}
}

StationList.propTypes = {
	stations: React.PropTypes.array.isRequired,
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
