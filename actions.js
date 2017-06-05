// action constants
//balance, deposit, withdraw, transferFunds (red)
const REGISTER_USER = 'REGISTER_USER',
	  LOGIN = 'LOGIN',
	  LOGOUT = 'LOGOUT',
	  BALANCE = 'BALANCE',
	  WITHDRAW = 'WITHDRAW',
	  TRANSFERFUNDS = 'TRANSFERFUNDS'

// create actions using functions
function actionRegisterUser(login, password, email) {
	return {
		type: REGISTER_USER,
		login, //login: login,
		password,
		email
	}
}
function actionLogin(login, password) {
	return { type: LOGIN, login, password }
}
function actionLogout() {
	return { type: LOGOUT }
}
function actionBallance(text) {
	return { type: BALANCE, text }
}
function actionWithdraw(text) {
	return { type: WITHDRAW, text }
}
function actionTransfer(text) {
	return { type: TRANSFERFUNDS, text }
}
