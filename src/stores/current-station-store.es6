import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import StationStore from './station-store';
import { CHOOSE } from '../constants/station-constants';

let _stationId = null;

class CurrentStationStore extends FluxStore {
	get id () {
		return _stationId;
	}

	get station () {
		return StationStore.get( _stationId );
	}
}

const store = new CurrentStationStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
	case CHOOSE:
		handleSelection( data );
		break;
	}
} );

function handleSelection ( stationId ) {
	_stationId = stationId;
	store.emit();
}
