const { signInWithEmailAndPassword } = require("firebase/auth");
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

module.exports = { login };
