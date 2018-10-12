import React, { Component } from 'react';
import Navigation from '../Navigation/NavigationContainer';
import styles from './App.css';
import GiphyDisplay from '../GiphyDisplay/GiphyDisplay'
import PropTypes from 'prop-types';
import { SearchResult } from '../../lib/customTypes'

const App = ({children, giphyDisplayIsShown, giphyDisplayed, hideGiphyDisplay}) => (
    <div>
        <h1 className={styles.header}>Giphy</h1>
        <Navigation />
        {children}
        <GiphyDisplay
            isShown={giphyDisplayIsShown}
            onClick={hideGiphyDisplay}
            giphy={giphyDisplayed}
        />
    </div>
    );

App.propTypes = {
    giphyDisplayIsShown: PropTypes.bool.isRequired,
    giphyDisplayed: SearchResult,
    hideGiphyDisplay: PropTypes.func.isRequired
}

export default App