const { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } = require("firebase/auth");
const { auth } = require("./firebase"); // Import initialized auth

function login(email, password) {
    console.log("login called");
    return new Promise((res, rej) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("usercredential:", userCredential);
                const user = userCredential.user;
                res(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                rej({ errorCode, errorMessage });
            });
    });
}

function signup(email, password) {
    console.log("sign up called")
    return new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                res(user);
            })
            .catch((error) => {
                rej(error);
            });
    })
}

function logout() {
    return new Promise((res, rej) => {
        signOut().then(() => res("Logout successfully")).catch(() => rej("Logout failed"))
    })
}

function updateUser(auth, name) {
    const user = auth.currentUser;
    return new Promise((res, rej) => {
        updateProfile(user, {
            displayName: name
        }).then(() => res("User updated successfully."))
            .catch((err) => rej(err));
    })
}

module.exports = { login, signup, logout, updateUser };
