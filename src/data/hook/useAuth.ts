import { useContext } from 'react';
import AuthContext from '@/data/context/AuthContext';

export const useAuth = () => useContext(AuthContext);
