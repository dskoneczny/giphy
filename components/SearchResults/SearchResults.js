import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/customTypes';
import SearchResult from '../SearchResult/SearchResult';
import styles from './SearchResults.css'


export default function SearchResults ({results, searchResultClicked}) {
    return(
        <div className={styles.container}>
            { results.map((result, i) => (
                <SearchResult 
                    result={result}
                    key={i}
                    onClick={() => searchResultClicked(result)}
                />
            ))}
        </div>
    )
};

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
    searchResultClicked: PropTypes.func.isRequired
};

