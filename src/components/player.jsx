import React from 'react';
import { next, skip, like, dislike } from '../actions/song-action-creator';
import SongPropType from './song-prop-type';

export default class Player extends React.Component {
	constructor ( ...args ) {
		super( ...args );
		this._ended = this._ended.bind( this );
	}

	componentDidMount () {
		React.findDOMNode( this.refs.audio ).addEventListener( 'ended', this._ended );
	}
	componentWillUnmount () {
		React.findDOMNode( this.refs.audio ).removeEventListener( 'ended', this._ended );
	}

	_ended () {
		next();
	}

	render () {
		const {
			songName,
			artistName,
			additionalAudioUrl: url
		} = this.props.song;

		return (
		<div>
			<audio autoPlay controls preload='auto' ref='audio' src={ url } />
			<div>
				<a href={ url }>{ artistName } - { songName }</a>
			</div>
		</div>
		);
	}
}

Player.propTypes = {
	song: SongPropType,
};
