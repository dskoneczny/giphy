import { SEARCH_SUCCESS, NEW_SEARCH, PERFORM_SEARCH, SEARCH_ERROR } from '../actions/search';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
    results: [],
    currentOffset: 0,
    searchTerm: null,
    isLoading: false,
    isActive: false,
}

function searchResultTransformer(rawResult) {
    const { images } = rawResult;
    return {
        thumbnail: images.fixed_height_small_still.url,
        full: images.original.url
    }
}

export default (state, action) => {
    if(state === undefined) {
        return initialState
    }
    switch (action.type) {
        case NEW_SEARCH:
            return {
                ...state,
                results: [],
                currentOffset: 0,
                searchTerm: action.searchTerm,
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                currentOffset: state.currentOffset + 50,
                results: state.results.concat(action.results.map(searchResultTransformer)),
                isLoading: false,
                isActive: (action.results.length === 50)
            }
        case PERFORM_SEARCH:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_ERROR:
            return {
                ...state,
                isLoading: false
            }
        case LOCATION_CHANGE:
            return initialState
        default:
            return state
    }
}