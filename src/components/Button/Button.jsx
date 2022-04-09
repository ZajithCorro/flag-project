import React from 'react';

import { ButtonStyled } from './styles';

export default function Button({ children, ...props }) {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
