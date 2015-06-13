import Dispatcher from '../dispatcher';
import pandora from '../utils/pandora';
import PartnerAuthStore from '../stores/partner-auth-store';
import UserAuthStore from '../stores/user-auth-store';
import { LOGIN } from '../constants/user-constants';

export function login ( { username, password } ) {
	const rqst = getLoginRequest( username, password );
	pandora
		.send( rqst )
		.then( response => {
			Dispatcher.dispatch( {
				type: LOGIN,
				data: response,
			} );
		}, console.error );
}

// TODO: use a store
function getToken () {
	return UserAuthStore.token || PartnerAuthStore.token;
}
function getLoginRequest ( username, password ) {
	const { id } = PartnerAuthStore;
	return {
		method: LOGIN,
		partnerId: id,
		token: getToken(),
		data: getLoginData( username, password ),
	};
}
function getLoginData ( username, password ) {
	const { syncTime, token } = PartnerAuthStore;
	return {
		username,
		password,

		syncTime,
		partnerAuthToken: token,

		loginType: 'user',
		returnStationList: true,
	};
}

