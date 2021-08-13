export type Profile = {
	id: string;
	shipping: {
		profileTitle: string;
		firstName: string;
		lastName: string;
		cardNumber: string;
		expirationDate: string;
		cvv: string;
		addressOne: string;
		addressTwo: string;
		country: string;
		state: string;
		phoneNumber: string;
		email: string;
		discord: string;
		twitter: string;
		city: string;
		zipCode: string;
	};
	billing?: {
		firstName: string;
		lastName: string;
		addressOne: string;
		addressTwo: string;
		country: string;
		state: string;
		city: string;
		zipCode: string;
		phoneNumber: string;
		email: string;
	};
};

export type ContextProps = {
	popup: {
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
	profiles: {
		createdProfiles: Array<Profile>;
		currentProfile: Profile | undefined;
	};
	settings: {
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
	changeData: (
		parentKey: keyof ContextProps,
		childKey: keyof ContextProps['popup'],
		newValue: string | boolean | number
	) => void;
	// loadStorageData: () => Promise<void>;
};

export type ActionProps = {
	type: 'SET_DATA';
	payload: {
		parentKey?: keyof ContextProps;
		childKey?: keyof ContextProps['popup'];
		newValue: any;
	};
};
