import React from 'react';
import { encode, decode } from '../utils/blowfish';
import { login as loginUser } from '../actions/user-action-creator';
function getStorage ( key ) {
	return decode( key, localStorage.getItem( key ) || '' );
}
function setStorage ( key, value ) {
	return localStorage.setItem( key, encode( key, value ) );
}
function getCredentials () {
	const username = getStorage( 'username' );
	const password = getStorage( 'password' );

	return {
		username,
		password,
	};
}
function login () {
	loginUser( getCredentials() );
}
export default class LoginForm extends React.Component {
	constructor ( ...args ) {
		super( ...args );
		this._submit = this._submit.bind( this );
		this._onchange = this._onchange.bind( this );
	}
	_onchange ( e ) {
		const el = e.target;
		setStorage( el.name, el.value );
	}

	_submit () {
		login();
	}

	render () {
		const { username, password } = getCredentials();

		return (
		<div>
			<div>
				<input
					defaultValue={ username }
					name='username'
					onChange={ this._onchange } />
			</div>
			<div>
				<input
					defaultValue={ password }
					name='password'
					onChange={ this._onchange }
					type='password' />
			</div>
			<div>
				<button onClick={ this._submit }>Go</button>
			</div>
		</div>
		);
	}
}
