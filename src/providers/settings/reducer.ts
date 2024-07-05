import { ActionProps, ContextProps } from './types';

const reducer = (state: ContextProps, action: ActionProps) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_DATA':
			if (payload.parentKey && payload.childKey) {
				const { parentKey, childKey, newValue } = payload;
				const modifiedData = {
					...state.data,
					[parentKey]: { ...state.data[parentKey], [childKey]: newValue },
				};
				const modifiedContext = { ...state, data: { ...modifiedData } };
				// chrome.storage.sync.set({ data: modifiedData });
				return modifiedContext;
			}
			return state;
		case 'LOAD_STORAGE_DATA':
			const { data, ...other } = state;
			const modifiedState = { data: { ...payload.newValue }, ...other };
			return modifiedState;
	}
};

export default reducer;
