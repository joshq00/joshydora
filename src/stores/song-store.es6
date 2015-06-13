import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { GET_PLAYLIST } from '../constants/station-constants';

let _songs = [];
let _nextIndx = 0;

class SongStore extends FluxStore {
	get all () {
		return [ ..._songs ];
	}
	get next () {
		return _songs[ _nextIndx++ ];
	}
}
const store = new SongStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	// playlist received
	case GET_PLAYLIST:
		handlePlaylist( data );
		break;
	}
} );

function handlePlaylist ( response ) {
	_nextIndx = 0;
	_songs = response.items.filter(
		song => ( song.songIdentity != null )
	);
	store.emit();
}
