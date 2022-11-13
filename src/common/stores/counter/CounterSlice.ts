import CounterSliceInitialState from '@stores/counter/CounterSliceInitialState';
import CounterSliceState from '@custom-types/stores/counter/CounterSliceState';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: CounterSliceInitialState,
  reducers: {
    increment(state: CounterSliceState) {
      state.counter += 1;
    },
    decrement(state: CounterSliceState) {
      state.counter -= 1;
    },
    increase(state: CounterSliceState, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggle(state: CounterSliceState) {
      state.showCounter = !state.showCounter;
    },
    testRequest(state: CounterSliceState) {
      state.counter -= 1;
    },
  },
});

// export const getAge = (testData: { name: string }) => {
//   // todo should be a notification or loading state
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   return async (dispatch: Function) => {
//     // eslint-disable-next-line @typescript-eslint/no-shadow
//     const getAge = async (): Promise<void> => {
//       // todo handle http request
//       const response: any = await fetch(
//         `https://api.agify.io/?name=${testData.name}`,
//         {
//           method: 'GET',
//         }
//       );
//
//       if (!response.ok) {
//         throw new Error('something wong');
//       }
//
//       const data = await response.json();
//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       dispatch(counterSliceActions.increase(data.age));
//       console.log('request went well');
//     };
//
//     try {
//       await getAge();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const counterSliceActions = counterSlice.actions;
export default counterSlice.reducer;
