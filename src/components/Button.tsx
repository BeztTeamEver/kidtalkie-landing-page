import React from 'react';

interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<any>, HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className="rounded bg-blue-500 text-white">
			{children}
		</button>
	);
};

export default Button;
