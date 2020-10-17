import React from 'react';
import styled from 'styled-components';

import colors from '../common/colors';
import plan_a from '../assets/icons/plan_a.png';
import plan_b from '../assets/icons/plan_b.png';
import plan_c from '../assets/icons/plan_c.png';
import infoIcon from '../assets/icons/info.png';

const Container = styled.div`
    text-align: center;
    margin: 0px 25px 30px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`

const Card = styled.div`
    flex: 1;
    max-width: 330px;
    margin-right: 10px;
    background-color: ${colors.white};
    padding-top: 40px;
    padding-bottom: 35px;
    display: inline-block;    
`

const Title = styled.div`
    font-weight: 700;
    font-size: 26px;
    color: ${colors.blue};
    padding: 0px 25px 30px;
    border-bottom: 1px solid ${colors.almostwhite};
`

const PricesContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 25px;
`

const Text = styled.span`
    font-size: ${ props => props.size ? props.size : '13px' };
    display: ${ props => props.block ? 'block' : 'inline-block' };
    font-weight: ${ props => props.bold ? 700 : 400 };
    text-decoration: ${ props => props.decoration ? props.decoration : 'none' };
    margin-right: 5px;
    text-align: ${ props => props.align ? props.align : 'center' };
    color: ${ props => props.color ? props.color : colors.black };
`

const Button = styled.button`
    background-color: ${colors.mediumblue};
    border-radius: 25px;
    padding: 10px 0px;
    width: 280px;
    max-width: 85%;
    border: none;
    font-size: 22px;
    font-weight: 700;
    color: ${colors.white};
    margin-bottom: 30px;
`
const Badge = styled.div`
    background-color: ${colors.green};
    padding: 5px;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
    margin-left: 5px;
    border-radius: 20px;
    margin-top: 15px;
    display: inline-block;
`

const ContentContainer = styled.div`
    border-bottom: 1px solid ${colors.almostwhite};
    padding-bottom: 30px;
`
const FeaturesContent = styled.div`
    padding-top: 30px;
    margin-left: 25px;

    & span{
        line-height: 1.5
    }
`

function CardCarousel() {
	return (
        <Container>
            <Card>
                <img src={plan_a} alt='Plano P' />
                <Title>Plano P</Title>
                <PricesContainer>
                    <Text decoration='line-through'>R$ 431,64</Text><Text bold>R$ 302,15</Text>
                    <Text block>equivalente a</Text>

                    <Text color={colors.blue} size='20px'>R$ </Text>
                    <Text color={colors.blue} bold size='35px'>8,39</Text>
                    <Text color={colors.blue} size='20px'>/mês*</Text>
                </PricesContainer>
                <ContentContainer>
                    <Button>Contrate Agora</Button>
                    <Text bold size='15px' block>1 ano de Domínio Grátis <img src={infoIcon} alt='Info Icon'/></Text>
                    <Text color={colors.blue} size='14px'>economize R$ 174,48</Text>
                    <Badge>40% OFF</Badge>
                </ContentContainer>
                <FeaturesContent>
                    <Text size='16px' block align='left'>Para 1 site</Text>
                    <Text size='16px' block align='left'><Text size='16px' bold>100 GB</Text>de Armazenamento</Text>
                    <Text size='16px' block align='left'>Contas de E-mail <Text size='16px' bold>Ilimitadas</Text></Text>
                    <Text size='16px' block align='left'>Criador de Sites <Text size='16px' bold decoration='underline'>Grátis</Text></Text>
                    <Text size='16px' block align='left'>Certificado SSL <Text size='16px' bold>Grátis</Text> (https)</Text>
                </FeaturesContent>
            </Card>
            <Card>
                <img src={plan_a} alt='Plano P' />
                <Title>Plano P</Title>
                <PricesContainer>
                    <Text decoration='line-through'>R$ 431,64</Text><Text bold>R$ 302,15</Text>
                    <Text block>equivalente a</Text>

                    <Text color={colors.blue} size='20px'>R$ </Text>
                    <Text color={colors.blue} bold size='35px'>8,39</Text>
                    <Text color={colors.blue} size='20px'>/mês*</Text>
                </PricesContainer>
                <ContentContainer>
                    <Button>Contrate Agora</Button>
                    <Text bold size='15px' block>1 ano de Domínio Grátis <img src={infoIcon} alt='Info Icon'/></Text>
                    <Text color={colors.blue} size='14px'>economize R$ 174,48</Text>
                    <Badge>40% OFF</Badge>
                </ContentContainer>
                <FeaturesContent>
                    <Text size='16px' block align='left'>Para 1 site</Text>
                    <Text size='16px' block align='left'><Text size='16px' bold>100 GB</Text>de Armazenamento</Text>
                    <Text size='16px' block align='left'>Contas de E-mail <Text size='16px' bold>Ilimitadas</Text></Text>
                    <Text size='16px' block align='left'>Criador de Sites <Text size='16px' bold decoration='underline'>Grátis</Text></Text>
                    <Text size='16px' block align='left'>Certificado SSL <Text size='16px' bold>Grátis</Text> (https)</Text>
                </FeaturesContent>
            </Card>
            <Card>
                <img src={plan_a} alt='Plano P' />
                <Title>Plano P</Title>
                <PricesContainer>
                    <Text decoration='line-through'>R$ 431,64</Text><Text bold>R$ 302,15</Text>
                    <Text block>equivalente a</Text>

                    <Text color={colors.blue} size='20px'>R$ </Text>
                    <Text color={colors.blue} bold size='35px'>8,39</Text>
                    <Text color={colors.blue} size='20px'>/mês*</Text>
                </PricesContainer>
                <ContentContainer>
                    <Button>Contrate Agora</Button>
                    <Text bold size='15px' block>1 ano de Domínio Grátis <img src={infoIcon} alt='Info Icon'/></Text>
                    <Text color={colors.blue} size='14px'>economize R$ 174,48</Text>
                    <Badge>40% OFF</Badge>
                </ContentContainer>
                <FeaturesContent>
                    <Text size='16px' block align='left'>Para 1 site</Text>
                    <Text size='16px' block align='left'><Text size='16px' bold>100 GB</Text>de Armazenamento</Text>
                    <Text size='16px' block align='left'>Contas de E-mail <Text size='16px' bold>Ilimitadas</Text></Text>
                    <Text size='16px' block align='left'>Criador de Sites <Text size='16px' bold decoration='underline'>Grátis</Text></Text>
                    <Text size='16px' block align='left'>Certificado SSL <Text size='16px' bold>Grátis</Text> (https)</Text>
                </FeaturesContent>
            </Card>
        </Container>
	);
}

export default CardCarousel;
