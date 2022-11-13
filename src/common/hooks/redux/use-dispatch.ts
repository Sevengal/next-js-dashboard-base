import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@stores//RootStore';

// Use throughout this app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
