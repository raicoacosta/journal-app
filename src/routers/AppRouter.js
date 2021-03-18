import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import {
    firebase
} from '../faribase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from "../actions/auth";

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checkin, setCheckin] = useState(true)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user?.uid){
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }
            
            setCheckin(false);
        } )
    }, [dispatch, setCheckin, setIsLoggedIn]) 

    if (checkin) {
        return <h1> Wait... </h1>
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute  path="/auth" component={ AuthRouter } isAuthenticated={isLoggedIn} />

                    <PrivateRoute exact path="/" component={ JournalScreen } isAuthenticated={isLoggedIn} />
                    
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
