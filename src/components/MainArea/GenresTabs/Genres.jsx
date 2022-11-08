import React from 'react';
import styled from 'styled-components';

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

const tabs = [
  {
    title: 'all',
    id: 1,
  },
  {
    title: 'action',
    id: 2,
  },
  {
    title: 'comedy',
    id: 3,
  },
  {
    title: 'sci-fi',
    id: 4,
  },
];

function Genres() {
  const { tabsList } = tabs;
  const elements = tabsList.map((item) => <TabElement key={item.id}>{item.title}</TabElement>);
  return (
    <UlAsTabs>
      {elements}
    </UlAsTabs>
  );
}

export default Genres;
