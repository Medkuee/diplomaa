// import combineReducers from 'react-combine-reducers';
import user from './user';
// import system from './system';
// import notification from './notification';

// const [reducer, initialState] = combineReducers({
// user,
// system,
// question,
// notification,
// });

const [reducer, initialState] = {
    user,
};

export { reducer, initialState };
