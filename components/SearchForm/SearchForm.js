import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default function SearchForm({onSearchSubmitted}) {
    let searchField
    const searchSubmitted = (e) => {
        e.preventDefault();
        onSearchSubmitted(searchField.value);
    }
    return (
        <form 
            className={styles.container}
            onSubmit={searchSubmitted}
        >
            <input
                className={styles.searchField}
                ref={input => searchField = input}
                type="text"
                placeholder="find"
            />
            <input 
                className={styles.button}
                type="submit"
                value="search"
            />
        </form>
    )
}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired
}

