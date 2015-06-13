import React from 'react';
export default React.PropTypes.shape( {
	stationId: React.PropTypes.string.isRequired,
	stationToken: React.PropTypes.string.isRequired,
	stationName: React.PropTypes.string.isRequired,

	isQuickMix: React.PropTypes.bool.isRequired,
	genre: React.PropTypes.arrayOf( React.PropTypes.string ),

	suppressVideoAds: React.PropTypes.bool,
	topStationsScore: React.PropTypes.string,
	allowAddMusic: React.PropTypes.bool,
	dateCreated: {
		date: React.PropTypes.number,
		day: React.PropTypes.number,
		hours: React.PropTypes.number,
		minutes: React.PropTypes.number,
		month: React.PropTypes.number,
		nanos: React.PropTypes.number,
		seconds: React.PropTypes.number,
		time: React.PropTypes.number,
		timezoneOffset: React.PropTypes.number,
		year: React.PropTypes.number,
	},
	stationDetailUrl: React.PropTypes.string,
	topStationsSortIndex: React.PropTypes.number,
	requiresCleanAds: React.PropTypes.bool,
	recentStationsScore: React.PropTypes.string,
	isShared: React.PropTypes.bool,
	allowDelete: React.PropTypes.bool,
	recentStationsSortIndex: React.PropTypes.number,
	allowRename: React.PropTypes.bool,
	stationSharingUrl: React.PropTypes.string,
} );
