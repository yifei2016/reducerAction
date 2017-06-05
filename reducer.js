//balance, deposit, withdraw, transferFunds (red)
let initialState = {
	login: null,
	userView: 'register-page',  // register, login, main, search
	balance: null,
	withdraw: '',
  transferFunds:''
}
// const store = createStore(rootReducer);
// store.dispatch( actionRegisterUser(1, 2, 3) )
// reducer,returns the next state
function rootReducer(state = initialState, action) {
	switch( action.type ) {
		case REGISTER_USER:
			let newstate = Object.assign({}, state);
			newstate.login = action.login;
			return newstate;
		case LOGIN:
			// TODO
	}
}
