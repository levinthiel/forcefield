import styled from "styled-components"

export default function Card({storytitle,storyReadingTime,storyTags, storyCoverPath }) {
    console.log("cover path:", storyCoverPath);
    return (
        <CardWrapper>
             {storyCoverPath && <CardCover $smallcoverpath={storyCoverPath} />}
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
    background: var(--beige);
    display: flex;
    border: 2px solid var(--beige);
    border-radius: 7px;
    color: var(--beige);
    width: 100%; /* Full width of grid cell */
    height: 100%;
`;
const CardCover = styled.div `
    width: 145px;
    background: ${({ $smallcoverpath }) => $smallcoverpath ? `url(${$smallcoverpath})` : 'none'} var(--beige);
    border-radius: 7px 0 0 7px;
    border-right: 2px solid var(--beige);
    background-size: cover;
`;
const CardBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const CardBody = styled.div`
    background: var(--black);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: -webkit-fill-available;
`;
const CardTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 900;
    font-family: outfit;
    font-size: 30px;
    background: var(--beige);
    color: var(--black);
    padding: 16px;
`;
const CardTags = styled.div`
    font-family: poppins;
    display: flex;
    gap: 5px;
`;
const CardReadingTime = styled.p `
    text-align: right;
`;