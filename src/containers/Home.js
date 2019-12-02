import { connect } from 'react-redux'
import Car from '../components/Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    }
}

export default connect(mapStateToProps)(Home)