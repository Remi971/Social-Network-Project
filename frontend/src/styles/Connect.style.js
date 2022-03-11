import styled from 'styled-components';
import Connect from '../components/Connect';
import { colors } from './util.style';

export const StyledConnect = styled(Connect)`
    position: relative;
    width: 100vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;


    .switchContainer {
        padding: 1rem;
        margin: 1rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .switch {
                position: relative;
                top: 0;
                padding: 0.5rem;
                background: ${colors.orange};
                margin: 10px 0;
                color: white;
                border-radius: 15px;
                width: 100px;
                text-align: center;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
    }
    .pre_container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .container {
            width: 100%;
            max-width: 600px;
            background: ${colors.bgLight};
            border: 2px solid white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; 
            
            
    
            form {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                
                p {
                    position: relative;
                    margin: 0 auto;
                    top: -2.5rem;
                    text-align: center;
                    padding: 0.5rem;
                    background: ${colors.bgLight};
                    border-radius: 10px;
                    color: ${colors.darkBlue};
                    border: 2px ${colors.darkBlue} solid;
                    width: 120px;
                }
    
                img {
                    max-width: 320px;
                    max-height: 200px;
                    width: 100%;
                    align-self: center;
                    margin-bottom: 1rem;
                }
                div {
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 1rem;
                    background: white;
                    border-radius: 10px;
                    padding: 0.5rem;
    
                    i {
                        font-size: 1.5rem;
                        border-right: 1px black solid;
                        padding: 10px;
                        color: ${colors.darkBlue};
                        text-align: center;
                    }
    
                    input {
                        border: none;
                        margin-left: 5px;
                        padding: 10px;
                        width: max-content;
                        display: inline-block;
                        font-size: 1rem;
                        background-color: transparent;
                        width: 100%;
                    }

                    input:invalid {
                        border: 1px solid red;
                    }

                    input:valid {
                        border: 1px solid green;
                    }
    
                }
    
                #ButtonStyle {
                    width: 100%;
                }
            }
    
        }
    }
`