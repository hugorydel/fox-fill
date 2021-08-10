export type Data = {
	[key: string]: object;
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
};

export type ContextProps = {
	[key: string]: object;
	data: Data;
	changeData: (
		parentKey: string,
		childKey: string,
		newValue: string | boolean | number
	) => void;
	setStorageData: (key: string, value: object | string | Data) => void;
	loadStorageData: () => Promise<void>;
};

export type ActionProps = {
	type: 'SET_DATA' | 'LOAD_DATA';
	payload: any;
};
