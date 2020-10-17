import React from 'react';
import styled from 'styled-components';

import colors from '../common/colors';
import plan_a from '../assets/icons/plan_a.png';
import plan_b from '../assets/icons/plan_b.png';
import plan_c from '../assets/icons/plan_c.png';

import infoIcon from '../assets/icons/info.png';
import { subscribePlan } from '../actions/creators';

const Container = styled.div`
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

const Description = styled(Text)`
    text-align: left;
    font-size: 16px;
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
    cursor: pointer;
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

const getMoneyFormat = number => parseFloat(number).toLocaleString('pt-BR');

const Card = ({ product, priceOrder, months, payload, subscribePlan }) => (
    <Container>
        <img src={plan_a} alt={product.name} />
        <Title>{product.name}</Title>
        <PricesContainer>
            <Text decoration='line-through'>R$ {getMoneyFormat(priceOrder)}</Text>
            <Text bold>R$ {getMoneyFormat((priceOrder * .6).toFixed(2))}</Text>
            <Text block>equivalente a</Text>

            <Text color={colors.blue} size='20px'>R$ </Text>
            <Text color={colors.blue} bold size='35px'>{getMoneyFormat( (priceOrder / months).toFixed(2) )}</Text>
            <Text color={colors.blue} size='20px'>/mês*</Text>
        </PricesContainer>
        <ContentContainer>
            <Button onClick={ ()=> subscribePlan( payload ) } >Contrate Agora</Button>
            <Text bold size='15px' block>1 ano de Domínio Grátis <img src={infoIcon} alt='Info Icon'/></Text>
            <Text color={colors.blue} size='14px'>economize R$ {getMoneyFormat((priceOrder * .4).toFixed(2))}</Text>
            <Badge>40% OFF</Badge>
        </ContentContainer>
        <FeaturesContent>
            <Description block>Para 1 site</Description>
            <Description block><Description bold>100 GB</Description>de Armazenamento</Description>
            <Description block>Contas de E-mail <Description bold>Ilimitadas</Description></Description>
            <Description block>Criador de Sites <Description bold decoration='underline'>Grátis</Description></Description>
            <Description block>Certificado SSL <Description bold>Grátis</Description> (https)</Description>
        </FeaturesContent>
    </Container>
)

export default Card;