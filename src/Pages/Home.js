
import Card from '../Components/Card'
import BasicMenu from '../Components/BasicMenu';
import shortLogo from "../youtube-shorts-logo.svg"
import portrait from "../brksedu.jpg"
import preview from "../video.jpg"
import styled from 'styled-components';
import useVisibleGridCols from '../utilities/useVisibleGridCols';
import { useRef } from 'react';


const StyledHome = styled.div`
    margin: 50px 50px 0px 100px;
    @media (max-width: 740px) { //redução da margem em telas menores
        margin: 20px;        
    }
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 40px;
`;

const Videos = styled.div` 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    column-gap: 15px;
    //tamanho min do card é aumentado em telas maiores para que o grid tenha no maximo 5 colunas  
    @media (min-width: 1418px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));      
    }

    //remove alguns cards para manter o grid sempre com 2 linhas 
    @media (max-width: 907px) {
        div:nth-child(n+5) {
            display: none;
        }     
    }
    @media (max-width: 1162px) {
        div:nth-child(n+7) {
            display: none;
        }     
    }
    @media (max-width: 1709px) {
        div:nth-child(n+9) {
            display: none;
        }     
    }
`;

const Shorts = styled.div`
    display: grid;
    column-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

const ShortIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: white;
    gap: 8px;
    img {
        max-width: 20px;
    }
`;
export default function Home() {
    const videosRef = useRef();
    const numberOfCols = useVisibleGridCols(videosRef, 5);
    const Cards = Array(10).fill({
        descricao: "GOD OF WAR RAGNAROK #5 - Encontrando Durlin! | Gameplay no PS5 em Português PT-BR!",
        channel: "BRksEDU",
        views: "39 mil visualizações",
        time: "há 1 horas",
        preview: preview,
        portrait: portrait,
        short: false,
    })
    const ShortCards = Array(9).fill({
        descricao: "GOD OF WAR RAGNAROK #5 - Encontrando Durlin! | Gameplay no PS5 em Português PT-BR!",
        channel: "BRksEDU",
        views: "39 mil visualizações",
        time: "há 1 horas",
        preview: preview,
        portrait: portrait,
        short: true,
    })
    return (
        <StyledHome>
            <BasicMenu />
            <Contents>
                <Videos ref={videosRef} nCols={numberOfCols}>
                    {Cards.map((card) =>
                        <div className="card-wrapper" style={{ position: "relative", marginBottom: "40px" }}>
                            <Card
                                descricao={card.descricao}
                                channel={card.channel}
                                views={card.views}
                                time={card.time}
                                preview={card.preview}
                                portrait={card.portrait}
                                short={card.short}
                            />
                        </div>)}
                </Videos>
                <ShortIcon>
                    <img src={shortLogo} />
                    Shorts
                </ShortIcon>
                <Shorts>
                    {ShortCards.map((card) =>
                        <div className="card-wrapper" style={{ position: "relative", marginBottom: "40px" }}>
                            <Card
                                descricao={card.descricao}
                                channel={card.channel}
                                views={card.views}
                                time={card.time}
                                preview={card.preview}
                                portrait={card.portrait}
                                short={card.short}
                            />
                        </div>)}
                </Shorts>
            </Contents>
        </StyledHome >
    )
}