import styled from "styled-components";

const StyledSearchBar = styled.div`
    width: min(100%,600px);
    height: 40px;
    display: flex;
    
    input {
        width: 100%;
        background-color: var(--bg-a);
        box-sizing: border-box;
        border: 1px solid  var(--bg-c);
        border-radius: 30px 0 0 30px;
        padding: 15px;
        outline: none;
        font-size: medium;
        color: white;
    }

    button {
        width: 70px;
        margin-left: -1px;
        background-color: var(--bg-b);
        border: 1px solid  var(--bg-c);
        border-radius: 0 30px 30px 0;
        color: white;
        font-size: 15px;
        cursor: pointer;
    }
`;

export default function SearchBar() {
    return (
        <StyledSearchBar>
            <input type="text" placeholder="Pesquisar" />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </StyledSearchBar>
    )
}