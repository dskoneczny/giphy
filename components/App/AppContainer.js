import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import { hideGiphyDisplay } from '../../actions/giphyDisplay';


const mapStateToProps = (state) => ({
    giphyDisplayIsShown: state.giphyDisplay.isShown,
    giphyDisplayed: state.giphyDisplay.giphy,
});

const mapDispatchToProps = (dispatch) => ({
    hideGiphyDisplay: () => dispatch(hideGiphyDisplay()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));