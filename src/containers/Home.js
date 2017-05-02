import { connect } from 'react-redux';
import { name_actions } from './../actions';
import Home from './../components/Home'

const mapStateToProps  = (state, ownProps) => ({
    name:state.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setName: name => dispatch(name_actions.setName(name))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);