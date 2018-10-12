import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './Navigation.css'

export default function Navigation({navigate, pages, currentPath}) {
    const items = pages.map(
        ({ title, path}) =>
            <NavigationItem
                isCurrent={path === currentPath}
                path={path}
                onClick={navigate}
                key={path}
            >{title}</NavigationItem>
    )
    return(
        <div className={styles.container}>{items}</div>
    )
}

Navigation.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    navigate: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired
}