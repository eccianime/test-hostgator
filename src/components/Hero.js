import React from 'react';
import styled from 'styled-components';

import desk from '../assets/images/desk.png';
import guy from '../assets/images/guy.png';
import colors from '../common/colors';

const Container = styled.div`
    background-color: ${colors.blue};
    display: flex;
    justiFy-content: space-around;
    padding-top: 32.5px;

    @media (min-width: 321px ){
        padding-top: 95px;
    }
`

const CenterText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 25px
`

const MinorTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.lightblue};
    padding-bottom: 12px;

    @media (min-width: 321px ){
        padding-bottom: 7px;
    }
`

const Title = styled.div`
    color: ${colors.white};
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 33px;

    @media (min-width: 321px ){
        font-size: 30px;
    }
`

const Image = styled.img`
    margin: 0px 25px;

    @media (max-width: 768px ){
        display: none
    }
`

function Hero() {
	return (
        <Container>
            <Image src={desk} alt="HostGator Left Desk" />
            <CenterText>
                <MinorTitle>Hospedagem de Sites</MinorTitle>
                <Title>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</Title>
            </CenterText>
            <Image src={guy} alt="HostGator Right Guy" />
        </Container>
	);
}

export default Hero;
