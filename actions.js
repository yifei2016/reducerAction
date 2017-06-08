// action constants
//balance, deposit, withdraw, transferFunds (red)
const REGISTER_USER = 'REGISTER_USER',
	  LOGIN = 'LOGIN',
	  LOGOUT = 'LOGOUT',
		DEPOSIT = 'DEPOSIT',
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
function actionBallance(balance) {
	return { type: BALANCE, balance }
}
function actionDeposit(deposit) {
	return { type: DEPOSIT, deposit }
}
function actionWithdraw(withdraw) {
	return { type: WITHDRAW, withdraw }
}
function actionTransfer(transfer) {
	return { type: TRANSFERFUNDS, transfer }
}

export { REGISTER_USER, actionRegisterUser,LOGIN,actionLogin,LOGOUT,actionLogout,BALANCE,actionBallance,DEPOSIT,actionDeposit,WITHDRAW,actionWithdraw,TRANSFERFUNDS,actionTransfer};
