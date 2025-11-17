import styled from "styled-components"

export default function Card({storytitle,storyReadingTime,storyTags, storyCoverPath }) {
    console.log("cover path:", storyCoverPath);
    return (
        <CardWrapper>
            {storyCoverPath && <CardCover $bigcoverpath={storyCoverPath} />}
            <CardBodyWrapper>
                <CardTitle>{storytitle}</CardTitle>
                <CardBody>
                    <CardTags>
                        <p>{storyTags}</p>
                    </CardTags>
                    <CardReadingTime>reading time: {storyReadingTime}</CardReadingTime>
                </CardBody>
            </CardBodyWrapper>
            </CardWrapper>
    )
}

const CardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    color: var(--beige);
    flex-basis: calc(25% - 40px);  
    cursor: pointer;

    @media (max-width: 1000px) {
    flex-basis: calc(50% - 40px); 
    }

    @media (max-width: 600px) {
    flex-basis: 100%; 
    }
`;
const CardCover = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;  /* Portrait format */
    border: 2px solid var(--beige);
    background: ${({ $bigcoverpath }) => $bigcoverpath ? `url(${$bigcoverpath})` : 'none'}
    center center / cover;
    border-radius: 7px;
`;
const CardBodyWrapper = styled.div`
    width: 100%;
    border: 2px solid var(--beige);
    border-radius: 7px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`;
const CardBody = styled.div`
    background: var(--black);
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    `;
const CardTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 900;
    font-family: outfit;
    font-size: clamp(23px, 1.6vw, 30px);
    color:  var(--beige);
    padding: 16px;
`;
const CardTags = styled.div`
    font-family: poppins;
    display: flex;
    gap: 5px;
`;
const CardReadingTime = styled.p `
    text-align: left;
    font-size: small;
    font-style: italic;
`;