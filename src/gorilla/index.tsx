import '@bradmax/player/gorilla';

import { BRADMAX_PLAYER_VERSION } from '@bradmax/player/version';
import * as React from 'react';

export default class BradmaxPlayerGorilla extends React.Component<bradmax.player.Configuration> {
	theme = 'gorilla';
	container: HTMLDivElement | null = null;
	player: bradmax.player.Player | null = null;
	api: bradmax.player.PlayerJavascriptApi | null = null;

	componentDidMount() {
		if (this.container != null) {
			this.player = bradmax.player.create(this.container, this.props, `${this.theme}_${BRADMAX_PLAYER_VERSION}`);
			this.api = this.player.modules.JavascriptApi;
		}
	}

	componentWillUnmount() {
		if (this.player != null) {
			bradmax.player.destroy(this.player);
		}
	}

	render() {
		return (
			<div className="bradmax-player gorilla" ref={r => this.container = r} />
		);
	}

}
