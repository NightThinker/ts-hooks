import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/UI/Input/Input';

const App: React.FC = () => {
	const textInput = useRef<HTMLInputElement>(null);
	const text2Input = useRef<HTMLInputElement>(null);

	function handleClick() {
		console.log(textInput);
		if (textInput.current) {
			console.log(textInput.current.value);
			// textInput.current.focus();
		}

		if (text2Input.current) {
			console.log(text2Input);
			console.log(text2Input.current.value);
			text2Input.current.focus();
		}
	}

	return (
		<div>
			<input ref={textInput} type='text' placeholder='input' />
			<Input nameRef={text2Input} />
			<input type='button' value='Focus the text input' onClick={handleClick} />
		</div>
	);
};

export default App;
