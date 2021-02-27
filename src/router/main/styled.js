import styled from 'styled-components';

export const MainBox = styled.div`
    text-align: center;
    width: 624px;
    margin: 0 auto;
`;
export const MainBoxForm = styled.div`
    position: relative;
    margin-top: 4rem;
`;

export const MainBoxButton = styled.button`
    display: inline;
    border: none;
    background-color: black;
    font-weight: 600;
    font-size: 16px;
    color: white;
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px 0 0;
    height: 30px;
    cursor: pointer;
`;

export const MainSearchForm = styled.input`
    display: block;
    width: 100%;
    padding: 15px 150px 18px 17px;
    background: white;
    border: none;
    line-height: 17px;
    font-size: 17px;
    color: #222222;
    box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
`;

export const Logo = styled.img`
    margin-top: 5rem;
    height: 300px;
`;

export const ResultFoam = styled.p`
    width: 100%;
    font-size: 14px;
`;
