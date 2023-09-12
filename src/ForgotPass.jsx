import React from 'react';
import cocodrilo from './cocodrilo.png';

export default function ForgotPass() {
	return (
		<section className="formulario">
			<span>
				<img src={cocodrilo} alt="Cocodrilo" />
				<h2>Forgot password</h2>
			</span>

			<div>
				<span className="mail">
					<input id="mailL" type="text" required />
					<label htmlFor="mailL">mail</label>
				</span>
			</div>
			<span>
				<button>Send</button>
				<a href="">Login</a>
			</span>
		</section>
	);
}
