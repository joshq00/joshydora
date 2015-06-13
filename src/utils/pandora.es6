import req from 'request-promise';
import { encodeBody, encodeToken } from './crypt';

export default {
	send,
};

export function send ( {
	secure = true,
	encrypted = true,
	method,
	data,
	token,
	partnerId,
	userId,
} ) {
	const scheme = secure ? 'https' : 'http';
	const uri = `${ scheme }://tuner.pandora.com/services/json/`;
	let params = [
		`method=${ method }`,
	];

	if ( token ) {
		params.push( `auth_token=${ encodeToken( token ) }` );
	}
	if ( partnerId ) {
		params.push( `partner_id=${ partnerId }` );
	}
	if ( userId ) {
		params.push( `user_id=${ userId }` );
	}

	// console.log( 'data', data );
	if ( typeof data === 'object' ) {
		data = JSON.stringify( data );
	}
	if ( encrypted ) {
		data = encodeBody( '6#26FRL$ZWD', data );
	}

	console.log( 'sending', data, `to ${ uri }?${ params.join( '&' ) }` );
	return req.post( {
		uri: `${ uri }?${ params.join( '&' ) }`,
		body: data,
	} ).then( JSON.parse ).then( response => {
		if ( response.stat !== 'ok' ) {
			throw response;
		}
		return response.result;
	} );

}
