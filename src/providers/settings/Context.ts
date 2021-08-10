import { createContext } from 'react';
import { ContextProps } from './types';

export const Context = createContext<ContextProps | undefined>(undefined);

export default Context;
