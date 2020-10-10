### The idea is to build a Modal Component which should have:
- Configurable height and width
- The close button within the frame to close the modal
- Modal must have open and close functionality accessible from any component in a React component tree
- Multiple modals can be opened (Stacked Modal) and are closed LIFO (last in first out)
- Close functionality closes the latest modal in the stack

### Features:
- Configurable height and width
- Default min-height and min-width for modal (corner case)
- Backdrop close functionality
- The close button within the frame to close the modal
- Modal must have open and close functionality accessible from any component in a React component tree
- Multiple modals can be opened (Stacked Modal) and are closed LIFO (last in first out)
- Close functionality closes the latest modal in the stack
- Rsponsive Design

### Steps to run in local
1. Clone or Download the zip file of this repo.
2. Unzip and open folder in VSCode (recommended).
3. Open terminal and run `npm install`.
4. Run `npm start` to run the project locally at port `3000`.
5. Application will open in your default browser listening: http://localhost:3000

### Folder structure
- `index.js`
- `App.js`
  - `src`
    - `components`
      - `Modal`
        - `Modal.js`
        - `Modal.css`


### Approach - 1 (props driven)  [Implemented]
- Entry point `index.js` where wrapped my `App` to render.
- `App.js` file will work as a `container` here.
- `App.js` has a `Modal` component which resides in `src/component/Modal/Modal.js` 
- `Modal` is a functional component which accepts `props` and behaves accordingly.
- configurable `props.height` and `props.width`
- resuable `Modal` component

### Approach - 2 (Drive via react-redux)
1. Reusable — make a default Modal component!
2. Scalable — create a ModalRoot container
  - We have `constants` imported in for all the different modal types because this `Modal` Container is connected to the `store` and will be receiving a prop as `props.modalType` (via `mapStateToProps`) to figure out which modal to render.
  - The `MODAL_COMPONENTS` object maps each modal component to their respective `modalType` (from the redux store)
  - Lastly, the `ModalContainer` will receive props and checks if the store has a specific `modalType` in mind to be rendered; if no modalType is set in the store, nothing is rendered from the container. However, if there is a modalType set on the store, then the ModalContainer will check the `MODAL_COMPONENTS` object, grab the corresponding modal and render that out.
  - This way, you have a predictable location (container) from which all your different modals will be rendered!
3. Redux-ified — connect it to the store as a child of the App component
4. All the `routes` are connected to the redux store via the `Provider`
              <!-- ReactDOM.render(
                <Provider store={store}>
                  <Root />
                </Provider>,
                document.getElementById('app')
              );  -->
5.  `Customizable` — pass in `custom` styles to the default `Modal` component to overwrite the default `CSS`
