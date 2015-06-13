import React from 'react';
import App from './components/app';

const main = document.querySelector( 'main' );
React.render( <App />, main );

/* stores */
import PartnerStore from './stores/partner-store';
import PartnerAuthStore from './stores/partner-auth-store';
import StationStore from './stores/station-store';
import CurrentStationStore from './stores/current-station-store';
import SongStore from './stores/song-store';
import CurrentSongStore from './stores/current-song-store';

global.PartnerStore = PartnerStore;
global.PartnerAuthStore = PartnerAuthStore;
global.StationStore = StationStore;
global.CurrentStationStore = CurrentStationStore;
global.SongStore = SongStore;
global.CurrentSongStore = CurrentSongStore;
