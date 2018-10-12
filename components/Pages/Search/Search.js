import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../SearchForm/SearchForm';
import SearchResults from '../../SearchResults/SearchResultsContainer';
import InfiniteScroll from '../../InfiniteScroll/InfiniteScroll';

export default function Search({onSearchSubmitted, onInfiniteScroll, isSearchLoading, isActive}) {
    return (
        <div>
            <SearchForm onSearchSubmitted={onSearchSubmitted} />
            <InfiniteScroll
                isActive={isActive}
                isLoading={isSearchLoading}
                onTrigger={() => onInfiniteScroll()}
            >
                <SearchResults />
            </InfiniteScroll>
        </div>
    )
}

Search.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isSearchLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired
}