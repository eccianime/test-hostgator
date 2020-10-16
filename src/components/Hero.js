import React from 'react';
import styled from 'styled-components';

import desk from '../assets/images/desk.png';
import guy from '../assets/images/guy.png';
import checkIcon from '../assets/icons/check.png';
import colors from '../common/colors';


const Container = styled.div`
    background-image: linear-gradient( to bottom, ${colors.blue} 0%, ${colors.blue} 80%, ${colors.skyblue} 81%, ${colors.skyblue} 100% ) ;
    display: flex;
    flex: 1;
    justiFy-content: space-between;
    padding-top: 32.5px;

    @media (min-width: 321px ){
        padding-top: 95px;
    }
`

const CenterText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 15px;

    @media (min-width: 321px ){
        margin: 0px 25px
    }
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

const ImageContainer = styled.div`
    flex: 1;
    padding: 0px 25px;
    object-fit: contain;

    @media (max-width: 768px ){
        display: none
    }
`

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 20px;

    div {
        font-size: 16px;
        background-image: url('${checkIcon}');
        padding-left: 25px;
        background-repeat: no-repeat;
        color: ${colors.lightblue};
        text-align: center;
        margin-bottom: 7px;
        margin-right: 10px;
    }

    @media (min-width: 321px ){
        margin: 0px 50px;
        div {
            display: inline-block;
            margin-bottom: 15px;
        }
    }   
`

function Hero() {
	return (
        <Container>
            <ImageContainer><img style={{width: '100%'}} src={desk} alt="HostGator Left Desk" /></ImageContainer>
            <CenterText>
                <MinorTitle>Hospedagem de Sites</MinorTitle>
                <Title>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</Title>
                <ListContainer>
                    <div>99,9% de disponibilidade: seu site sempre no ar</div>
                    <div>Suporte 24h, todos os dias</div>
                    <div>Painel de Controle cPanel</div>
                </ListContainer>
            </CenterText>
            <ImageContainer><img style={{width: '100%'}} src={guy} alt="HostGator Right Guy" /></ImageContainer>
        </Container>
	);
}

export default Hero;
