import styled from 'styled-components';
import ListUsers from '../components/ListUsers';
import { colors } from '../styles/util.style';

export const StyledListUsers = styled(ListUsers)`
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem;
        background: lightgray;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                margin: 1rem;
            }
            #arrow {
                font-size: 2rem;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        div{
            img {
                width: 100px;
            }
        }
    }
    .tableUsers {
        padding: 5px;
        width: 100%;
    }
    table {
        width: 100%;
        border-collapse: collapse;

        th {
            height: 3rem;
            vertical-align: middle;
            text-align: center;
            background-color: ${colors.darkBlue};
            color: white;
        }

    }

    td, th {
        border: 1px solid rgba(227, 227, 227, 0.3);
        padding: 5px;
    }

    td {
        color: ${colors.darkBlue};
    }

    @media (max-width: 600px) {
        .th-date {
            display: none;
        }
    }
    @media (max-width: 515px) {
        .th-email {
            display: none;
        }
    }
`
