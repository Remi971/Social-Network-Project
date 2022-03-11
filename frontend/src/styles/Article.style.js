import styled from 'styled-components';
import Article from '../components/Article';
import { colors } from '../styles/util.style';

export const StyledArticle = styled(Article)`
    display: flex;  
    flex-direction: column; 
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    padding: 15px;
    margin: 10px auto;
    background: rgba(227, 227, 227, 0.7);
    border-radius: 10px;

    #info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    .infoContainer {
        display: flex;

        img {
            width: 60px;
            margin-right: 10px;
            clip-path: circle(40% at center);
        }

        .infoContainer_user {
            display:flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            h4 {
                font-size: 1.2em;
            }
    
            p {
                padding: 0;
                }
        }
    }

    .BtnContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 5px;

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

    form {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        /* width: 100%; */
        padding: 5px;
        gap: 5px;

        #modifFile {
            display: none;
        }

        .btn {
            padding: 5px;
            font-size: 1rem;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            margin-left: 10px;

            &:hover {
                transform: scale(1.1);
            }
        }
        .validModif {
            color: white;
            background-color: ${colors.darkBlue};
            border: 1px solid white;
        }
        .annulerModif {
            color: ${colors.darkBlue};
            background-color: lightgray;
            border: 1px solid ${colors.darkBlue};
        }

        #textModify{
            width: 100%;
            max-width: 100%;
            resize: vertical;
            padding: 10px;
            border-radius: 5px;
        }
    }
    #message {
        margin: 10px 0;
        padding: 10px;
        text-align: justify;
        font-family:  'Raleway', sans-serif;
        white-space: pre-line;
        background-color: rgba(227,227,227,0.5);
        border-radius: 5px;
    }

    .article--img {
        max-width: 100%;
        margin: 5px 0;
    }

    #nbCommentaires {
        text-align: right;
    }

    div {
        display: flex;
        justify-content: space-between;

        #btnActiveComment {
            height: 2.5em;
            padding: 5px;
            font-size: 0.7em;
            border-radius: 5px;
            border: 2px solid ${colors.darkBlue}; 
            cursor: pointer;
        }
        .active {
                color: white;
                background-color: ${colors.darkBlue}
            }

    }

    #line {
        margin: 5px 0;
    }

    .postCommentaire {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 40px;
            clip-path: circle(40% at center);
            margin-right: 5px;

        }
        input {
            width: 100%;
            padding: 5px;
            height: 30px;
        }
        button {
            margin-left: 5px;

            i {
                font-size: 1.2em;
                padding: 5px;
            }
        }
    }

`

