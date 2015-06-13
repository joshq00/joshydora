import FluxStore from 'flux-store';
import dispatcher from '../dispatcher';
import { LOGIN } from '../constants/user-constants';

let _userAuthToken = null;
let _userId = null;

class UserAuthStore extends FluxStore {
	get token () {
		return _userAuthToken;
	}
	get id () {
		return _userId;
	}
}
const store = new UserAuthStore();
export default store;

dispatcher.register( ( { type, data } ) => {
	switch ( type ) {
		case LOGIN:
			userLogin( data );
			break;
	}
} );

function userLogin ( response ) {
	_userAuthToken = response.userAuthToken;
	_userId = response.userId;
}
