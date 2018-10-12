import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from '../../../lib/customTypes';
import styles from './Random.css'

class Random extends Component {
    componentDidMount() {
        this.props.getRandomGiphy();
    }

    render() {
        const { giphy, thumbnailClicked, getRandomGiphy } = this.props;
        return (
            <div className={styleMedia.container}>
                <div onClick={getRandomGiphy}>
                    <button className={styles.button}>Next Giphy</button>
                </div>
                {giphy &&
                <div>
                    <a
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            thumbnailClicked(giphy)
                        }}
                    >
                        <img src={giphy.thumbnail}/>
                    </a>
                </div>}
            </div>
        );
    }
}

export default Random;

Random.propTypes = {
    giphy: SearchResult,
    thumbnailClicked: PropTypes.func.isRequired,
    getRandomGiphy: PropTypes.func.isRequired
}