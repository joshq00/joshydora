import React from 'react';

/* components */
import LoginForm from './login-form';
import StationList from './station-list';
import Player from './player';

/* stores */
import UserAuthStore from '../stores/user-auth-store';
import StationStore from '../stores/station-store';
import CurrentSongStore from '../stores/current-song-store';

export default class App extends React.Component {
	componentDidMount () {
		StationStore.on( () => this.forceUpdate() );
		CurrentSongStore.on( () => this.forceUpdate() );
	}

	render () {
		if ( UserAuthStore.token == null ) {
			return <LoginForm />;
		}
		const currentSong = CurrentSongStore.song;
		return (
		<div>
			{ currentSong ? <Player song={ currentSong } /> : 'Choose a station' }
			<StationList stations={ StationStore.stations } />
		</div>
		);
	}
}
