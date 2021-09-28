import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
       <Container>
           <Wrapper>
                <Logo>JAY CODER</Logo>
                <Links>
                <MyLink to="/">Home</MyLink>
                <MyLink to="/about">About</MyLink>
                <MyLink to="/settings">Setting</MyLink>
                <MyLink to="/contact">Contact</MyLink>
                </Links>
                
           </Wrapper>
       </Container>
    )
}

export default Nav

const Links = styled.div`
display:flex;
`
const Logo = styled.div`
margin-right:50px;
height:50px;
display: flex;
align-items:center;
padding:0 10px;
font-size:20px;
font-family:cursive;
color:white;
`
const MyLink = styled(Link)`
margin:0 10px;
color:white;
text-decoration:none;
font-size: 18px;
transition:all 350ms;
transform:scale(1);
:hover {
    color:grey;
    transform:scale(1.05)
}
`
const Container = styled.div`
width:100%;
height:80px;
background:teal;

`
const Wrapper = styled.div`
display:flex;
align-items:center;
width:100%;
height:80px;
justify-content:space-between

`
