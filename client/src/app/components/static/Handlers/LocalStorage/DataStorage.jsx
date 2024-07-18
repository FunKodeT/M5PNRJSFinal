import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
	const [state, setState] = useState(() => {
		try {
			const value = window.localStorage.getItem(key);
			return value ? JSON.parse(value) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});
	const setValue = (value) => {
		try {
			const valueToStore =
				value instanceof Function ? value(state) : value;
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
			setState(value);
		} catch (error) {
			console.log(error);
		}
	};
	return [state, setValue];
};

export default useLocalStorage;

// import React from 'react';

// const SetUserData = ({username, userId, userToken}) => {
// 	const userData = {
// 		username: username,
// 		userId: userId,
// 		userToken: userToken,
// 	};
// 	localStorage.setItem('user', JSON.stringify(userData));
// };

// const GetUserData = () => {
// 	const storedData = localStorage.getItem('user');
// 	if (storedData) {
// 		return JSON.parse(storedData);
// 	}
// 	return null;
// };

// export default {SetUserData, GetUserData};
