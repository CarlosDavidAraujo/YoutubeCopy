import { useRef, useState, useEffect } from 'react'
import useOutSideClick from '../utilities/useOutSideClick';
import styled from 'styled-components';
import useOnScreen from '../utilities/useOnScreen';

const DropdownMenu = styled.div.attrs(props => ({
    //tamanho e alinhamento mudam dependo do tipo de card(short ou padrao)
    size: props.short ? "200px" : "280px",
    x: props.short ? "160px" : "240px"
}))`
    position: absolute;
    width: ${props => props.size};
    //se o menu dropdown ultrapassar a largura da tela alinha a esquerda
    transform: ${props => props.isOffScreen? `translate(-${props.x}, 0)` : 'translate(0,0)'};
    background: var(--bg-b);
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border-radius: 10px;
    z-index: 1001;
    //oculta/mostra o menu dropdown
    display: ${({ active }) => active ? "block" : "none"};
    button {
        width: 100%;
        border-radius: 0px;
        background-color: transparent;
    }
    button:hover {
        background-color: #535353;
    }
`;

const DropdownTrigger = styled.button`
    width: 40px;
    height: 40px;  
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    visibility: ${props => props.triggerVisible ? "visible" : "hidden"}; //oculta/mostra o botao trigger do dropdown quando o mouse esta sobre/fora do card
    &:active {
        background: var(--bg-b);
    }
`;

export default function Dropdown({ children, triggerVisible, short, cardInspected }) {
    const [active, setActive] = useState(false); //controla o toogle do menu dropdown
    const dropdownRef = useRef();
    const menuRef = useRef(0);
    const isOffScreen = useOnScreen(menuRef); //verifica se o menu dropdown ultrapassa a largura da tela

    //fecha o menu dropdown se ele estiver ativo quando o card inspecionado completar a animação
    useEffect(() => {
        if (active && cardInspected) {
            const timer = setTimeout(() => {
                setActive(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [cardInspected]);

    //fecha o menu dropdown ao detectar um click fora
    useOutSideClick(dropdownRef, () => {
        setActive(false);
    });

    return (
        <div ref={dropdownRef}>
            <DropdownTrigger
                onClick={() => setActive(!active)}
                triggerVisible={triggerVisible}> 
                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
            </DropdownTrigger>
            <DropdownMenu cardInspected={cardInspected} className='dropdown-menu'
                ref={menuRef}
                active={active}
                short={short}
                isOffScreen={isOffScreen}
            >
                {children}
            </DropdownMenu>
        </div>
    )
}