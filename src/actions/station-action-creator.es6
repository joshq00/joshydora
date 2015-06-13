import Dispatcher from '../dispatcher';
import pandora from '../utils/pandora';
import PartnerAuthStore from '../stores/partner-auth-store';
import UserAuthStore from '../stores/user-auth-store';
import { GET_PLAYLIST } from '../constants/station-constants';

// TODO: use a store
function getToken () {
	return UserAuthStore.token;
}
export function getPlaylist ( { stationToken } ) {
	const rqst = getPlaylistRequest( stationToken );
	pandora
		.send( rqst )
		.then( response => {
			Dispatcher.dispatch( {
				type: GET_PLAYLIST,
				data: response,
			} );
		}, console.error );
}

function getPlaylistRequest ( stationToken ) {
	const { id } = PartnerAuthStore;
	return {
		method: GET_PLAYLIST,
		partnerId: id,
		token: getToken(),
		userId: UserAuthStore.id,
		data: getPlaylistData( stationToken ),
	};
}
function getPlaylistData ( stationToken ) {
	const { syncTime, token } = PartnerAuthStore;
	return {
		stationToken,
		userAuthToken: getToken(),
		// additionalAudioUrl: 'HTTP_128_MP3,HTTP_64_AACPLUS_ADTS,HTTP_64_AACPLUS,HTTP_64_AAC',
		additionalAudioUrl: 'HTTP_128_MP3',
		syncTime,
		partnerAuthToken: token,

		loginType: 'user',
		returnStationList: true,
	};
}

