import styled from "styled-components";

export const Wrapper = styled.div`
 display : flex;
 justify-content : space-between;
 max-width : 900px;
 margin : 0 auto;
 background-color: rgb(97,92,97,0.95);
 padding: 0px 10px;
 border-bottom-left-radius: 5px;
 border-bottom-right-radius: 5px;
 .logo-gp{
     display : flex;
     justify-content: space-between;
     align-items : center;
     text-align : center;
     h2{
        font-family : 'KaYin2014';
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        background-image: linear-gradient(to left, #130912,#030026,#3d1c33,#602749,#8a0116,#42331e);
        margin : 0px;
     };
 }
    .user-gp{
        display : flex;
        align-items : center;
        
        .img-wrapper{
            max-width: 40px;
            max-height: 40px;
            overflow: hidden;
            border-radius: 50%;
            border: 3px solid #fc4e03;
            display: flex;
            justify-content: center;
            align-items : center;
            img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
        }
        .user-name{
            font-size: 18px;
            font-family:'Ink Free';
            font-weight: 600;
            color:#fc4e03;
            padding-right: 10px;
            padding-left: 5px;
        };
        .logOut-btn{
            padding: 10px 20px;
            background-color: transparent;
            color: #ffffff;
            border: 3px solid #fc4e03;
            border-radius: 5px;
            cursor: pointer;

        }
    }
`