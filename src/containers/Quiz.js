import { connect } from 'react-redux';
import Quiz from './../components/Quiz'

const mapStateToProps  = (state, ownProps) => ({
    quiz:state.quiz
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: () => dispatch({type:'ADD'}),
    reset: () => dispatch({type: 'RESET'})
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Quiz);