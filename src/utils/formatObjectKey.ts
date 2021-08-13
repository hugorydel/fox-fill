const formatObjectKey = (text: string): string =>
	text.charAt(0).toUpperCase() + text.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');

export default formatObjectKey;
