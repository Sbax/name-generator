import React, { useState } from "react";
import styled from "styled-components";
import Counter from "../components/Counter";
import List from "../components/List";
import { Title } from "../components/Title";
import { shuffle } from "../utils";
import { Button } from "../components/Button";

const Container = styled.article`
    > * + * {
        margin-top: .5rem;
    }

    display: inline-flex;
    flex-direction: column;
`;


const Header = styled.div`
    min-height: 7rem;
`;

const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > * + * {
        margin-top: .5rem;
    }
`;

const MenuGenerator = ({ dishes }) => {
    const min = 1;
    const max = 10;

    const [number, setNumber] = useState(4);
    const [shuffled, setShuffled] = useState(shuffle(dishes));

    const reshuffle = () => setShuffled(shuffle(dishes));

    return (
        <Container>
            <Header>
                <Title>Menu</Title>
                <Filters>
                    <Counter min={min} max={max} number={number} onChange={setNumber} />
                </Filters>
            </Header>

            <List array={shuffled.slice(0, number)}>
                <Button onClick={reshuffle}>Ripeti</Button>
            </List>
        </Container>
    );
};

export default MenuGenerator;
