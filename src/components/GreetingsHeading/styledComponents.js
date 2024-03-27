import styled from 'styled-components'

export const ListItems = styled.li``

export const ButtonHeading = styled.button`
  border: 2px solid #db1c48;
  border-radius: 15px;
  background-color: ${props => (props.activeTab ? '#db1c48' : 'transparent')};
  padding: 3px 10px 3px 10px;
  font-size: 10px;
  color: ${props => (props.activeTab ? '#ffffff' : '#db1c48')};
`
