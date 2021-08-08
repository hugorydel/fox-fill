export interface Settings {
	shopify: {
		enabled: boolean;
		navigateThroughStepsEnabled: boolean;
		navigateThroughStepsDelay: number;
		requests: boolean;
		autocart: boolean;
		shopifyAutocop: boolean;
		hybrid: boolean;
		productMenu: boolean;
	};
	stripe: {
		enabled: boolean;
		refreshPageUntilClickEnabled: boolean;
		refreshPageUntilClickURL: string;
		ACO: boolean;
	};
	supreme: {
		enabled: boolean;
		autocop: boolean;
		processPayment: boolean;
		productMenu: boolean;
	};
	walmart: {
		ACO: boolean;
		ATC: boolean;
	};
	target: {
		ACO: boolean;
		ATC: boolean;
		allowPickup: boolean;
	};
	AIOScripts: {
		adidasYeezySupply: boolean;
		offWhite: boolean;
		footsites: boolean;
	};
	bots: {
		bandarsBounties: boolean;
		shrey: boolean;
		velo: boolean;
		discordOAuth: boolean;
	};
}

// shopify: {
// 	enabled: false;
// 	navigateThroughStepsEnabled: false;
// 	navigateThroughStepsDelay: 10000;
// 	requests: false;
// 	autocart: false;
// 	shopifyAutocop: false;
// 	hybrid: false;
// 	productMenu: false;
// };
// stripe: {
// 	enabled: false;
// 	refreshPageUntilClickEnabled: false;
// 	refreshPageUntilClickURL: '';
// 	ACO: false;
// };
// supreme: {
// 	enabled: false;
// 	autocop: false;
// 	processPayment: false;
// 	productMenu: false;
// };
// walmart: {
// 	ACO: false;
// 	ATC: false;
// };
// target: {
// 	ACO: false;
// 	ATC: false;
// 	allowPickup: false;
// };
// AIOScripts: {
// 	adidasYeezySupply: false;
// 	offWhite: false;
// 	footsites: false;
// };
// bots: {
// 	bandarsBounties: false;
// 	shrey: false;
// 	velo: false;
// 	discordOAuth: false;
// };
