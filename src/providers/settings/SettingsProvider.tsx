import { useEffect } from 'react';
import { useReducer } from 'react';
import Context from './Context';
import reducer from './reducer';
import { ContextProps } from './types';

const SettingsProvider: React.FC = ({ children }) => {
	const initialState: ContextProps = {
		popup: {
			shopifyEnabled: false,
			shopifyNavigateThroughStepsEnabled: false,
			shopifyNavigateThroughStepsDelay: 0,
			shopifyRequests: false,
			shopifyAutocart: false,
			shopifyShopifyAutocop: false,
			shopifyHybrid: false,
			shopifyProductMenu: false,
			stripeEnabled: false,
			stripeRefreshPageUntilClickEnabled: false,
			stripeRefreshPageUntilClickURL: '',
			stripeACO: false,
			supremeEnabled: false,
			supremeAutocop: false,
			supremeProcessPayment: false,
			supremeProductMenu: false,
			walmartACO: false,
			walmartATC: false,
			targetACO: false,
			targetATC: false,
			targetAllowPickup: false,
			AIOScriptsAdidasYeezySupply: false,
			AIOScriptsOffWhite: false,
			AIOScriptsFootsites: false,
			botsBandarsBounties: false,
			botsShrey: false,
			botsVelo: false,
			botsDiscordOAuth: false,
		},
		profiles: {
			createdProfiles: [
				{
					id: '123',
					shippingProfileTitle: 'Profile Title',
					shippingFirstName: '',
					shippingLastName: '',
					shippingCardNumber: 'xxxx xxxx xxxx xxxx',
					shippingExpirationDate: '12/31',
					shippingCVV: '333',
					shippingAddressOne: '',
					shippingAddressTwo: '',
					shippingCountry: '',
					shippingState: '',
					shippingPhoneNumber: '',
					shippingEmail: '',
					shippingDiscord: '',
					shippingTwitter: '',
					shippingCity: '',
					shippingZipCode: '',
					billingFirstName: '',
					billingLastName: '',
					billingAddressOne: '',
					billingAddressTwo: '',
					billingCountry: '',
					billingState: '',
					billingCity: '',
					billingZipCode: '',
					billingPhoneNumber: '',
					billingEmail: '',
				},
			],
			currentProfile: undefined,
		},
		settings: {
			discordWebhook: '',
			supremeMonitorkeywords: '',
			supremeMonitorcolor: '',
			supremeMonitorsize: 1,
			shopifyMonitorkeywords: '',
			shopifyMonitorcolor: '',
			shopifyMonitorsize: 1,
			promoDiscountCode: '',
			linkAppender: '',
			blackListedWebsites: [],
		},
		changeData: (parentKey, childKey, newValue) => {
			dispatch({ type: 'SET_DATA', payload: { parentKey, childKey, newValue } });
		},
		//Future -- fix this and if you chose to, change the setStorageData to how the data is currently structured
		// loadStorageData: async () => {},
		// 	const storageData: Object = await new Promise((resolve, reject) => {
		// 		chrome.storage.sync.get('data', items => {
		// 			if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
		// 			resolve(items.data);
		// 		});
		// 	});
		// 	initialState.setStorageData('data', initialState.data);
		// 	if (!isEmpty(storageData)) dispatch({ type: 'LOAD_DATA', payload: storageData });
		// },
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		// state.loadStorageData();
	}, []);

	return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default SettingsProvider;
