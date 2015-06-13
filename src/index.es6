import React from 'react';

/* stores */
import PartnerStore from './stores/partner-store';
import PartnerAuthStore from './stores/partner-auth-store';
import StationStore from './stores/station-store';
import CurrentStationStore from './stores/current-station-store';
import SongStore from './stores/song-store';
import CurrentSongStore from './stores/current-song-store';

/* components */
import LoginForm from './components/login-form';
import StationList from './components/station-list';
import Player from './components/player';

const main = document.querySelector( 'main' );
const player = document.querySelector( '#player' );

React.render( <LoginForm />, main );

StationStore.on( () => {
	React.render( <StationList stations={ StationStore.stations } />, main );
} );

CurrentSongStore.on( () => {
	React.render( <Player song={ CurrentSongStore.song } />, player );
} );

global.PartnerStore = PartnerStore;
global.PartnerAuthStore = PartnerAuthStore;
global.StationStore = StationStore;
global.CurrentStationStore = CurrentStationStore;
global.SongStore = SongStore;
global.CurrentSongStore = CurrentSongStore;
