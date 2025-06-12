import styled from "styled-components"

export default function Card({storytitle,storyReadingTime,storyTags}) {
    return (
        <CardWrapper>
            <CardCover></CardCover>
            <div>
                <CardTitle>{storytitle}</CardTitle>
                <CardBody>
                    <CardTags>
                        <p>{storyTags}</p>
                    </CardTags>
                    <CardReadingTime>reading time: {storyReadingTime}</CardReadingTime>
                </CardBody>
            </div>
            </CardWrapper>
    )
}

const CardWrapper = styled.section `
    background: var(--beige);
    display: flex;
    border: 2px solid var(--beige);
    border-radius: 7px;
    color: var(--beige);
    width:auto; /* calc((100% - 32px) / 3); */
    @media (max-width: 768px) {
  flex: 0 1 calc((100% - 16px) / 2); // 2 columns
}
@media (max-width: 480px) {
  flex: 0 1 100%; // 1 column
}
`;
const CardCover = styled.div `
    width: 145px;
    background: url("./sagasu/sagasu-s.png") var(--beige);
    border-radius: 7px 0 0 7px;
    border-right: 2px solid var(--beige);
`;
const CardBody = styled.div`
    background: var(--black);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 135px;
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