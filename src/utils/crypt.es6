import Blowfish from 'blowfish';

// HTTP POST body are encrypted using
// Blowfish ECB and converted to hexadecimal
// notation with lowercase letters.
export function encodeBody ( key, data ) {
	let encoded = encode( key, data ).toLowerCase();
	return encoded;
}

export function encodeToken ( token ) {
	return encodeURIComponent( token );
}

export function encode ( key, data ) {
	const bf = new Blowfish( key );
	return bf.encrypt( data );
}
export function decode ( key, data ) {
	const bf = new Blowfish( key );
	return bf.decrypt( data );
}
export function toHex ( str ) {
	let encrypted = [];
	let i = str.length;
	while ( i-- ) {
		let h = '00' + str.charCodeAt( i ).toString( 16 );
		h = h.substr( -2 );
		encrypted.unshift( h );
	}
	return encrypted.join( '' );
}
