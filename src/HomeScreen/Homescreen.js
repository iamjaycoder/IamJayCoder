import React, { useState } from 'react'
import styled from 'styled-components'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import img from "./HomeScreenImage/1.png"
import img1 from "./HomeScreenImage/2.jpg"
import img2 from "./HomeScreenImage/3.jpg"
import img3 from "./HomeScreenImage/4.jpg"
import img4 from "./HomeScreenImage/5.jpg"
import img5 from "./HomeScreenImage/6.jpg"



const Homescreen = () => {

    const [image, setImage] = useState(img)

    const [myImage, setMyImage] = useState([
        img1, img2, img3, img4, img5
    ])

    const [dummyText, setDummyText] = useState([
        "Elijah", "Jay", "Damlola"
    ])

    const [text, setText] = useState("")

    const ImageUpload = (e) => {
        const file = e.target.files[0]
        const saveImage = URL.createObjectURL(file)
        setImage(saveImage)
    }

    const AddData = () => {
        setMyImage([...myImage, image])
        setDummyText([...dummyText, text ])
        setText("")
    }

    const [page, setPage] = useState(0)

    const Next = () => {
        setPage(page + 1)
    }

    const Prev = () => {
        if(page<0) {
            setPage(text.length)
        }else {
            setPage(page - 1)
        }
    }

    return (
       <Container>
           <Wrapper>
               <Upload>
                   <Image src={image}/>
                   <InputFile type="file"
                   onChange={ImageUpload}/>
               </Upload>
               <InputWrapper>
                    <Input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }} />
                    <Button onClick={AddData}>Submit</Button>
               </InputWrapper>
               <OutputWrapper>
                   <TextOutput>{dummyText[page % dummyText.length]}</TextOutput>
                   <Output>
                       <Icons><BiLeftArrow onClick={Prev}/></Icons>
                       <ImageOut src={myImage[page % myImage.length]} />
                       <Icons><BiRightArrow onClick={Next}/></Icons>
                   </Output>
               </OutputWrapper>
           </Wrapper>
       </Container>
    )
}

export default Homescreen

const Container = styled.div`
 color: white;
 width: 100%;
 height: 100%;
 min-height: 100vh;
 padding-top: 100px;
 display: flex;
justify-content: center;
`;
const Wrapper = styled.div`
width: 600px;
color: white;
height: 650px;
border: 1px solid crimson;
border-radius: 10px;


`;
const Upload = styled.div`
margin: 10px;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 70px;
`;
const Image = styled.img`
 width: 100px;
 height: 100px;
 border-radius: 50%;
 background-color: crimson;
 object-fit: cover;
`;
const InputFile = styled.input`
width: 300px;
height: 40px;
border-radius: 3px;
padding: 0 10px;
border: 0;
outline: none;
`;

const InputWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`;
const Input = styled.input`
margin-bottom: 12px;
width: 300px;
height: 40px;
border-radius: 5px;
border: 0;
outline: none;
padding: 0 10px;
color: teal;
`;

const Button = styled.button`
width: 150px;
height: 40px;
border-radius: 5px;
border: 0;
outline: none;
text-decoration: uppercase;
background-color: teal;
color: white;
font-weight: bold;
font-size: 20px;
tranform: scale(1);
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: scale(1.2);
}
`;

const OutputWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const TextOutput = styled.div`
margin-bottom: 30px;
`;

const Output = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ImageOut = styled.img`
width: 300px;
height: 190px;
background-color: teal;
border-radius: 10px;
object-fit: cover;
margin: 0 50px;

`;

const Icons = styled.div`
font-weight: bold;
font-size: 40px;
color: crimson;
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;
transform: scale(1);
transition: all 350ms;

:hover{
    background-color: teal;
    color: white;
    transform: scale(1.2);
}
`;
