import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../SearchResults/SearchResultsContainer';
import InfiniteScroll from '../../InfiniteScroll/InfiniteScroll';

export default class Trending extends React.Component {
    componentDidMount() {
        this.props.onSearchSubmitted()
    }

    render() {
        const { onInfiniteScroll, isSearchLoading, isActive } = this.props;
        return (
            <div>
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
}

Trending.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isSearchLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired
}