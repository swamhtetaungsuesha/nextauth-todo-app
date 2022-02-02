import styled, { createGlobalStyle } from "styled-components";


export const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    text-align: center;
    box-shadow: 0px 0px 8px 3px #888888;
    min-width: 450px;
    border-radius : 5px;
    background-color:rgb(97,92,97,0.7);
    border: 3px solid #514C4B;
    .title {
        text-transform: uppercase;
        background-image: linear-gradient(to left, #130912,#030026,#3d1c33,#602749,#8a0116,#42331e);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        font-family : 'KaYin2014'
    }
   .login {
       letter-spacing: 2px;
        font-size : 30px;
        font-weight: 600;
        color: #68330d;
        font-family: 'Ink Free';
        margin-bottom: 5px;
    }
`