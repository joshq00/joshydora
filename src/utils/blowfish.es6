import Blowfish from 'blowfish';
const bfmap = new Map();
function get ( key ) {
	if ( !bfmap.has( key ) ) {
		bfmap.set( key, new Blowfish( key ) );
	}
	return bfmap.get( key );
}
// HTTP POST body are encrypted using Blowfish ECB and converted to hexadecimal notation with lowercase letters.
export function encode ( key, data ) {
	const bf = get( key );
	return bf.encrypt( data );
}
export function decode ( key, data ) {
	const bf = get( key );
	return bf.decrypt( data ).replace( /\0+$/g, '' );
}
// var plaintext = bf.decrypt( 'some encrypted text' );

export function encodeBody ( key, data ) {
	let encoded = encode( key, data );
	return encoded;
}
