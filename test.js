const callBack = (year, callBackFunction) => {
	callBackFunction(year);
};

callBack(1997, (yearOfBirth) => {
	const age = 2022 - yearOfBirth;
	console.log(age);
	return age;
});
