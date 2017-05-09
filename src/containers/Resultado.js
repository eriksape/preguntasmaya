import { connect } from 'react-redux';
import Resultado from './../components/Resultado'

const mapStateToProps  = (state, ownProps) => ({
    counter:state.counter,
    name: state.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Resultado);