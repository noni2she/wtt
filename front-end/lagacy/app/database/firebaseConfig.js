/*
	Firebase Configuration
*/
import Rebase from "re-base";

const firebaseConfig = {
	apiKey: "AIzaSyAIn3AnwPLroP_Vl_zzhJLpk4Nj7pyizhc",
	authDomain: "techwell-74c86.firebaseapp.com",
	databaseURL: "https://techwell-74c86.firebaseio.com",
	projectId: "techwell-74c86",
	storageBucket: "techwell-74c86.appspot.com",
	messagingSenderId: "565798776394"
},
baseApp = Rebase.createClass(firebaseConfig, "wtt");

export default baseApp;
