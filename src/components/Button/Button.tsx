import { FC } from 'react';
import { IButton } from './interface';
import './style.scss';

export const Button: FC<IButton> = ({ children, click, disabled }) => {
	return (
		<button className='button' onClick={click} disabled={disabled}>
			{children}
		</button>
	);
};
