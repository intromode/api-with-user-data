var config = {
    apiKey: "AIzaSyBo8SHeQyewr7SnBoedcdsvchY8Vxv9igQ",
    authDomain: "weather-app-5cb10.firebaseapp.com",
    databaseURL: "https://weather-app-5cb10.firebaseio.com",
    projectId: "weather-app-5cb10",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
