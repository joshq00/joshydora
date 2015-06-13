// import React from 'react/dist/react.min';
// import App from './components/app';

// export function render () {
// 	return React.renderToString( <App /> );
// 	return 'React.renderToString( <App /> )';
// }
import React from 'react';


// import Blowfish from 'blowfish';
// import fs from 'fs';
// import path from 'path';
// const blowfish = new Blowfish( process.env.CRYPT_KEY );
// function getCredentials () {
// 	const encoded = fs.readFileSync( path.join( __dirname, '../credentials.txt' ), {
// 		encoding: 'utf8',
// 	} );
// 	const decoded = blowfish.decrypt( encoded ).replace( /\0+/g, '' );
// 	return JSON.parse( decoded );
// }


import {
	use as usePartner,
	login as loginPartner
} from './actions/partner-action-creator';
// import { login as loginUser } from './actions/user-action-creator';
// import { getPlaylist } from './actions/station-action-creator';
import partner from './constants/partner';
import PartnerStore from './stores/partner-store';
import PartnerAuthStore from './stores/partner-auth-store';
// import UserAuthStore from './stores/user-auth-store';
import StationStore from './stores/station-store';
import SongStore from './stores/song-store';

global.PartnerStore = PartnerStore;
global.PartnerAuthStore = PartnerAuthStore;
global.StationStore = StationStore;
global.SongStore = SongStore;


PartnerStore.on( () => {
	// when a partner is chosen
	// login that partner
	loginPartner();
} );

const main = document.querySelector( 'main' );
import LoginForm from './components/login-form';
PartnerAuthStore.on( () => {
	React.render( <LoginForm />, main );
} );

// PartnerAuthStore.on( () => {
// 	// partner logged in
// 	// login the user
// 	loginUser( getCredentials() );
// } );

import StationList from './components/station-list';
StationStore.on( () => {
	React.render( <StationList stations={ StationStore.stations } />, main );
	// stations changed
	// get the playlist
	// getPlaylist( StationStore.stations[ 0 ] );
} );
SongStore.on( () => {
	document.querySelector( 'audio source' ).src = SongStore.next.additionalAudioUrl;
} );
// 	// we've got songs
// 	const intvl = setInterval( outputNextSong, 2500 );
// 	function outputNextSong () {
// 		const song = SongStore.next;
// 		if ( song == null ) {
// 			clearInterval( intvl );
// 			return;
// 		}
// 		console.log( JSON.stringify( song, 0, 2 ) );
// 	}
// } );

usePartner( partner );
