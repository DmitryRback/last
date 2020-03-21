import React, {Component} from 'react';
import './App.css';
import pr from './componets/Common/Preloader/Preloader.module.css'
import ProfileComponent from './componets/Profile/ProfileComponent';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Settings from "./componets/Settings/Settings";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import NavBarContainer from "./componets/NavBar/NavBarContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./componets/Common/Preloader/Preloader";
import store from "./Redux/ReduxStore";
import {WithSuspense} from "./HOC/WithSuspense";

const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));

class App extends Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) =>{
    //     alert('something error')
    // }
    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        this.props.initializeApp()
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader preloader={pr.preloader}/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <NavBarContainer/>
                    <div className='container'>
                        <Switch>

                            <Route path='/profile/:userId?' render={() => <ProfileComponent/>}/>
                            <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/users' render={WithSuspense(UsersContainer)}/>
                            <Route path='/news' component={News}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Redirect extact from="/" to="/profile" />
                            <Route path='*' render={() => <div>404 Not Found</div>}/>
                        </Switch>
                    </div>
                </div>
                <div className='footer'>
                    footer
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        navBar: state.siteBar.navBar
    }
}
export const ContainerApp = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ContainerApp/>
            </Provider>
        </BrowserRouter>
    )

}

export default SocialNetworkApp;