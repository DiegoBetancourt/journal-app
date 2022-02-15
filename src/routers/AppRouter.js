import React, { useEffect, useState } from 'react';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [ cheking, setCheking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if (user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(false)
            }else {
                setIsLoggedIn(true)
            }

            setCheking(false)
        })
    }, [dispatch, setCheking, setIsLoggedIn])

    if(cheking) {
        return(
            <div align="center">
                <img  src='https://intelligencesoft.com.co/wp-content/uploads/2021/07/loading-icon-animated.gif'/>
            </div>
           
        )
    }

  return (
    <Router>
        <div>
            <Switch>

                <Route 
                    path='/auth' 
                    component={
                        
                          AuthRouter
                        
                    }    
                
                />

                <PrivateRoute 
                    exact 
                    isAuthenticated={isLoggedIn}
                    path='/' 
                    component={JournalScreen}             
                            
                        
                                           
                />


               <Redirect to='/auth/login'/>
            </Switch>

        </div>




    </Router>
  );
};
