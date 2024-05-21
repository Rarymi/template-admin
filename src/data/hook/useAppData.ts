import { useContext } from 'react';
import AppContext from '@/data/context/AppContext';

export const useAppData = () => useContext(AppContext);
