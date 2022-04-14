import React from 'react';

export default function Mode({ isDarkMode }) {
	return (
		<>
			{isDarkMode ? <i className='far fa-sun'></i> : <i className='far fa-moon'></i>}
			{isDarkMode ? 'Light Mode' : 'Dark Mode'}
		</>
	);
}
