import React from 'react';
import cocodrilo from './cocodrilo.png';

export default function Singup() {
	return (
		<section className="formulario">
			<span>
				<img src={cocodrilo} alt="Cocodrilo" />
				<h2>Sing Up</h2>
			</span>

			<div>
				<span className="name">
					<input id="name" type="text" required />
					<label htmlFor="name">name</label>
				</span>
				<span className="mail">
					<input id="mailS" type="text" required />
					<label htmlFor="mailS">mail</label>
				</span>
				<span className="pass">
					<input id="passS" type="text" required />
					<label htmlFor="passS">pass</label>
				</span>
			</div>
			<span>
				<button>Sing up</button>
				<a href="">Login</a>
			</span>
		</section>
	);
}
