"use client"

export const TextButton = ({ text }: {
	text: string;
}) => {
	const func = () => {
		window.history.back();
	};

	return <button
		className="textButton"
		onClick={func}>{text}</button>
};