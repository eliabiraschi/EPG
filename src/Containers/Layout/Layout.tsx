import React, { ReactNode } from 'react';
import {
	faHouse,
	faTv,
	faList,
	faArrowRotateLeft,
	faBookOpenReader,
	faUser,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from './logo.png'
import './Layout.css';

interface Props {
	children: ReactNode;
}

function Layout(props: Props) {
	return (<div className="layout">
		<header>
			<FontAwesomeIcon icon={faUser} size="2x" />
			<img src={logo} alt="Logo" className="logo" />
			<FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
		</header>
		<main>
			{props.children}
		</main>
		<footer>
			<FontAwesomeIcon icon={faHouse} size="2x" />
			<FontAwesomeIcon icon={faTv} size="2x" />
			<FontAwesomeIcon icon={faList} size="2x" className="accent" />
			<FontAwesomeIcon icon={faArrowRotateLeft} size="2x" />
			<FontAwesomeIcon icon={faBookOpenReader} size="2x" />
		</footer>
	</div>);
}

export default Layout;
