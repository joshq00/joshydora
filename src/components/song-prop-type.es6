import React from 'react';

export const AudioUrl = React.PropTypes.shape( {
	bitrate: React.PropTypes.string,
	encoding: React.PropTypes.string,
	audioUrl: React.PropTypes.string,
	protocol: React.PropTypes.string,
} );

export default React.PropTypes.shape( {
	songName: React.PropTypes.string,
	songDetailUrl: React.PropTypes.string,
	songIdentity: React.PropTypes.string,
	trackToken: React.PropTypes.string,
	songExplorerUrl: React.PropTypes.string,

	artistName: React.PropTypes.string,
	artistDetailUrl: React.PropTypes.string,
	artistExplorerUrl: React.PropTypes.string,

	albumArtUrl: React.PropTypes.string,
	albumDetailUrl: React.PropTypes.string,
	albumExplorerUrl: React.PropTypes.string,
	albumIdentity: React.PropTypes.string,
	albumName: React.PropTypes.string,
	amazonAlbumUrl: React.PropTypes.string,

	isFeatured: React.PropTypes.bool,

	additionalAudioUrl: React.PropTypes.string,
	audioUrlMap: React.PropTypes.shape( {
		highQuality: AudioUrl,
		mediumQuality: AudioUrl,
		lowQuality: AudioUrl,
	} ),

	itunesSongUrl: React.PropTypes.string,
	shareLandingUrl: React.PropTypes.string,
	trackType: React.PropTypes.string,
	stationId: React.PropTypes.string,
	songRating: React.PropTypes.number,
	trackGain: React.PropTypes.string,
	allowFeedback: React.PropTypes.bool,
	categoryDescriptor: React.PropTypes.string,
	nowPlayingStationAdUrl: React.PropTypes.string,
	programDescriptor: React.PropTypes.string,
} );

