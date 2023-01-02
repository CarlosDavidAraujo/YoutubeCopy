import styled from "styled-components"
import { Button } from "./Button";

const StyledBasicMenu = styled.div`
    position: fixed;
    left: 5px;
    top: var(--navbar-height);
    a {
        width: 64px;
        height: 74px;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        font-size: 10px;
    };
    @media (max-width: 740px) {
        display: none;
    }
`

export default function BasicMenu() {
    return (
        <StyledBasicMenu>
            <Button as="a" href="#inicio">
                <i class="fa-solid fa-house"></i>
                Início
            </Button>
            <Button as="a" href="#shorts">
                <i class="fa-solid fa-bolt"></i>
                Shorts
            </Button>
            <Button as="a" href="#inscricoes">
                <i class="fa-solid fa-check"></i>
                Inscrições
            </Button>
            <Button as="a" href="#biblioteca">
                <i class="fa-solid fa-compact-disc"></i>
                Biblioteca
            </Button>
        </StyledBasicMenu>
    )
}