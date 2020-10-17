import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPlans, subscribePlan } from '../actions/creators';
import Card from './Card';
import leftChevronIcon from '../assets/icons/chevron-left.png'
import rightChevronIcon from '../assets/icons/chevron-right.png'

const Container = styled.div`
    text-align: center;
    margin: 0px 25px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
`

const ListContainer = styled.ul`
    display: flex; margin: 0; padding: 0; overflow: hidden;
`

const ListItem = styled.li`
    display: block; list-style: none;
`

const Button = styled.a`
    display: flex; 
    align-items: center; 
    justify-content: center;
    background-image: ${ props => props.position === 'left'? `url(${leftChevronIcon})` : `url(${rightChevronIcon})` };
    width: 35px; 
    height: 35px;
    position: absolute; 
    margin-right: -15px;
    margin-left: -15px;
    top: 34%;
    ${ props => props.position === 'left'? 'left: 0;' : 'right: 0;' }

    @media (min-width: 769px ){
        display: none;
    }
`

const CardCarousel = ({ actualCycle, plans, getPlans, subscribePlan }) =>{
    useEffect( ()=>{
        getPlans()
    }, [ getPlans ] )

    let [ index, changeIndex ] = useState(0)

    const goToSlide = number =>{
        let liEls = document.querySelectorAll('#listcontainer li');
        let next = index + number;
        next = next === 3 ? 0 : next === -1 ? 2 : index + number;
        changeIndex( next );
        liEls[ next ].scrollIntoView({behavior: 'smooth', block: "center", inline: "center"});
        setTimeout( ()=> {liEls[ next ].scrollIntoView({behavior: 'smooth', block: "start", inline: "center"});}, 800 )
    }
    
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
                    <ListItem key={item}><Card name={product.name} priceOrder={priceOrder} months={months} payload={payload} subscribePlan={subscribePlan} /></ListItem>
                )
            })
        )
    }
	return (
        <Container id='plans'>
            <ListContainer id='listcontainer'>
            { showCards() }
            <Button position="left" onClick={()=>goToSlide(-1)}></Button>
            <Button position="right" onClick={()=>goToSlide(+1)}></Button>
            </ListContainer>
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