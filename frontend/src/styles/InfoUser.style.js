import styled from 'styled-components';
import InfoUser from '../components/InfoUser';
import { colors } from '../styles/util.style';

export const StyledInfoUser = styled(InfoUser)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 300px;

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

    #userInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        height: 100%;

        .btn-image {
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background-color: transparent;
            

            img {
            max-width: 200px;
            max-height: 200px;
            margin: 2px;
            /* object-position: center center; */
            clip-path: circle(40% at center);
            }
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;

            #modifFile {
                display: none;
            }

            #submit {
                width: 80px;
                height: 2.5em;
                padding: 5px;
                font-size: 0.7em;
                border-radius: 5px;
                font-weight: bold;
                color: ${colors.darkBlue};
                cursor: pointer;
                border: 2px solid ${colors.darkBlue};
            }

        }

        p, h5 {
            margin-top: 1rem;
        }
    }

    #suppression {
        position: relative;
        margin: 3rem;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 15px;
        border: none;
        background-color: rgba(227,227,227,0.5);
        i {
            margin: 0.5rem;
            color: red;
        }

    }
`