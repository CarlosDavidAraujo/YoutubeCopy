import styled from "styled-components"

export const Button = styled.button`
    padding: 12px 15px;
    background-color: var(--bg-a);
    color: white;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 18px;
    border: none;  
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: var(--bg-b);
    }  

    i {
        font-size: 18px;
    }

    img {
        width: 20px;
    }
`;

const RoundButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 15px;
    background-color: var(--bg-a);
    color: white; 
    gap: 18px;
    border: none;  
    cursor: pointer;
    font-size: 14px;
    i {
        font-size: 20px;
    }
    &:hover {
        background-color: var(--bg-b);
    }
`;

export const MicButton = ({onClick}) => {
    return(
        <RoundButton onClick={onClick}>
            <i class="fa-solid fa-microphone"></i>         
        </RoundButton>
    )
}

export const NotificationButton = ({onClick}) => {
    return(
        <RoundButton onClick={onClick}>
            <i class="fa-solid fa-bell"></i>        
        </RoundButton>
    )
}

export const BarsButton = ({onClick}) => {
    return (
        <RoundButton onClick={onClick}>
            <i class="fa-solid fa-bars"></i>
        </RoundButton>
    )
}

export const CameraButton = ({onClick}) => {
    return (
        <RoundButton onClick={onClick}>
            <i class="fa-solid fa-video"></i>
        </RoundButton>
    )
}






