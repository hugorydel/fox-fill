import { useEffect } from 'react';
import { useReducer } from 'react';
import isEmpty from '../../utils/isEmpty';
import Context from './Context';
import reducer from './reducer';
import { ContextProps, Data } from './types';

export const dataTemplate: Data = {
	shopify: {
		enabled: false,
		navigateThroughStepsEnabled: false,
		navigateThroughStepsDelay: 1,
		requests: false,
		autocart: false,
		shopifyAutocop: false,
		hybrid: false,
		productMenu: false,
	},
	stripe: {
		enabled: false,
		refreshPageUntilClickEnabled: false,
		refreshPageUntilClickURL: '',
		ACO: false,
	},
	supreme: {
		enabled: false,
		autocop: false,
		processPayment: false,
		productMenu: false,
	},
	walmart: {
		ACO: false,
		ATC: false,
	},
	target: {
		ACO: false,
		ATC: false,
		allowPickup: false,
	},
	AIOScripts: {
		adidasYeezySupply: false,
		offWhite: false,
		footsites: false,
	},
	bots: {
		bandarsBounties: false,
		shrey: false,
		velo: false,
		discordOAuth: false,
	},
};

const SettingsProvider: React.FC = ({ children }) => {
	const initialState: ContextProps = {
		data: { ...dataTemplate },
		changeData: (parentKey, childKey, newValue) => {
			dispatch({ type: 'SET_DATA', payload: { parentKey, childKey, newValue } });
		},
		setStorageData: (key, value) => {
			console.log('set storage', key, value);
			chrome.storage.sync.set({ [key]: value });
		},
		loadStorageData: async () => {
			const storageData: Object = await new Promise((resolve, reject) => {
				chrome.storage.sync.get('data', items => {
					if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
					resolve(items.data);
				});
			});
			initialState.setStorageData('data', initialState.data);
			if (!isEmpty(storageData)) dispatch({ type: 'LOAD_DATA', payload: storageData });
		},
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		state.loadStorageData();
	}, []);

	return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default SettingsProvider;
