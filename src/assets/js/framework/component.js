class Component {
	constructor(props) {
		this.props = props || {};
		this.state = {};
		this.host = null;
	}

	updateState(nextState) {
		this.state = Object.assign({}, this.state, nextState);
		return this._render();
	}

	update(nextProps) {
		this.props = nextProps;
		return this._render();
	}
	unmount() {
		this.onBeforeUnmount();
	}
	onBeforeUnmount() {}
	onBeforeUpdate(nextProps) {}
	get name() {
		return this.constructor.name;
	}

	_render() {
		const children = this.render();

		this.host.innerHTML = '';
		if (typeof children === 'string') {
			this.host.innerHTML = children;
		} else if (Array.isArray(children)) {
			this.host.append(...children);
		} else {
			this.host.append(children);
		}

		return this.host;
	}

	render() {}
}

export default Component;
