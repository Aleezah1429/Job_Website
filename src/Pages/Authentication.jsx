import React from 'react';
import '../App.css'
import { AccountBox } from "../Components/accountBox";
import styled from "styled-components";
import AuthBg from "./../Assests/Authentication_bg.jpg"

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-image:url(${AuthBg});
    // background-image:url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80);
    background-size:cover;
    // padding-bottom:5%;
    // overflow:hidden
  `;


const Authentication = () => {


    return (
        <div style={{backgroundImage:`url(${AuthBg})`,backgroundSize:"cover",height:window.innerHeight}}>
        <AppContainer >
                                <AccountBox />
                            </AppContainer>
                            </div>
    )
}

export default Authentication;