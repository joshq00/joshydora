import partners from './partners.json';
const android = partners[ 'tuner.pandora.com' ][ 0 ];

const partner = Object.assign( {}, android, {
	version: '5',
	includeUrls: true,
} );

export default partner;
