import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <h1> WE GLOBAL!!!</h1>
            </Wrapper>
            <Wrapper>
                <h2>Github - IamJayCoder</h2>
            </Wrapper>
        </Container>
    )
}

export default Contact;

const Container = styled.div``
const Wrapper = styled.div`
color: grey;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;

`
