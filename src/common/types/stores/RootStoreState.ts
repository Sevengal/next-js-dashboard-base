import { rootReducer } from '@stores/RootStore';

// Infer the `RootStoreState` type from the store itself
type RootStoreState = ReturnType<typeof rootReducer>;

export default RootStoreState;
