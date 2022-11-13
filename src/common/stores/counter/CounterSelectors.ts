import RootStoreState from '@custom-types/stores/RootStoreState';

export const selectCount = (state: RootStoreState) => state.counter.counter;
