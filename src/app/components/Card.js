import styled from "styled-components"

export default function Card({storytitle,storyReadingTime,storyTags, storyCoverPath }) {
    return (
        <CardWrapper>
            {storyCoverPath && 
                <CardCover $bigcoverpath={storyCoverPath}>
                    <ImageOverlayDots></ImageOverlayDots>
                    <ImageOverlayGradient></ImageOverlayGradient>
                </CardCover>
            }

            <CardBodyWrapper>
                <CardTitle>{storytitle}</CardTitle>
                <CardBody>
                    <CardTags>
                        <p>{storyTags}</p>
                    </CardTags>
                    <CardReadingTime>reading time: {storyReadingTime}</CardReadingTime>
                    <CardMetaData>
                        <small>V1.0.0</small>
                        <small>18112025</small>
                        <small>Skltrn</small>
                    </CardMetaData>
                </CardBody>
            </CardBodyWrapper>
            </CardWrapper>
    )
}

const CardWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: var(--beige);
    cursor: pointer;
    transition:all .3s;

    &:hover{
        opacity:0.8;
        box-shadow: 0px 0px 40px rgba(22, 22, 22, 0.4);
    }
`;

const CardCover = styled.div`
    width: 100%;
    aspect-ratio: 2 / 3;  /* Portrait format */
    border: 2px solid var(--beige);
    background: ${({ $bigcoverpath }) => $bigcoverpath ? `url(${$bigcoverpath})` : 'none'} center center / cover;
    border-radius: 7px;
    position:relative;
`;
const ImageOverlayDots = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0) radial-gradient(rgba(255, 255, 255, 0.212) 10%, transparent 1%);
    background-size: 11px 11px;
`;
const ImageOverlayGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(0deg, rgba(180, 27, 6, 0.1) 0%, rgba(17, 17, 17, 0) 100%);
`;
const CardBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid var(--beige);
    border-radius: 7px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`;
const CardBody = styled.div`
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
const CardMetaData = styled.div`
    display: flex;
    justify-content: start;
    font-weight: 400;
    font-size: 12px;
    gap: 10px;
    margin-top: 15px;
    opacity: 0.5;
`;