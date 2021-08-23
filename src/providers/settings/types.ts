export type Profile = {
	id: string;
	shippingProfileTitle: string;
	shippingFirstName: string;
	shippingLastName: string;
	shippingCardNumber: string;
	shippingExpirationDate: string;
	shippingCVV: string;
	shippingAddressOne: string;
	shippingAddressTwo: string;
	shippingCountry: string;
	shippingState: string;
	shippingPhoneNumber: string;
	shippingEmail: string;
	shippingDiscord: string;
	shippingTwitter: string;
	shippingCity: string;
	shippingZipCode: string;
	billingFirstName?: string;
	billingLastName?: string;
	billingAddressOne?: string;
	billingAddressTwo?: string;
	billingCountry?: string;
	billingState?: string;
	billingCity?: string;
	billingZipCode?: string;
	billingPhoneNumber?: string;
	billingEmail?: string;
};

export type ContextProps = {
	data: {
		popupPage: {
			shopifyEnabled: boolean;
			shopifyNavigateThroughStepsEnabled: boolean;
			shopifyNavigateThroughStepsDelay: number;
			shopifyRequests: boolean;
			shopifyAutocart: boolean;
			shopifyShopifyAutocop: boolean;
			shopifyHybrid: boolean;
			shopifyProductMenu: boolean;
			stripeEnabled: boolean;
			stripeRefreshPageUntilClickEnabled: boolean;
			stripeRefreshPageUntilClickURL: string;
			stripeACO: boolean;
			supremeEnabled: boolean;
			supremeAutocop: boolean;
			supremeProcessPayment: boolean;
			supremeProductMenu: boolean;
			walmartACO: boolean;
			walmartATC: boolean;
			targetACO: boolean;
			targetATC: boolean;
			targetAllowPickup: boolean;
			AIOScriptsAdidasYeezySupply: boolean;
			AIOScriptsOffWhite: boolean;
			AIOScriptsFootsites: boolean;
			botsBandarsBounties: boolean;
			botsShrey: boolean;
			botsVelo: boolean;
			botsDiscordOAuth: boolean;
		};
		profilesPage: {
			createdProfiles: Array<Profile>;
			currentProfile: Profile | undefined;
		};
		settingsPage: {
			discordWebhook: string;
			supremeMonitorkeywords: string;
			supremeMonitorcolor: string;
			supremeMonitorsize: number;
			shopifyMonitorkeywords: string;
			shopifyMonitorcolor: string;
			shopifyMonitorsize: number;
			promoDiscountCode: string;
			linkAppender: string;
			blackListedWebsites: Array<string>;
		};
		user: {
			username: string;
			email: string;
			memberSince: string;
			activationKey: string;
		};
	};
	setData: (payload: {
		parentKey: keyof ContextProps['data'];
		childKey?:
			| keyof ContextProps['data']['popupPage']
			| keyof ContextProps['data']['profilesPage']
			| keyof ContextProps['data']['settingsPage']
			| keyof ContextProps['data']['user'];
		newValue: any;
	}) => void;
	loadStorageData: () => Promise<void>;
};

export type ActionProps = {
	type: 'SET_DATA' | 'LOAD_STORAGE_DATA';
	payload: {
		parentKey?: keyof ContextProps['data'];
		childKey?:
			| keyof ContextProps['data']['popupPage']
			| keyof ContextProps['data']['profilesPage']
			| keyof ContextProps['data']['settingsPage']
			| keyof ContextProps['data']['user'];
		newValue: any;
	};
};
