import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';
import colors from '../common/colors';

const Text = styled.div`
    color: ${colors.mediumblue};
    font-size: 12px;
    text-decoration: underline;
    margin-bottom: 30px;
    text-align: center;

    @media (min-width: 769px ){
        text-align: right;
        margin-right: 20%;
    }
`

const Footer = () =>(
    <Text>*Confira as condições da promoção</Text>
)

export default Footer;
