
export const Home = () => {


// function getUiConfig() {
//   return {
//     'callbacks': {
//       // Called when the user has been successfully signed in.
//       'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
//         if (authResult.user) {
//           handleSignedInUser(authResult.user);
//         }
//         if (authResult.additionalUserInfo) {
//           document.getElementById('is-new-user').textContent =
//               authResult.additionalUserInfo.isNewUser ?
//               'New User' : 'Existing User';
//         }
//         // Do not redirect.
//         return false;
//       }
//     },
//     // Opens IDP Providers sign-in flow in a popup.
//     'signInFlow': 'popup',
//     'signInOptions': [
//       // TODO(developer): Remove the providers you don't need for your app.
//       {
//         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         // Required to enable ID token credentials for this provider.
//         clientId: CLIENT_ID
//       },
//       {
//         provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         scopes :[
//           'public_profile',
//           'email',
//           'user_likes',
//           'user_friends'
//         ]
//       },
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         // Whether the display name should be displayed in Sign Up page.
//         requireDisplayName: true,
//         signInMethod: getEmailSignInMethod(),
//         disableSignUp: {
//           status: getDisableSignUpStatus()
//         }
//       },
//       {
//         provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//         recaptchaParameters: {
//           size: getRecaptchaMode()
//         },
//       },
//       {
//         provider: 'microsoft.com',
//         loginHintKey: 'login_hint'
//       },
//       {
//         provider: 'apple.com',
//       },
//       firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     'tosUrl': 'https://www.google.com',
//     // Privacy policy url.
//     'privacyPolicyUrl': 'https://www.google.com',
//     'credentialHelper': CLIENT_ID && CLIENT_ID != 'YOUR_OAUTH_CLIENT_ID' ?
//         firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
//         firebaseui.auth.CredentialHelper.NONE,
//     'adminRestrictedOperation': {
//       status: getAdminRestrictedOperationStatus()
//     }
//   };
// }


// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // Disable auto-sign in.
// ui.disableAutoSignIn();




// /**
//  * @return {string} The URL of the FirebaseUI standalone widget.
//  */
// function getWidgetUrl() {
//   return '/widget#recaptcha=' + getRecaptchaMode() + '&emailSignInMethod=' +
//       getEmailSignInMethod() + '&disableEmailSignUpStatus=' +
//       getDisableSignUpStatus() + '&adminRestrictedOperationStatus=' +
//       getAdminRestrictedOperationStatus();
// }




// /**
//  * Redirects to the FirebaseUI widget.
//  */
// var signInWithRedirect = function() {
//   window.location.assign(getWidgetUrl());
// };




// /**
//  * Open a popup with the FirebaseUI widget.
//  */
// var signInWithPopup = function() {
//   window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
// };




// /**
//  * Displays the UI for a signed in user.
//  * @param {!firebase.User} user
//  */
// var handleSignedInUser = function(user) {
//   document.getElementById('user-signed-in').style.display = 'block';
//   document.getElementById('user-signed-out').style.display = 'none';
//   document.getElementById('name').textContent = user.displayName;
//   document.getElementById('email').textContent = user.email;
//   document.getElementById('phone').textContent = user.phoneNumber;
//   if (user.photoURL) {
//     var photoURL = user.photoURL;
//     // Append size to the photo URL for Google hosted images to avoid requesting
//     // the image with its original resolution (using more bandwidth than needed)
//     // when it is going to be presented in smaller size.
//     if ((photoURL.indexOf('googleusercontent.com') != -1) ||
//         (photoURL.indexOf('ggpht.com') != -1)) {
//       photoURL = photoURL + '?sz=' +
//           document.getElementById('photo').clientHeight;
//     }
//     document.getElementById('photo').src = photoURL;
//     document.getElementById('photo').style.display = 'block';
//   } else {
//     document.getElementById('photo').style.display = 'none';
//   }
// };




// /**
//  * Displays the UI for a signed out user.
//  */
// var handleSignedOutUser = function() {
//   document.getElementById('user-signed-in').style.display = 'none';
//   document.getElementById('user-signed-out').style.display = 'block';
//   ui.start('#firebaseui-container', getUiConfig());
// };


// // Listen to change in auth state so it displays the correct UI for when
// // the user is signed in or not.
// firebase.auth().onAuthStateChanged(function(user) {
//   document.getElementById('loading').style.display = 'none';
//   document.getElementById('loaded').style.display = 'block';
//   user ? handleSignedInUser(user) : handleSignedOutUser();
// });


// /**
//  * Deletes the user's account.
//  */
// var deleteAccount = function() {
//   firebase.auth().currentUser.delete().catch(function(error) {
//     if (error.code == 'auth/requires-recent-login') {
//       // The user's credential is too old. She needs to sign in again.
//       firebase.auth().signOut().then(function() {
//         // The timeout allows the message to be displayed after the UI has
//         // changed to the signed out state.
//         setTimeout(function() {
//           alert('Please sign in again to delete your account.');
//         }, 1);
//       });
//     }
//   });
// };




// /**
//  * Handles when the user changes the reCAPTCHA, email signInMethod or email
//  * disableSignUp config.
//  */
// function handleConfigChange() {
//   var newRecaptchaValue = document.querySelector(
//       'input[name="recaptcha"]:checked').value;
//   var newEmailSignInMethodValue = document.querySelector(
//       'input[name="emailSignInMethod"]:checked').value;
//   var currentDisableSignUpStatus =
//       document.getElementById("email-disableSignUp-status").checked;
//   var currentAdminRestrictedOperationStatus =
//       document.getElementById("admin-restricted-operation-status").checked;
//   location.replace(
//       location.pathname + '#recaptcha=' + newRecaptchaValue +
//       '&emailSignInMethod=' + newEmailSignInMethodValue +
//       '&disableEmailSignUpStatus=' + currentDisableSignUpStatus +
//       '&adminRestrictedOperationStatus=' +
//       currentAdminRestrictedOperationStatus);
//   // Reset the inline widget so the config changes are reflected.
//   ui.reset();
//   ui.start('#firebaseui-container', getUiConfig());
// }




// /**
//  * Initializes the app.
//  */
// var initApp = function() {
//   document.getElementById('sign-in-with-redirect').addEventListener(
//       'click', signInWithRedirect);
//   document.getElementById('sign-in-with-popup').addEventListener(
//       'click', signInWithPopup);
//   document.getElementById('sign-out').addEventListener('click', function() {
//     firebase.auth().signOut();
//   });
//   document.getElementById('delete-account').addEventListener(
//       'click', function() {
//         deleteAccount();
//       });


//   document.getElementById('recaptcha-normal').addEventListener(
//       'change', handleConfigChange);
//   document.getElementById('recaptcha-invisible').addEventListener(
//       'change', handleConfigChange);
//   // Check the selected reCAPTCHA mode.
//   document.querySelector(
//       'input[name="recaptcha"][value="' + getRecaptchaMode() + '"]')
//       .checked = true;


//   document.getElementById('email-signInMethod-password').addEventListener(
//       'change', handleConfigChange);
//   document.getElementById('email-signInMethod-emailLink').addEventListener(
//       'change', handleConfigChange);
//   // Check the selected email signInMethod mode.
//   document.querySelector(
//       'input[name="emailSignInMethod"][value="' + getEmailSignInMethod() + '"]')
//       .checked = true;
//   document.getElementById('email-disableSignUp-status').addEventListener(
//       'change', handleConfigChange);
//   document.getElementById("email-disableSignUp-status").checked =
//       getDisableSignUpStatus();  
//   document.getElementById('admin-restricted-operation-status').addEventListener(
//       'change', handleConfigChange);
//   document.getElementById("admin-restricted-operation-status").checked =
//       getAdminRestrictedOperationStatus();  
// };


// window.addEventListener('load', initApp);



  return (
    <>
      {/* <p>Home</p>

    <div id="container">
      <h3>FirebaseUI Demo</h3>
      <div id="loading">Loading...</div>
      <div id="loaded" class="hidden">
        <div id="main">
          <div id="user-signed-in" class="hidden">
            <div id="user-info">
              <div id="photo-container">
                <img id="photo"/>
              </div>
              <div id="name"></div>
              <div id="email"></div>
              <div id="phone"></div>
              <div id="is-new-user"></div>
              <div class="clearfix"></div>
            </div>
            <p>
              <button id="sign-out">Sign Out</button>
              <button id="delete-account">Delete account</button>
            </p>
          </div>
          <div id="user-signed-out" class="hidden">
            <h4>You are signed out.</h4>
            <fieldset>
              <legend>Configuration</legend>
              reCAPTCHA mode for Phone Auth:
              <label for="recaptcha-normal">
                <input type="radio" id="recaptcha-normal" name="recaptcha" value="normal"/>
                Normal
              </label>
              <label for="recaptcha-invisible">
                <input type="radio" id="recaptcha-invisible" name="recaptcha" value="invisible"/>
                Invisible
              </label>
<br/>
              Email signInMethod:
              <label for="email-signInMethod-password">
                <input type="radio" id="email-signInMethod-password" name="emailSignInMethod"
                       value="password"/>
                Password
              </label>
              <label for="email-signInMethod-emailLink">
                <input type="radio" id="email-signInMethod-emailLink" name="emailSignInMethod"
                       value="emailLink"/>
                Email Link
              </label>
<br/>
              <label for="email-disableSignUp-status">Disable email sign up:</label>
              <input type="checkbox" id="email-disableSignUp-status" name="disableEmailSignUpStatus"/>
              <label for="admin-restricted-operation-status">Admin restricted operation status:</label>
              <input type="checkbox" id="admin-restricted-operation-status" name="adminRestrictedOperationStatus"/>
            </fieldset>
            <p>
              <button id="sign-in-with-redirect">Sign In with Redirect</button>
              <button id="sign-in-with-popup">Sign In with Popup</button>
            </p>
            <div id="firebaseui-spa">
              <h5>Single Page Application mode:</h5>
              <div id="firebaseui-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    </>
  );
};

