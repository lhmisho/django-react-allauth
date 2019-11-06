import React from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';
import CustomLayout from './Containers/Layout';
import BaseRoute from './routes';
import { connect } from 'react-redux';
import { authCHeckState } from './store/actions/allAction'


class App extends React.Component {
    componentDidMount(){
        this.props.onTryAutoSignUp();  
    }
    render(){
        return (
            <div className="App">
                <Router>
                    <CustomLayout {...this.props}>
                        <BaseRoute/>
                    </CustomLayout>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{  
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onTryAutoSignUp: () => dispatch(authCHeckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
