import styled from 'styled-components';
import Button from '../components/Button';

export const StyledButton = styled(Button)`
    background: #091F43;
    color: white;
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    padding: 1.5rem;
    transition: all ease 0.4s; 

    &:hover {
        transform: scale(1.1);
        background: #FD2D01;
    }
`