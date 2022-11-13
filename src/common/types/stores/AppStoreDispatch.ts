import rootStore from '@stores/RootStore';

// Infer the `AppDispatch` types from the store itself
export type AppDispatch = typeof rootStore.dispatch;
