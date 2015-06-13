import pandora from '../utils/pandora';
import PartnerStore from '../stores/partner-store';
import Dispatcher from '../dispatcher';
import { CHOOSE, LOGIN } from '../constants/partner-constants';

export function use ( partner ) {
	Dispatcher.dispatch( {
		type: CHOOSE,
		data: partner,
	} );
}

export function login ( partner ) {
	use( partner );

	const requestTime = +new Date();
	const rqst = {
		data: PartnerStore.partner,
		encrypted: false,
		method: LOGIN,
	};
	pandora
		.send( rqst )
		.then( response =>
			Dispatcher.dispatch( {
				type: LOGIN,
				data: {
					requestTime,
					response,
				},
			} )
		, console.error )
		;
}
