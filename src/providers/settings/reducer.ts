import { ActionProps, ContextProps } from './types';

const reducer = (state: ContextProps, action: ActionProps) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_DATA':
			const { parentKey, childKey, newValue } = payload;
			const newData = {
				...state.data,
				[parentKey]: { ...state.data[parentKey], [childKey]: newValue },
			};
			state.setStorageData('data', newData);
			return { ...state, data: newData };
		case 'LOAD_DATA':
			return { ...state, data: payload };
	}
};

export default reducer;
