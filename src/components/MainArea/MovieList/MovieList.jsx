import React from 'react';
import styled, { css } from "styled-components";
import PropTypes from 'prop-types'

const UlAsTabs = styled.ul`
    display: flex;
    list-style-type: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    
    text-transform: uppercase;
    
    color: #FFFFFF;    
`;

const TabElement = styled.li`
margin: 0 15px;
cursor: pointer;

.active {
    background: pink;
}
`;


function Genres(props) {
    const elements= props.tabsList.map((item,i) => <TabElement key={i}>{item}</TabElement>)
    return(
        <>
            <UlAsTabs>
                {elements}
            </UlAsTabs>
        </>
    )
}

Genres.propTypes = {
    tabsList: PropTypes.arrayOf(PropTypes.string),
    defaultTab: PropTypes.number
  };

  
  Genres.defaultProps = {
    tabsList: ["all" ,"action", "comedy", "sci-fi"],
    defaultTab: 0
}


export default Genres