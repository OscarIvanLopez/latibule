import { types } from "../types/types";

import { firebase, githubAuthProvider } from "../firebase/firebase-config";

export const startGithubLogin = () => {
    githubAuthProvider.addScope("repo");
    firebase.auth().signInWithRedirect(githubAuthProvider);
};

export const getUserInfoGithub = () => {
    return (dispatch) => {
        firebase
            .auth()
            .getRedirectResult()
            .then((res) => {
                const user = res.user;
                dispatch(saveUser(user));
            })

            .catch((err) => {
                const errorCode = err.code;
                if (
                    errorCode ===
                    "auth/account-exists-with-different-credential"
                ) {
                    alert(
                        "You have signed up with a different provider for that email."
                    );
                } else {
                    console.error(err);
                }
            });
    };
};

const saveUser = (user) => ({
    type: types.authSaveUserGithub,
    payload: user,
});

//const saveUserInLocalStorage = (user) => {
//    LocalStorage.setItem("user", user);
//};
