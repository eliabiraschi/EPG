import React, { ReactNode } from 'react';
import './Layout.css';

interface Props {
	children: ReactNode;
}

function Layout(props: Props) {
	return (<div>{props.children}</div>);
}

export default Layout;
