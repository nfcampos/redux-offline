// @flow

//$FlowIgnore
import { AsyncStorage } from 'react-native'; //eslint-disable-line import/no-unresolved
import { persistStore } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

const offlineFilter = createBlacklistFilter(
  'offline',
  [ 'busy', 'online' ]
);

export default (store: any, options: { transforms?: [] }, callback: any) => {
  const transforms = (options && options.transforms || []).concat([offlineFilter]);
  return persistStore(store, { storage: AsyncStorage, ...options, transforms }, callback);
};
