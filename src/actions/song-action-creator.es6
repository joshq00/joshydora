import Dispatcher from '../dispatcher';
import CurrentSongStore from '../stores/current-song-store';
import { getPlaylist } from './station-action-creator';
import { NEXT } from '../constants/song-constants';

function dispatch ( type, data ) {
	Dispatcher.dispatch( { type, data } );
}
export function next () {
	dispatch( NEXT );

	if ( CurrentSongStore.song == null ) {
		getPlaylist();
	}
}
export function skip () {
	next();
}
export function like ( song ) {
}
export function dislike ( song ) {
	next();
}
