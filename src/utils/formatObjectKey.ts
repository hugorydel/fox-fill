const formatObjectKey = (text: string): string => {
	const textArray = text.match(/[A-Z][a-z]+/g) || [text];
	console.log(textArray);
	const filteredTextArray = textArray.filter(
		string => !(string === 'shopping' || string === 'billing')
	);
	const filteredTextString = filteredTextArray.join(' ');

	return filteredTextString.charAt(0).toUpperCase() + filteredTextString.slice(1);
};

export default formatObjectKey;
