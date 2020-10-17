import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';
import colors from '../common/colors';

const Container = styled.div`
    
`

function CardCarousel() {
	return (
        <Container>
            <img src={logo} alt="HostGator Logo" />
        </Container>
	);
}

export default CardCarousel;
