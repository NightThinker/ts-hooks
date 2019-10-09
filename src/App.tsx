import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
	const textInput = useRef<HTMLInputElement>(null);

	function handleClick() {
		console.log(textInput);
		if (textInput.current) {
			console.log(textInput.current.value);
			textInput.current.focus();
		}
	}

	return (
		<div>
			<input ref={textInput} type='text' />

			<input type='button' value='Focus the text input' onClick={handleClick} />
		</div>
	);
};

export default App;
