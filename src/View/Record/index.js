import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
// import './index.less';
// import { demoSetState, change, login } from '../../Action/index';


class Record extends Component {
	componentWillMount () {
	}
	render () {
		return (
			<div key='Record' style={{ height: '1880px' }}>
				<div>123</div>
			</div>
		);
	}
}
Record.propTypes = {
	// history: PropTypes.object,
	// menuList: PropTypes.array.isRequired,
	// cancelInfo: PropTypes.object,
	// memo: PropTypes.string.isRequired,
	// isAuth: PropTypes.bool.isRequired,
	// itemList: PropTypes.array.isRequired,
	// fetchUser: PropTypes.func.isRequired,
	// word: PropTypes.string.isRequired,
	// change: PropTypes.func.isRequired,
	// demoSetState: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
	return {
		// menuList: state.Entry.menuList,
		// isAuth: state.App.isAuth,
		// word: state.App.word
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		// change: bindActionCreators(change, dispatch),
		// demoSetState: bindActionCreators(demoSetState, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Record);
