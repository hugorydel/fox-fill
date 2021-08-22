import { ActionProps, ContextProps } from './types';

const reducer = (state: ContextProps, action: ActionProps) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_DATA':
			if ('parentKey' in payload && 'childKey' in payload) {
				const { parentKey, childKey, newValue } = payload;
				const modifiedState = {
					...state,
					[parentKey]: { ...state[parentKey], [childKey as any]: newValue },
				};
				state.setStorageData({
					parentKey,
					newValue: { ...state[parentKey], [childKey as any]: newValue },
				});
				return modifiedState;
			}
			if ('parentKey' in payload) {
				const { parentKey, newValue } = payload;
				state.setStorageData({ parentKey, newValue });
				return state;
			}
			return state;
	}
};

export default reducer;
