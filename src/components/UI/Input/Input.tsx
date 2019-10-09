import React from 'react';
// import { Input } from 'antd';
import Input from 'antd/es/input';

type Props = {
	nameRef: any;
};

const InputUI: React.FC<Props> = props => {
	const { nameRef } = props;
	return (
		<div>
			{/* <Input ref={nameRef} type='text' size='large' /> */}
			<input ref={nameRef} type='text' />;
		</div>
	);
};

export default InputUI;
