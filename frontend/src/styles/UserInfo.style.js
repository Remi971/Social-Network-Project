import styled from "styled-components";
import UserInfo from '../components/UserInfo';
import { colors } from '../styles/util.style';

export const StyledUserInfo = styled(UserInfo)`

    img {
            width: 100px;
            clip-path: circle(40% at center);
        }

    td {
        text-align: center;
        vertical-align: middle;
    }

    .td-email {
        overflow-wrap: break-word;
    }

    @media (max-width: 600px) {
        .td-date {
            display: none;
        }
    }
    @media (max-width: 515px) {
        .td-email {
            display: none;
        }
    }

    button {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        font-size: 1.5rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        i {
            text-align: center;
            color: ${colors.orange};
        }
    }
`