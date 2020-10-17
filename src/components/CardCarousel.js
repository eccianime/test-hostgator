import React, { useState } from 'react';
import { connect } from 'react-redux';
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

function CardCarousel({ actualCycle }) {
    const staticData = 
    { "shared": 
    { "products": 
        { 
        "product_5": 
            { "name": "Plano P", "id": 5, "cycle": 
                { "monthly": 
                    { "priceRenew": "24.19", "priceOrder": "24.19", "months": 1 }
                , "semiannually": 
                    { "priceRenew": "128.34", "priceOrder": "128.34", "months": 6 }
                , "biennially": 
                    { "priceRenew": "393.36", "priceOrder": "393.36", "months": 24 }
                , "triennially": 
                    { "priceRenew": "561.13", "priceOrder": "561.13", "months": 36 }
                , "quarterly": 
                    { "priceRenew": "67.17", "priceOrder": "67.17", "months": 3 }
                , "annually": 
                    { "priceRenew": "220.66", "priceOrder": "220.66", "months": 12 }
                }
            }, 
        "product_6": 
            { "name": "Plano M", "id": 6, "cycle": 
                { "monthly": 
                    { "priceRenew": "29.69", "priceOrder": "29.69", "months": 1 }
                , "semiannually": 
                    { "priceRenew": "159.54", "priceOrder": "159.54", "months": 6 }
                , "biennially": 
                    { "priceRenew": "532.56", "priceOrder": "532.56", "months": 24 }
                , "triennially": 
                    { "priceRenew": "764.22", "priceOrder": "764.22", "months": 36 }
                , "quarterly": 
                    { "priceRenew": "82.77", "priceOrder": "82.77", "months": 3 }
                , "annually": 
                    { "priceRenew": "286.66", "priceOrder": "286.66", "months": 12 }
                }
            }, 
            "product_7": 
                { "name": "Plano Business", "id": 7, "cycle": 
                    { "monthly": 
                    { "priceRenew": "44.99", "priceOrder": "44.99", "months": 1 }
                , "semiannually": 
                        { "priceRenew": "257.94", "priceOrder": "257.94", "months": 6 }
                , "biennially": 
                        { "priceRenew": "983.76", "priceOrder": "983.76", "months": 24 }
                , "triennially": 
                        { "priceRenew": "1439.64", "priceOrder": "1439.64", "months": 36 }
                , "quarterly": 
                        { "priceRenew": "131.97", "priceOrder": "131.97", "months": 3 }
                , "annually": 
                        { "priceRenew": "503.88", "priceOrder": "503.88", "months": 12 }
                }
            }, 
            "product_329": 
                { "name": "Empreendedor", "id": 329 }
            , 
            "product_332": 
                { "name": "Negócios", "id": 332 }
            , "product_335": 
                { "name": "Plano Turbo", "id": 335, "cycle": 
                    { "monthly": 
                        { "priceRenew": "47.24", "priceOrder": "47.24", "months": 1 }
                    , "semiannually": 
                        { "priceRenew": "270.84", "priceOrder": "270.84", "months": 6 }
                    , "biennially": 
                        { "priceRenew": "1032.95", "priceOrder": "1032.95", "months": 24 }
                    , "triennially": 
                        { "priceRenew": "1511.62", "priceOrder": "1511.62", "months": 36 }
                    , "quarterly": 
                        { "priceRenew": "138.57", "priceOrder": "138.57", "months": 3 }
                    , "annually": 
                        { "priceRenew": "529.07", "priceOrder": "529.07", "months": 12 }
                    }
                }
            , "product_341": 
                { "name": "Presença Digital", "id": 341, "cycle": 
                    { "monthly": 
                        { "priceRenew": "14.99", "priceOrder": "14.99", "months": 1 }
                    }
                }
            }
        }
    }

    const getMoneyFormat = number => parseFloat(number).toLocaleString('pt-BR');

    const showCards = () => {
        let { products } = staticData.shared;
        const items = Object.keys(products);

        return(
            items.map( item => {
                let product = products[item];
                return(
                    product['cycle'] && 
                    product['cycle'][actualCycle] &&
                    <Card key={item}>
                        <img src={plan_a} alt='Plano P' />
                        <Title>{product.name}</Title>
                        <PricesContainer>
                            <Text decoration='line-through'>R$ {getMoneyFormat(product['cycle'][actualCycle]['priceOrder'])}</Text>
                            <Text bold>R$ {getMoneyFormat((product['cycle'][actualCycle]['priceOrder'] * .6).toFixed(2))}</Text>
                            <Text block>equivalente a</Text>

                            <Text color={colors.blue} size='20px'>R$ </Text>
                            <Text color={colors.blue} bold size='35px'>{
                                getMoneyFormat( (product['cycle'][actualCycle]['priceOrder'] / product['cycle'][actualCycle]['months']).toFixed(2) )
                                }</Text>
                            <Text color={colors.blue} size='20px'>/mês*</Text>
                        </PricesContainer>
                        <ContentContainer>
                            <Button>Contrate Agora</Button>
                            <Text bold size='15px' block>1 ano de Domínio Grátis <img src={infoIcon} alt='Info Icon'/></Text>
                            <Text color={colors.blue} size='14px'>economize R$ {getMoneyFormat((product['cycle'][actualCycle]['priceOrder'] * .4).toFixed(2))}</Text>
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
                )
            })
        )
    }
	return (
        <Container>
            { showCards() }
        </Container>
	);
}

const stateToProps = state => state;

export default connect( stateToProps )(CardCarousel);