import styled from "styled-components";
import Comment from '../components/Comment';
import { colors } from '../styles/util.style';

export const StyledComment = styled(Comment)`
    list-style: none;
    display: flex;
    padding: 5px;
    /* background: rgba(51, 51, 97, 0.2); */
    border-radius: 10px;
    margin: 5px 0;

    img {
        width: 40px;
        clip-path: circle(40% at center);
        align-self: flex-start;
        margin: 5px 5px 0 0;
    }

    .containComment {
        display: flex;
        flex-direction: column;
        width: 100%;

        .containComment_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            

            .containComment_header-info {
                display:flex;
                flex-direction: column;
            }
            .containComment_header-btn {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 80px;

                button {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 80px;
                    height: 2.5em;
                    padding: 5px;
                    font-size: 0.7em;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .suppBtn {
                    background-color: lightgray;
                    border: 1px solid ${colors.darkBlue}; 
                }

                .modifBtn {
                    border: 2px solid ${colors.darkBlue}; 
                }
            }
        }

        .timeComment {
            font-size: 0.9em;
            font-style: italic;
        }

        .commentaire {
            margin: 10px 0;
            padding: 5px;
            font-family:  'Raleway', sans-serif;
            white-space: pre-line;
            background: rgba(227, 227, 227, 0.5);
            border-radius: 5px;
        }

        .ModifCommentMode {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 100%;

            .modif {
            padding: 5px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            max-width: 100%;
            resize: vertical;
            }
            div {
                justify-content: flex-end;
                button {
                    font-size: 1rem;
                    border-radius: 10px;
                    padding: 5px;
                    border: none;
                    cursor: pointer;
                    margin-left: 10px;

                    :hover {
                        transform: scale(1.1);
                    }
                }

                .validerComment {
                    color: white;
                    background-color: ${colors.darkBlue};
                    border: 1px solid white;
                }
                .annulerComment {
                    color: ${colors.darkBlue};
                    background-color: lightgray;
                    border: 1px solid ${colors.darkBlue};
                }
            }

        }
    }
`