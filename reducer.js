//balance, deposit, withdraw, transferFunds (red)
import {REGISTER_USER, actionRegisterUser,
	LOGIN,actionLogin,LOGOUT,actionLogout,
	BALANCE,actionBallance,DEPOSIT,actionDeposit,
WITHDRAW,actionWithdraw,TRANSFERFUNDS,actionTransfer} from './reducer.js';

let initialState = {
	login: null,
	userView: 'register-page',  // register, login, main, search
	//deposit: null,
	balance: 0
	//withdraw: '',
  //transferFunds:''
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
		  let newstate = Object.assign({}, state);
		  newstate.login = action.login;
		  return newstate;
		case LOGOUT:
		  let newstate = Object.assign({},state);
			newstate.login = null;
			return newstate;
		case DEPOSIT:
		  let newstate = Object.assign({},state);
			newstate.balance = action.deposit;
		case BALANCE:
			  let newstate = Object.assign({},state);
				newstate.balance = action.balance;
		case WITHDRAW:
				let newstate = Object.assign({},state);
				newstate.balance = action.withdraw;
		case TRANSFERFUNDS:
				let newstate = Object.assign({},state);
				newstate.balance = action.transfer;
			}
	}
export defalut rootReducer;
