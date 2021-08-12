const editByPropertyChain = (object, stringifiedProperties, newValue) => {
	let objectReference = object; // a moving reference to internal objects within obj
	const propertyList = stringifiedProperties.split('.');
	const length = propertyList.length;
	for (let i = 0; i < length - 1; i++) {
		let elem = propertyList[i];
		if (!objectReference[elem]) objectReference[elem] = {};
		objectReference = objectReference[elem];
	}

	console.log(objectReference);
	objectReference[propertyList[length - 1]] = newValue; //edits the value of the
	console.log(objectReference);
	console.log(object);
};

export default editByPropertyChain;
