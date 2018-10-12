import Random from './Random';
import { connect } from 'react-redux';
import { showGiphyDisplay } from '../../../actions/giphyDisplay';
import { getRandomGiphy } from '../../../actions/random';

const mapStateToProps = (state) => {
    return {
        giphy: state.random.giphy
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        thumbnailClicked: (giphy) => dispatch(showGiphyDisplay(giphy)),
        getRandomGiphy: () => dispatch(getRandomGiphy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random)