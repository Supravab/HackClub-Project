// src/config/api.js

const baseUrl = 'https://daydreambackend.onrender.com/api';

const v1Api = `${baseUrl}/v1`;

export const apiRoutes = {
	auth: {
		login: `${v1Api}/login`,
		signup: `${v1Api}/signup`,
		validateOtp: `${v1Api}/signup/validate`,
		resetRequest: `${v1Api}/reset/request`, //requires email
		verifyOtp: `${v1Api}/reset/verify`, //requires email , otp and new password || validate the password twice
		updatePassword: `${v1Api}/update`,
	},
	volunteer: {
		listUncategorized: `${v1Api}/volunteer/uncategorized`, //get method
		scheduleUser: `${v1Api}/volunteer/scheduleUser`, //post method requires {userId,date,time ==> link from backend}
		setCategory: `${v1Api}/volunteer/setCategory`, //post method requires {userId,category}
		listScheduled: `${v1Api}/volunteer/scheduledUsers`, //get method
	},
	operations: {
		listEvents: `${v1Api}/operations/events`, //get method
		listStories: `${v1Api}/operations/stories`, //get method
	},
};
