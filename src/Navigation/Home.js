import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
       <Container>
           <Wrapper>
               <h1>Welcome To My Zone!</h1>
            </Wrapper>
            <Wrapper>
                <h2>Am JayCoder, and this is my home!</h2>
            </Wrapper>
       </Container>
    )
}

export default Home

const Container = styled.div`


`
const Wrapper = styled.div`
color: grey;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;


`



