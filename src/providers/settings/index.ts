import { useContext } from 'react';
import Context from './Context';

export default function useSettings() {
	const context = useContext(Context);
	if (!context) throw new Error('Context is undefined');
	return context;
}
