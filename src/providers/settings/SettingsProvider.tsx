import { useEffect } from 'react';
import { useReducer } from 'react';
import Context from './Context';
import reducer from './reducer';
import { ContextProps } from './types';

const SettingsProvider: React.FC = ({ children }) => {
	const initialState: ContextProps = {
		data: {
			popupPage: {
				shopifyEnabled: false,
				shopifyNavigateThroughStepsEnabled: false,
				shopifyNavigateThroughStepsDelay: 1,
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
			profilesPage: {
				createdProfiles: [
					{
						id: '123',
						shippingProfileTitle: 'Profile Title',
						shippingFirstName: '',
						shippingLastName: '',
						shippingCardNumber: '1111111111111111',
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
			settingsPage: {
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
			user: {
				username: '#1111',
				email: 'test@gmail.com',
				memberSince: '2000/01/01',
				activationKey: '`',
			},
		},

		setData: payload => {
			dispatch({ type: 'SET_DATA', payload });
		},
		loadStorageData: async () => {
			const storageData: Object = await new Promise((resolve, reject) => {
				chrome.storage.sync.get(['data'], storage => {
					if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
					resolve(storage.data);
				});
			});
			if (storageData && Object.keys(storageData).length > 0)
				dispatch({ type: 'LOAD_STORAGE_DATA', payload: { newValue: storageData } });
		},
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		state.loadStorageData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default SettingsProvider;
