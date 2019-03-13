import { auth, userRef } from './firebase.js';


const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/',
    callbacks: {
        signInSuccessWithAuthResult(authResult){
            const user = authResult.user;
            userRef.child(user.uid)
                .set({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});
