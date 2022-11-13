import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStoreState } from '@stores/RootStore';

const useAppSelector: TypedUseSelectorHook<RootStoreState> = useSelector;
export default useAppSelector;
