import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './GiphyDisplay.css';
import * as CustomTypes from '../../lib/customTypes'

export default function GiphyDisplay({isShown, giphy, onClick}) {
    const containerClassNames = classNames(
        styles.container,
        {[styles.isShown]: isShown}
    )
    return (
        <div className={containerClassNames}  onClick={onClick}>
            <img className={styles.image} src={giphy ? giphy.full : ''} />
        </div>
    )
}

GiphyDisplay.propTypes = {
    isShown: PropTypes.bool.isRequired,
    giphy: CustomTypes.SearchResult,
    onClick: PropTypes.func.isRequired
}