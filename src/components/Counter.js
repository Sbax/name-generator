import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Button = styled.button`
    font-weight: bold;
    font-size: 1rem;
    background: none;
    border: 0;
    outline: none;

    border-radius: 50%;
    height: 2em;
    width: 2em;

    cursor: pointer;

    transition: background ease-in-out 250ms;

    &:hover {
        background: ${theme.primary};
    }
`;

const Container = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 1rem;
    }

    > * {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
`;

const Counter = ({ number, min, max, onChange }) => {
    const increment = () => onChange(number + 1);
    const decrement = () => onChange(number - 1);


    return (
        <Container>
            <Button disabled={number === min} onClick={decrement}>-</Button>
            <span>{number}</span>
            <Button disabled={number === max} onClick={increment}>+</Button>
        </Container>
    );
};

export default Counter;
