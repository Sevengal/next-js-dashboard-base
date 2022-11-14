import { useDispatch } from 'react-redux';
import { AppDispatch } from '@custom-types/stores/AppStoreDispatch';

// Use throughout this app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
