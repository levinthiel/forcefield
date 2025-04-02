import styled from "styled-components"
import { FaEye } from "react-icons/fa";

export default function Main() {
    return (
        <StyledMain>
        
            <Card>
                <CardBody>
                    <CardTitle>The sagasu incident</CardTitle>
                    <CardTags>
                        <p>Space Horror </p> / 
                        <p> First Person</p>
                    </CardTags>
                    <CardReaderCount>
                        <FaEye /> 
                        <p>23</p>
                    </CardReaderCount>
                </CardBody>
                <CardFooter>
                    <div>
                        <p>reading time: 5 min</p>
                    </div>
                    <ReadContainer>
                        <p>Read</p>
                        <div>
                            <StyledSwitch>
                                <StyledCheckbox  type="checkbox"/>
                                <StyledSlider></StyledSlider>
                            </StyledSwitch>
                        </div>
                    </ReadContainer>
                </CardFooter>
            </Card>
        </StyledMain>
    )
}

const StyledMain = styled.main `
    margin-top: 20px;
    opacity: 0.7;
`;
const Card = styled.section `
    border: 4px solid var(--orange);
    color: var(--orange);
    border-radius: 7px;
`;
const CardBody = styled.div`
    padding: 10px;
`;
const CardTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 900;
    font-family: outfit;
    font-size: 30px;
`;
const CardTags = styled.div`
    font-family: poppins;
    display: flex;
    gap: 5px;
`;
const CardReaderCount = styled.div`
    font-family: poppins;
    display: flex;
    gap: 5px;
    align-items: center;
`;
const CardFooter = styled.div`
    background: var(--orange);
    color: var(--black);
    padding: 10px;
    font-family: poppins;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ReadContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
const StyledSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span:before {
        transform: translateX(26px);
    }
`;
const StyledSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--black);
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--orange);
        transition: .4s;
    }
`;