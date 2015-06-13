import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { CHOOSE } from '../constants/partner-constants';

let _partner = null;

class PartnerStore extends FluxStore {
	get partner () {
		return _partner;
	}
}
const store = new PartnerStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
		// chose a partner
		case CHOOSE:
			chosePartner( data );
			break;
	}
} );

function chosePartner ( partner ) {
	_partner = partner;
	store.emit();
}
