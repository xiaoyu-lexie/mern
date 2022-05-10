import {createContext} from 'react';

export const AuthContext = createContext({osLoggedIn: false, login: () => {}, logout: () => {}});