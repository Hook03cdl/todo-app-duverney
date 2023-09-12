import React from 'react';
import cocodrilo from './cocodrilo.png';

export default function ResetPass() {
	return (
		<section className="formulario">
			<span>
				<img src={cocodrilo} alt="Cocodrilo" />
				<h2>Reset password</h2>
			</span>

			<div>
				<span className="pass">
					<input id="passR" type="text" required />
					<label htmlFor="passR">pass</label>
				</span>
				<span className="pass">
					<input id="newPass" type="text" required />
					<label htmlFor="newPass">New Pass</label>
				</span>
				<span className="pass">
					<input id="confirmPass" type="text" required />
					<label htmlFor="confirmPass">Confirm pass</label>
				</span>
			</div>
			<span>
				<button>Reset</button>
			</span>
		</section>
	);
}
