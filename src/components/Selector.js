import React, { useState } from 'react';
import styled from 'styled-components';

import colors from '../common/colors';
import check_off from '../assets/icons/check_off.png';
import check_on from '../assets/icons/check_on.png';

const Container = styled.div`
    width: 100%;
    text-align: center;
    margin: 15px 0px 50px;
`

const Text = styled.div`
    color: ${colors.blue};
    font-size: 14px;
    margin-bottom: 8px;
`

const OptionsContainer = styled.div`
    background-color: ${colors.white};
    box-shadow: 0px 2px 4px ${colors.mediumblue};
    border-radius: 20px;
    display: inline;
    border: 1px solid ${colors.mediumblue};
    padding: 10px 0px;
`

const RadioContainer = styled.div`
    display: inline-block;
    padding: 10px 0px;
    
    & > input:checked ~ label{
        border: 1px solid ${colors.mediumblue};
        background: ${colors.mediumblue} url(${check_on}) 10px center no-repeat;
        color: ${colors.white};
        font-weight: 700;
        border-radius: 20px;
    }
`
const Input = styled.input`
    display: none;
`

const Label = styled.label`
    color: ${colors.mediumblue};
    font-size: 16px;
    padding: 10px 15px 10px 35px;
    cursor: pointer;
    background: url(${check_off}) 10px center no-repeat;
`

function Header() {
    const [ selected, changeOption ] = useState(1)
	return (
        <Container>
            <Text>Quero pagar a cada:</Text>
            <OptionsContainer>
                <RadioContainer>
                    <Input type="radio" name="option" id="3years" onChange={ () => changeOption(1) } checked={selected === 1} />
                    <Label htmlFor='3years'>3 anos</Label>
                </RadioContainer>
                <RadioContainer>
                    <Input type="radio" name="option" id="1year" onChange={ () => changeOption(2) } checked={selected === 2} />
                    <Label htmlFor='1year'>1 ano</Label>
                </RadioContainer>
                <RadioContainer>
                    <Input type="radio" name="option" id="1month" onChange={ () => changeOption(3) } checked={selected === 3} />
                    <Label htmlFor='1month'>1 mês</Label>
                </RadioContainer>
            </OptionsContainer>
        </Container>
	);
}

export default Header;
