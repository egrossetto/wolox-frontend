import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import List from './components/list/index';
import Login from './components/login/index';
import { UserContext } from './context/userContext';

test('Check if techs are loading correctly by checking if node card is in document.', async () => {
	const { getByText } = render(<List />);
	const linkElement = await waitForElement(() => getByText(/node/i));
	expect(linkElement).toBeInTheDocument();
});

test('Check if login button is disabled when rendered.', () => {
	const { getByText } = render(
		<UserContext.Provider value={{ email: 'asd@gmail.com' }}> 
			<Login />
		</UserContext.Provider>
	); //Al componente usar el contexto, si no le instancio algo, lo ve como 'null' o 'undefined' asi que invento un email para poder testear.
	const button = getByText(/enviar/i);
	expect(button).toBeDisabled();
});