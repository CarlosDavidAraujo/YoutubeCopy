import { Button } from './Button';
import styled from 'styled-components';
import youtubeIcon from '../youtube-icon.png'
import musicIcon from '../youtube-music-icon.png'
import kidsIcon from '../youtube-kids-icon.png'
import tvIcon from '../youtube-tv-icon.png'

const StyledSideMenu = styled.div`
    position: absolute;
    top: var(--navbar-height);
    left: ${props => props.active ? "0px" : "-300px"}; //entra ou sai da tela baseado no estado ativo
    width: 240px;
    height: calc(100vh - var(--navbar-height));
    background-color:var(--bg-a);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-duration: 0.2s;
`;
const Sections = styled.div`
    width: 100%;
    padding-right: 15px;
    overflow: hidden;
    flex: 1 0 20%;
    &:hover {
        overflow-y: scroll;
    } 
`;

const Section = styled.div`
    color: white;
    padding: 14px 10px;
    border-bottom: 1px solid var(--bg-c);
`;

export default function SideMenu({ active }) {
    return (
        <StyledSideMenu active={active}>
            <Sections>
                <Section>
                    <Button as="a" href="#home">
                        <i class="fa-solid fa-house"></i>Início</Button>
                    <Button as="a" href="#shorts">
                        <i class="fa-solid fa-bolt"></i>
                        Shorts</Button>
                    <Button as="a" href="#inscricoes">
                        <i class="fa-solid fa-check"></i>
                        Inscrições</Button>
                </Section>
                <Section>
                    <Button as="a" href="#biblioteca">
                        <i class="fa-solid fa-compact-disc"></i>
                        Biblioteca</Button>
                    <Button as="a" href="#historico">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        Histórico</Button>
                    <Button as="a" href="#meus-videos">
                        <i class="fa-solid fa-film"></i>
                        Seus vídeo</Button>
                    <Button as="a" href="#assistir-mais-tarde">
                        <i class="fa-regular fa-clock"></i>
                        Assistir mais tarde</Button>
                    <Button as="a" href="#videos-marcados">
                        <i class="fa-regular fa-clock"></i>
                        Vídeos marcados...</Button>
                </Section>
                <Section>
                    <span
                        style={
                            {
                                marginLeft: "12px",
                                marginBottom: "5px",
                                fontSize: "17px"
                            }
                        }>Explorar</span>
                    <Button as="a" href="#em-alta">
                        <i class="fa-solid fa-fire"></i>
                        Em alta</Button>
                    <Button as="a" href="#musica">
                        <i class="fa-solid fa-music"></i>
                        Música</Button>
                    <Button as="a" href="#filmes">
                        <i class="fa-solid fa-clapperboard"></i>
                        Filmes</Button>
                    <Button as="a" href="#ao-vivo">
                        <i class="gg-media-podcast"></i>
                        Ao vivo</Button>
                    <Button as="a" href="#jogos">
                        <i class="fa-solid fa-gamepad"></i>
                        Jogos</Button>
                    <Button as="a" href="#noticias">
                        <i class="fa-solid fa-newspaper"></i>
                        Notícias</Button>
                    <Button as="a" href="#esportes">
                        <i class="fa-solid fa-trophy"></i>
                        Esportes</Button>
                    <Button as="a" href="#aprender">
                        <i class="fa-solid fa-lightbulb"></i>
                        Aprender</Button>
                </Section>
                <Section>
                    <span
                        style={
                            {
                                marginLeft: "12px",
                                marginBottom: "5px",
                                fontSize: "17px"
                            }
                        }
                    >Mais do YouTube</span>
                    <Button as="a" href="#ypremium">
                        <img src={youtubeIcon}/>
                        YouTube Premium
                    </Button>
                    <Button as="a" href="#yestudio">
                        <img src={youtubeIcon} />
                        Estúdio de Criação
                    </Button>
                    <Button as="a" href="#ymusic">
                    <img src={musicIcon}/>
                        YouTube Music
                    </Button>
                    <Button as="a" href="#ykids">
                    <img src={kidsIcon}/>
                        YouTube Kids
                    </Button>
                    <Button as="a" href="#ytv">
                        <img src={tvIcon}/>
                        YouTube TV
                    </Button>
                </Section>
            </Sections>
        </StyledSideMenu>
    );
}