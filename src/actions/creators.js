import { GET_PLANS } from './types'

export const getPlans = () => dispatch => {
    fetch('https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices')
        .then( response => response.json() )
        .then( response =>{
            dispatch({ type: GET_PLANS, plans: response })
        })
        .catch( error =>{
            console.log(error)
        })
}

export const subscribePlan = payload => dispatch => {
    const { pid, billingcycle } = payload;
    const url = `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices?a=add&pid=${pid}&billingcycle=${billingcycle}&promocode=PROMOHG40`;
    fetch( url, { method: 'POST' } )
        .then( response => response.json() )
        .then( response =>{
            console.log(response)
        })
        .catch( error =>{
            console.log(error)
        })
}