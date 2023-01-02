import { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import styled, { css, keyframes } from 'styled-components'
import { Button } from "./Button"

const Preview = styled.a`
    img{
        width: 100%;
        aspect-ratio: ${props => props.short ? "4/7" : "5/3"}; //proporções diferentes para cada tipo de card
        border-radius:10px;
        object-fit: cover;
    }
`;

const Footer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const ChannelImg = styled.a`
    img {
        width: 36px;
        border-radius: 50%;
    }
`;

const CardInfo = styled.div`
    width: ${props => props.short ? "100%" : "calc(100% - 48px)"};//corrige algumas quebras de layout entre os cards padrao e shorts
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3px;
    .main-info {
        display: flex;
    }
`;

const Description = styled.a`
    font-family: "Roboto","Arial",sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: white;
    display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Statistics = styled.a`
    display: flex;
    flex-wrap: wrap;
    color: var(--txt-gray);
    font-family: "Roboto","Arial",sans-serif;
    font-size: 14px;
    font-weight: 400;
    & :nth-child(2)::before {
        content: "•";
        margin: 0 4px;
    }
`;

const ChannelName = styled.a`
    width: 100%;
    color: var(--txt-gray);
    font-family: "Roboto","Arial",sans-serif;
    font-size: 14px;
    font-weight: 400;
    &:hover {
        color: white;
    }
`;

const SpecButtons = styled.div`
    //primeiras 3 propriedades desabilitam os botoes, so vão aparecer após a animação de scale do card
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
    margin-bottom: -20px;

    ${Button} {
        width: min(100%, 200px);
        height: 35px;
        justify-content: center;
        flex-grow: 1;
        background-color: var(--bg-d); 
        border-radius: 20px; 
        :hover {
            background-color: var(--bg-c);  
        }
    }
`;

const Scale = keyframes` //animação de scale do card
    to {
        transform: scale(1.3) translate(0, 5%);
        background-color: var(--bg-b);
        height: max-content;
    }
`;
const DownScale = keyframes` //reverte o scale nos textos do card
    to {
        transform: scale(calc(1/1.3)) translate(-15%, -20px);
        width: 130%;
        padding: 0 15px;
    }
`;
const DisplayButtons = keyframes` //mostra novos botoes ao inspecionar o card
    to { 
        position: relative;
        pointer-events: auto;
        visibility: visible;
    }
`;

const StyledCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 12px;
    border-radius: 10px;
    background-color: var(--bg-a);
    cursor: pointer;  
    ${({ short, inspected }) => !short && inspected &&
        css`           
            position: absolute;
            z-index: 50;
            //animação de scale dos cards
            animation: ${Scale} 0.2s 1s forwards;
            ${Preview} {
                img{
                    transition-delay: 1s;
                    border-radius: 10px 10px 0 0;
                }         
            }
            //animação para reverter o scale nos textos
            ${Footer} {
                animation: ${DownScale} 0s 1s forwards;
            }
            //animação para mostrar os dois novos botoes que aparecem ao inspecionar o card
            ${SpecButtons} {
                animation: ${DisplayButtons} 0s 1.1s forwards;
            }`
    }
`;



export default function Card({ short, preview, portrait, channel, descricao, views, time }) {
    const [dropdownTriggerVisible, setdropdownTriggerVisible] = useState(false); //controla a visibilidade do botao trigger do dropdown
    const [inspected, setInspected] = useState(false);// controla o estado de inspeção card

    return (
        <StyledCard
            short={short}
            onMouseOver={() => setdropdownTriggerVisible(true)}
            onMouseOut={() => setdropdownTriggerVisible(false)}
            onMouseLeave={() => setInspected(false)}
            inspected={inspected}
        >
            <Preview
                short={short}
                href='#video'
                onMouseOver={() => setInspected(true)}
            >
                <img src={preview} />
            </Preview>
            <Footer>

                {!short && //shorts nao possuem retrato do canal
                    <ChannelImg href="#channel">
                        <img src={portrait} />
                    </ChannelImg>
                }
                <CardInfo>
                    <div className="main-info">
                        <Description href='#video'>
                            {descricao}
                        </Description>
                        {short ? //dropdowns diferentes entre shorts e cards padroes
                            <Dropdown class="dropdown" triggerVisible={dropdownTriggerVisible} short={short} >
                                <Button>
                                    <i class="fa-solid fa-ban fa-rotate-by"></i>
                                    Não tenho interesse
                                </Button>
                                <Button>
                                    <i class="fa-brands fa-font-awesome"></i>
                                    Enviar feedback
                                </Button>
                            </Dropdown>
                            :
                            <Dropdown triggerVisible={dropdownTriggerVisible} cardInspected={inspected} short={short}>
                                <section>
                                    <Button>
                                        <i class="gg-play-list"></i>
                                        Adicionar à fila
                                    </Button>
                                    <Button>
                                        <i class="fa-regular fa-clock fa-xl"></i>
                                        Salvar em "Assistir mais tarde"
                                    </Button>
                                    <Button>
                                        <i class="gg-play-list-add"></i>
                                        Salvar na playlist
                                    </Button>
                                    <Button>
                                        <i class="fa-solid fa-arrow-down"></i>
                                        Download
                                    </Button>
                                    <Button>
                                        <i class="fa-solid fa-share fa-xl"></i>
                                        Compartilhar
                                    </Button>
                                </section>
                                <section>
                                    <Button>
                                        <i class="fa-solid fa-ban fa-rotate-by"></i>
                                        Não tenho interesse
                                    </Button>
                                    <Button>
                                        <i class="fa-solid fa-ban fa-rotate-by fa-xl" style={{ '--fa-rotate-angle': '-45deg' }}></i>
                                        Não recomendar o canal
                                    </Button>
                                    <Button>
                                        <i class="fa-brands fa-font-awesome"></i>
                                        Denunciar</Button>
                                </section>
                            </Dropdown>}
                    </div>
                    <a href="#channel">
                        {!short && //shorts não apresentam o nome do canal
                        <ChannelName href='#channel'>{channel}</ChannelName>}
                        <Statistics href="#video">
                            <span>{views}</span>
                            {!short && //shorts não apresentam o tempo de upload do video
                            <span>{time}</span>}
                        </Statistics>
                    </a>
                </CardInfo>
                {!short && //shorts não têm os botões de inspeção
                    <SpecButtons>
                        <Button as="a" href="#assistir-mais-tarde"><i class="gg-play-list-add"></i>Assistir mais tarde</Button>
                        <Button as="a" href="#adicionar-a-fila"><i class="gg-play-list"></i>Adicionar à fila</Button>
                    </SpecButtons>}
            </Footer>
        </StyledCard>
    )
}