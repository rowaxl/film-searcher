import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import favSlice from './reducers/favs';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation'],
}

const persistedReducer = persistReducer(persistConfig, favSlice.reducer);

const store = configureStore({
  reducer: {
    favs: persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export default store;
