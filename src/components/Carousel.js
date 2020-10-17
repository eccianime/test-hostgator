import React, { useEffect } from 'react';
import styled from 'styled-components';

import colors from '../common/colors';
import chevronLeftIcon from '../assets/icons/chevron-left.png';
import chevronRightIcon from '../assets/icons/chevron-right.png';

const Carousel = () => (
    <section class="carousel">
        <ol class="viewport">
            <li id="slide1" class="slideshow">
                <a href="#slide4" class="prev"></a>
                <a href="#slide2" class="next"></a>
            </li>
            <li id="slide2" class="slideshow">
                <a href="#slide1" class="prev"></a>
                <a href="#slide3" class="next"></a>
            </li>
            <li id="slide3" class="slideshow">
                <a href="#slide2" class="prev"></a>
                <a href="#slide4" class="next"></a>
            </li>
            <li id="slide4" class="slideshow">
                <a href="#slide3" class="prev"></a>
                <a href="#slide1" class="next"></a>
            </li>
        </ol>
    </section>
)

export default Carousel;