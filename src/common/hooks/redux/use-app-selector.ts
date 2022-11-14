import { TypedUseSelectorHook, useSelector } from 'react-redux';
import RootStoreState from '@custom-types/stores/RootStoreState';

const useAppSelector: TypedUseSelectorHook<RootStoreState> = useSelector;

export default useAppSelector;
