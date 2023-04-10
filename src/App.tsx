import { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;

    justify-content: center;
    align-items: center;

    position: relative;

    > button {
        all: unset;
        position: absolute;
        color: #fff;
        cursor: pointer;
    }
`;

const SolidContainer = styled.div`
    position: relative;

    width: 100px;
    height: 150px;
`;

const Solid = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    background-color: transparent;

    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;

    transition: all 0.5s;

    &:nth-child(1) {
        transform: rotate(-45deg) translate(0, -20px);
        animation: 2s solid-animation-left ease-in-out infinite;
    }

    &:nth-child(2) {
        transform: rotate(45deg) translate(0, -20px);
        animation: 2s solid-animation-right ease-in-out infinite 0.5s;
    }
`;

const Box = styled.div`
    width: 60px;
    height: 60px;

    overflow: hidden;

    transform: rotate(45deg);
    transition: all 0.5s;
    opacity: 0;

    position: absolute;
    cursor: pointer;

    &:nth-child(3) {
        top: calc(-20% - 30px);
        left: calc(50% - 30px);
    }

    &:nth-child(4) {
        top: calc(50% - 30px);
        right: calc(-40% - 40px);
    }

    &:nth-child(5) {
        bottom: calc(-20% - 30px);
        left: calc(50% - 30px);
    }

    &:nth-child(6) {
        top: calc(50% - 30px);
        left: calc(-40% - 40px);
    }

    &:hover {
        opacity: 0 !important;
    }

    &.show {
        opacity: 1;
    }

    img {
        width: 150%;
        height: 150%;
        object-fit: cover;
        transform: rotate(-45deg) translateY(-25%);
    }
`;

function App() {
    const box = [0, 1, 2, 3];
    const [showBox, setShowBox] = useState(false);

    function toggleShowBox() {
        setShowBox((show) => !show);
    }

    return (
        <Container>
            <SolidContainer>
                <Solid />
                <Solid />
                {box.map((index) => (
                    <Box className={`${showBox ? `show` : ``}`} key={index}>
                        <img src="/raccoon-man.png" alt="너굴맨" />
                    </Box>
                ))}
            </SolidContainer>
            <button onClick={toggleShowBox}>Click me!</button>
        </Container>
    );
}

export default App;
