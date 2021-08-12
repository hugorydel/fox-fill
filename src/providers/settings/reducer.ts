import { ActionProps, ContextProps } from './types';

const reducer = (state: ContextProps, action: ActionProps) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_DATA':
			const { parentKey, childKey, newValue } = payload;
			if (parentKey && childKey) {
				const modifiedState = {
					...state,
					[parentKey]: { ...state[parentKey], [childKey]: newValue },
				};
				// state.setStorageData(parentKey, modifiedState);
				return modifiedState;
			}
			return state;
	}
};

export default reducer;
