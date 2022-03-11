import styled from 'styled-components';
import ArticleCreation from '../components/ArticleCreation';
import { colors } from '../styles/util.style'

export const StyledArticleCreation = styled(ArticleCreation)`
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px auto;
    gap: 10px;
    padding: 15px;
    background: rgba(227, 227, 227, 0.7);
    border-radius: 10px;

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        .userPost {
            display: flex;
            align-items: flex-start;
            img {
                width: 70px;
                margin: 0 2px;
                clip-path: circle(40% at center);
            }
            #text {
                width: 100%;
                padding: 0.5rem;
                font-size: 1.1em;
                margin: 5px 0 5px 5px;
                min-width: 70px;
                min-height: 60px;
                max-height: 200px;
                border-radius: 10px 10px 0 10px;
                resize: vertical;
            }
        }
        .header__btn {
                display: flex;
                justify-content: flex-end;

                .btn {
                    padding: 10px;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                }

                .btn-envoi {
                    background-color: ${colors.darkBlue};
                    color: white;
                    margin-left: 10px;
                }

                .btn-image {
                    color: ${colors.darkBlue};
                    border: 1px solid ${colors.darkBlue};
                }
        }
        
        #file {
            display: none
        }

        #submit {
            display: none;
        }
    }

    #imageArticle {
        max-height: 200px;
        max-width: 200px;
    }
`