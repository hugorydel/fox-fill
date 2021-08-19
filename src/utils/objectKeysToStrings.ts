const objectKeysToStrings = (object: object) =>
	Object.keys(object).reduce((acc: any, key: any) => {
		acc[key] = '';
		return acc;
	}, {});

export default objectKeysToStrings;
