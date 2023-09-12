import React from 'react';
import cocodrilo from './cocodrilo.png';

export default function Login() {
	return (
		<section className="formulario">
			<span>
				<img src={cocodrilo} alt="Cocodrilo" />
				<h2>Login</h2>
			</span>

			<div>
				<span className="mail">
					<input id="mailL" type="text" required />
					<label htmlFor="mailL">mail</label>
				</span>
				<span className="pass">
					<input id="passL" type="text" required />
					<label htmlFor="passL">pass</label>
				</span>
			</div>
			<span>
				<button>Login</button>
				<a href="">Forgot Pass</a>
			</span>
		</section>
	);
}
