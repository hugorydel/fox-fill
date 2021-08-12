export type Profile = {};

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

// export type dataStructure = {
// 	profile: Array<Profile>,
// 	popup: {
// 		shopify: {
// 			enabled: boolean,
// 			navigateThroughStepsEnabled: boolean,
// 			navigateThroughStepsDelay: number,
// 			requests: boolean,
// 			autocart: boolean,
// 			shopifyAutocop: boolean,
// 			hybrid: boolean,
// 			productMenu: boolean,
// 		},
// 		stripe: {
// 			enabled: boolean,
// 			refreshPageUntilClickEnabled: boolean,
// 			refreshPageUntilClickURL: string,
// 			ACO: boolean,
// 		},
// 		supreme: {
// 			enabled: boolean,
// 			autocop: boolean,
// 			processPayment: boolean,
// 			productMenu: boolean,
// 		},
// 		walmart: {
// 			ACO: boolean,
// 			ATC: boolean,
// 		},
// 		target: {
// 			ACO: boolean,
// 			ATC: boolean,
// 			allowPickup: boolean,
// 		},
// 		AIOScripts: {
// 			adidasYeezySupply: boolean,
// 			offWhite: boolean,
// 			footsites: boolean,
// 		},
// 		bots: {
// 			bandarsBounties: boolean,
// 			shrey: boolean,
// 			velo: boolean,
// 			discordOAuth: boolean,
// 		},
// 	},
// settings: {
// 	discordWebhook: string,
// 	supremeMonitor: {
// 		keywords: string,
// 		color: string,
// 		size: number,
// 	},
// 	shopifyMonitor: {
// 		keywords: string,
// 		color: string,
// 		size: number,
// 	},
// 	promoDiscountCode: string,
// 	linkAppender: string,
// 	blackListedWebsites: Array<string>,
// },
// };
