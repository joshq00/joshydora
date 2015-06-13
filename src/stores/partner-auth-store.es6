import PartnerStore from './partner-store';
import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { decode } from '../utils/crypt';
import stringToBytes from '../utils/stringToBytes';
import { LOGIN } from '../constants/partner-constants';

let _partnerAuth = null;
let _rqstTime = null;
let _syncTime = null;

function getPartner () {
	return PartnerStore.partner;
}
class PartnerAuthStore extends FluxStore {
	decrypt ( value ) {
		return decode( this.decryptKey, value );
	}

	get token () {
		return _partnerAuth && _partnerAuth.partnerAuthToken;
	}

	get id () {
		return _partnerAuth && _partnerAuth.partnerId;
	}

	get decryptKey () {
		if ( getPartner() == null ) {
			return null;
		}
		const { decryptKey } = getPartner();
		return decryptKey;
	}
	get encryptKey () {
		if ( getPartner() == null ) {
			return null;
		}
		const { encryptKey } = getPartner();
		return encryptKey;
	}

	get syncTime () {
		// current time +
		// time of Partner login request -
		// syncTime from Partner login response
		// return _tsDiff + getNow();
		return getNow() + _rqstTime - _syncTime;
	}
}
const store = new PartnerAuthStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	case LOGIN:
		partnerLogin( data );
		break;
	}
} );

function getNow () {
	return Date.now() / 1000 >> 0;
}

function partnerLogin ( data ) {
	const { response, requestTime } = data;
	const { syncTime } = response;
	// _tsDiff = getNow() - decodeTime( syncTime );

	_partnerAuth = response;
	_rqstTime = requestTime / 1000 >> 0;
	_syncTime = decodeTime( syncTime );
	store.emit();
}
function decodeTime ( encoded ) {
	let decoded = store.decrypt( encoded );
	let bytes = stringToBytes( decoded );
	let tm = +(
		bytes
			.slice( 4 )
			.map( String.fromCharCode )
			.join( '' )
			.replace( /\D+/g, '' )
	);
	return tm;
}
