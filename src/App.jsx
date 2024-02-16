import React, { useState } from 'react';
import Person from './Person'; // Assuming Person.js is in the same directory

export const createInitialState = () => {
	const age = new Date().getFullYear() - 1992;
	return age;
};

const App = () => {
	const [version, setVersion] = useState(0);

	const handleReset = () => setVersion(version + 1);
	return (
		<div className="App">
			<Person key={version} reset={handleReset} />
		</div>
	);
};

export default App;
