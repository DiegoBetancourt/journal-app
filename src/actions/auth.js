import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"
import {startLoading, finishLoading } from './ui'
 

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({user}) =>{
            
            dispatch(
                login(user.uid, user.displayName)
            )

            dispatch(finishLoading());

        })
        .catch(e => {
            console.log(e);
            dispatch(finishLoading());
        })



        // setTimeout(() => {
            
        //     dispatch( login(123, 'Diego'))

        // }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({user}) =>{
                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                )

            })
            .catch(e => {
                console.log(e);
            })
    }

}

export const startGoogleLogin = () =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
    }
}

export const login = (uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})


//---------------------------------------------------

// import { getAuth, signInWithPopup } from 'firebase/auth';
// import { googleAuthProvider } from '../firebase/firebase-config';

// import {types} from '../types/types';
 
// export const startLoginEmailPassword = (email, password) =>{
//     return (dispatch) =>{
//         setTimeout(() => {
//             dispatch(login(123, 'Pedro'))
//         }, 3500);
//     }
// }
 
// export const startGoogleLogin = () =>{
//     return (dispatch) =>{
//         const auth = getAuth();
//         signInWithPopup(auth, googleAuthProvider)
//             .then(({user}) =>{
//                 dispatch(login(user.uid, user.displayName))
//             });
//     }
// }
 
// export const login = (uid, displayName) =>(
//     {
//         type:types.login,
//         payload: {
//             uid,
//             displayName
//         }
//     }
// )