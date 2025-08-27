// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Example slice
import userReducer from './userSlice';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  // add more slices here
});

// Redux Persist config
const persistConfig = {
  key: 'root',          // key in localStorage
  storage,              // storage type
  whitelist: ['user'],  // only persist these reducers
  // blacklist: ['something'], // (alternative: exclude some reducers)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
