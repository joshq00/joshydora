import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { GET_PLAYLIST } from '../constants/station-constants';
import { NEXT } from '../constants/song-constants';
import SongStore from './song-store';

let _id = null;

class CurrentSongStore extends FluxStore {
	/* songIdentity of current song */
	get id () {
		return _id;
	}

	/* current song */
	get song () {
		return SongStore.get( _id );
	}
}

const store = new CurrentSongStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	case GET_PLAYLIST:
		dispatcher.waitFor( [ SongStore.dispatchToken ] );
		first();
		break;
	case NEXT:
		next();
		break;
	}
} );

function getNextSong () {
	const { songs } = SongStore;
	const current = store.song;
	const indx = songs.indexOf( current );
	return songs[ indx + 1 ];
}

function useSong ( { songIdentity } ) {
	_id = songIdentity;
	store.emit();
}

function first () {
	useSong( SongStore.songs[ 0 ] );
}

function next () {
	const nextSong = getNextSong();
	if ( nextSong == null ) {
		_id = null;
		return;
	}
	useSong( nextSong );
}
