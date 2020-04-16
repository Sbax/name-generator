import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Label = styled.label`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: .5em;

    input {
        display: none;
    }

    span {
        cursor: pointer;
        margin-right: .5em;
        border-radius: .1em;
        width: 1em;
        height: 1em;
        background: ${theme.accent};


        transition: opacity ease-in-out 250ms;
        opacity: .3;

        &:hover {
            opacity: .6;
        }

        &:before {
            content: "";
            position: absolute;
            display: none;
            left: .33em;
            top: .33em;
            width: .33em;
            height: .66em;
            border: solid ${theme.mainBg};
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    }

    input:checked ~ span {
        opacity: 1;

        &:before {
            display: block;
        }
    }
`;

const Checkbox = ({ checked, onChange, children }) => {
    return (
        <Label>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span />
            {children}
        </Label>
    );
};

export default Checkbox;
