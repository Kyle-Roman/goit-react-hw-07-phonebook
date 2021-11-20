import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from '../Components/api/api';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ]
});

setupListeners(store.dispatch);

export default store;





// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import phonebookReducer from '../redux/reducers';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const phonebookPersistConfig = {
//   key: "phonebook",
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//     reducer: {phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),},
//     middleware,
//     devTools: process.env.NODE_ENV === 'developement',
// });

// const persistor = persistStore(store);

// const persistedStore = { store, persistor };

// export default persistedStore;