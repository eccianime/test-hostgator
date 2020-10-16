import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';
import colors from '../common/colors';

const Container = styled.div`
    background-color: ${colors.white};
    padding: 10px 15px;

    @media (min-width: 321px ){
        padding-left: 30px
    }

    @media (min-width: 769px ){
        padding-left: 20%
    }
`

function Header() {
	return (
        <Container>
            <img src={logo} alt="HostGator Logo" />
        </Container>
	);
}

export default Header;
