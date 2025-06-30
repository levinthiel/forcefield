import {keyframes, styled} from "styled-components"

export default function Main() {
    return (
        <a href="https://open.spotify.com/playlist/2bSO3P9jssmmK2rS7iKuaN?si=263539ff2f80417d">
        <Wrapper>
            <Marquee>
                
                    <p>
                        Good news my fellow carbon-based entities: &nbsp;
                        This playlist was forged in the vacuum of space and blessed by a malfunctioning coffee machine. &nbsp;
                        Perfect for reading Force Field Stories. &nbsp;
                        Click on this banner, brave one. &nbsp;
                        Add whatever helps you drift between dimensions, because it is collaborative. &nbsp;
                        Plug in and Zone out. The ship’s AI is listening. &nbsp;
                    </p>

                    <p aria-hidden="true">
                        Good news my fellow carbon-based entities: &nbsp;
                        This playlist was forged in the vacuum of space and blessed by a malfunctioning coffee machine. &nbsp;
                        Perfect for reading Force Field Stories. &nbsp;
                        Click on this banner, brave one. &nbsp;
                        Add whatever helps you drift between dimensions, because it is collaborative. &nbsp;
                        Plug in and Zone out. The ship’s AI is listening. &nbsp;
                    </p>
            </Marquee>
        </Wrapper>
        </a>
    )

}
const rotateslide = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
`;

const Wrapper = styled.div `
    max-width: 100%;
    overflow: hidden;
    border: 2px solid var(--beige);
    border-radius: 7px;
    color: var(--beige);
    padding: 10px 10px 1px 10px;
`;
const Marquee = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation:  ${rotateslide} 60s linear infinite;

    p {
        display: inline-block;
        font-weight: normal;
    }
`;
