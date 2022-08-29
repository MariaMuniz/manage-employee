import styled from 'styled-components';
export const Container = styled.ul`
    list-style: none;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0;
    padding: 2px;
    background-color: #F27535;
    height: 3.6rem;
    align-items: center;
    font-weight: 400;
    font-size: 13pt;
    transition: 200ms ease-in;
    color: #ffffff;
    text-decoration: none;
    
    a:link, a:visited, a:active {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        margin: 16px;
    }
    a:hover{
    background-color: #ffffff;
    color: #EEA200;
    padding: 20px 10px;
    text-decoration: none;
    transition: 200ms ease-in;
    }
    
`;