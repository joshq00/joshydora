import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { GET_PLAYLIST } from '../constants/station-constants';

let _songs = [];

class SongStore extends FluxStore {
	get ( songIdentity ) {
		const matches = _songs.filter( song =>
			song.songIdentity === songIdentity
		);
		return matches[ 0 ];
	}

	get songs () {
		return [ ..._songs ];
	}
}
const store = new SongStore();
export default store;

store.dispatchToken = dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	// playlist received
	case GET_PLAYLIST:
		handlePlaylist( data );
		break;
	}
} );

function handlePlaylist ( response ) {
	_songs = response.items.filter(
		song => ( song.songIdentity != null )
	);
	store.emit();
}
