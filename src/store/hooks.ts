import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './index';

export const useMathDispatch = () => useDispatch<AppDispatch>();
export const useMathSelector: TypedUseSelectorHook<RootState> = useSelector;
