import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { LOGIN } from '../constants/user-constants';

let _stations = [];

class StationStore extends FluxStore {
	get ( id ) {
		let matches = _stations.filter( station => station.stationId === id );
		if ( matches.length ) {
			return matches[ 0 ];
		}
		return null;
	}
	get stations () {
		return [ ..._stations ];
	}
}
const store = new StationStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	// user logged in
	case LOGIN:
		handleStations( data );
		break;
	}
} );
function setStations ( stations ) {
	_stations = stations;
	store.emit();
}
function handleStations ( response ) {
	let { stationListResult: { stations } } = response;
	setStations( stations );
}
