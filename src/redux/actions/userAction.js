import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const userRegisterAsync = ({ email, password, name }) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const { accessToken } = user.auth.currentUser
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(userRegisterSync({
          name, 
          email, 
          accessToken,
          error: false 
        }));
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(error);
        dispatch(userRegisterSync({ error: true, errorMessage }));
      });
  };
};

const userRegisterSync = (user) => {
  return {
    type: userTypes.CREATE_USER,
    payload: { ...user },
  };
};

export const loginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const { displayName, accessToken } = user.auth.currentUser
      dispatch(loginSync({
        email,
        name: displayName,
        accessToken,
        error: false
      }))
    })
    .catch((error) => {
      console.log(error)
      const errorMessage = error.message
      dispatch(loginSync({
        email,
        error: true,
        errorMessage
      }))
    })

  }
}

export const loginProviderAsync = (provider) => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { displayName, accessToken } = user.auth.currentUser
        dispatch(loginSync({
          email: user.email, 
          name: displayName,
          accessToken,
          error: false
        }))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(loginSync({
          error: true,
          errorMessage
        }))
      })
  }
}

export const loginSync = (user) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: { ...user }
  }
}

export const actionLogoutAsync = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(actionLogoutSync())
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
const actionLogoutSync = () => {
  return {
    type: userTypes.USER_LOGOUT
  }

}