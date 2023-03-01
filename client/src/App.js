import { Axios } from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');

	const submitComment = () => {
		Axios.post('http://localhost:3001/', {
			name: name,
			email: email,
			comment: comment,
		}).then(() => {
			alert('Comment Submitted!');
		});
	};
	return (
		<div className="App">
			<h1>CRUD APP</h1>
			<section id="comment">
				<h2>Get in Touch</h2>
				<form>
					<input
						type="name"
						id="name"
						name="name"
						required
						placeholder="Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<br />
					<br />
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<br />
					<br />
					<textarea
						id="message"
						name="message"
						required
						placeholder="Message"
						onChange={(e) => {
							setComment(e.target.value);
						}}
					></textarea>
					<br />
					<br />
					<input
						type="submit"
						value="Leave a comment"
						style={{ backgroundColor: '#537fe7', color: '#fff' }}
						onClick={submitComment}
					/>
				</form>
			</section>
		</div>
	);
}

export default App;
