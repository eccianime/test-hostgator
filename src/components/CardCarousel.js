import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import colors from '../common/colors';
import plan_a from '../assets/icons/plan_a.png';
import plan_b from '../assets/icons/plan_b.png';
import plan_c from '../assets/icons/plan_c.png';
import infoIcon from '../assets/icons/info.png';
import { getPlans, subscribePlan } from '../actions/creators';
import Card from './Card';

const Container = styled.div`
    text-align: center;
    margin: 0px 25px 30px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`

const CardCarousel = ({ actualCycle, plans, getPlans, subscribePlan }) =>{
    useEffect( ()=>{
        getPlans()
    }, [ getPlans ] )
    
    const showCards = () => {
        const fetched = plans['shared'];
        const products = ( fetched && fetched['products'] ) || []; 
        const items = Object.keys( products );
        const acceptedPlans = [ 'Plano P', 'Plano M', 'Plano Turbo' ];
        return(
            items.map( item => {
                const product = products[item];
                const cycle = product['cycle'] || false;
                const actualCyclePlan = cycle[actualCycle] || false;
                const priceOrder = actualCyclePlan['priceOrder'] || false;
                const months = actualCyclePlan['months'] || false;
                const payload = {
                    pid: product.id,
                    billingcycle: actualCycle,
                }
                return(
                    cycle && actualCyclePlan && acceptedPlans.some( plan => plan === product.name ) &&
                    <Card key={item} product={product} priceOrder={priceOrder} months={months} payload={payload} subscribePlan={subscribePlan} />
                )
            })
        )
    }
	return (
        <Container id='plans'>
            { showCards() }
        </Container>
	);
}

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
    getPlans: () => {
        dispatch( getPlans() )
    },
    subscribePlan: payload => {
        dispatch( subscribePlan( payload ) )
    }
})

export default connect( stateToProps, dispatchToProps )(CardCarousel);