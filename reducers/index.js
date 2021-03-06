import { combineReducers } from 'redux';
import searchReducer from './search';
import { routerReducer } from 'react-router-redux';
import giphyDisplayReducer from './giphyDisplay';
import randomReducer from './random'

export default combineReducers({
    router: routerReducer,
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
    random: randomReducer
})