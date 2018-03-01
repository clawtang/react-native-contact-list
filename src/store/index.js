import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '../reducers';
import { navigationMiddleware } from '../navigation';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['nav', 'auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer, {}, applyMiddleware(ReduxThunk, navigationMiddleware)
);
export const persistor = persistStore(store);
