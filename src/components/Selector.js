import React from 'react';
import { connect } from 'react-redux';
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

function Selector({actualPlan, changePlan}) {
    const plans = [
        { id: '3years', name: "3 anos", cycle: 'triennially' },
        { id: '1year', name: "1 ano", cycle: 'annually' },
        { id: '1month', name: "1 mês", cycle: 'monthly' }
    ]
    const showPlans = () => (
        plans.map( (plan, index) => (
            <RadioContainer key={`plan-${index}`}>
                <Input type="radio" name="option" id={plan.id} onChange={ () => changePlan(index, plan.cycle) } checked={actualPlan === index} />
                <Label htmlFor={plan.id}>{plan.name}</Label>
            </RadioContainer>
        ))
    )
	return (
        <Container>
            <Text>Quero pagar a cada:</Text>
            <OptionsContainer>
                { showPlans() }
            </OptionsContainer>
        </Container>
	);
}

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
    changePlan: (actualPlan, actualCycle) =>{
        dispatch({ type: 'CHANGE_ACTUAL_PLAN', actualPlan, actualCycle })
    }
})

export default connect( stateToProps, dispatchToProps )(Selector);