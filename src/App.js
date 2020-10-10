import React, { PureComponent, Fragment } from 'react';
import Modal from './components/Modal/Modal';

class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			currentModal: 0,
			modalStack: []
		}
	}

	handleModal = (label) => {
		if (label === "open") {
			let obj = {
				index: this.state.currentModal + 1,
				isShowing: true,
			}
			let currentState = this.state.modalStack;
			currentState.push(obj);
			this.setState({
				modalStack: currentState,
				currentModal: this.state.currentModal + 1
			});
		}
		else {
			let obj = {
				index: this.state.currentModal - 1,
				isShowing: false,
			}
			let currentState = this.state.modalStack;
			currentState.pop(obj);
			this.setState({
				modalStack: currentState,
				currentModal: this.state.currentModal - 1
			});
		}
	}


	render() {
		const { modalStack, currentModal } = this.state;
		return (
			<Fragment>
				{currentModal > 0 ? <div onClick={() => this.handleModal("close")} className="back-drop"></div> : null}
				<button className="open-modal-btn" onClick={() => this.handleModal("open")}>Open Modal</button>

				{modalStack.map((item, idx) => {
					return (
						<Modal
							key={idx}
							stackIndex={idx}
							height={"50"}
							width={"50"}
							className="modal"
							show={item.isShowing}
							open={() => this.handleModal("open")}
							close={() => this.handleModal("close")}>
							Open Nested Modal or close?
							(Note: Min-width: 200px and Min-height: 200px)
				</Modal>
					)
				})}
			</Fragment>
		);
	}
}

export default App;
