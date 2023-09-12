import './App.css';
import './formulario.css';
import Login from './Login';
import Singup from './Singup';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';

function App() {
	return (
		<div className="App">
			<Login />
			<Singup />
			<ForgotPass />
			<ResetPass />
		</div>
	);
}

export default App;
