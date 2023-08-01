import styled from 'styled-components'

import  BgBody  from '../../assets/img/bg01.jpg'


export const  ContainterContact = styled.div`

width: 100%;
height: 900px;
display:flex;
align-items:center;
flex-direction:column;
padding-top: 100px;
gap:20px;
color: #fff;
background-image: url(${BgBody});



`

export const TitleContact = styled.div`

display: flex;
align-items:center;
justify-content: center;
margin-bottom: 20px;



`


export const ContainerContactform = styled.div`
  background:  #fff 0.38;
  width: 500px;
  height: 389px;
  margin-top: 100px;
  flex-shrink: 0;
  border-radius: 10px;
  padding-top: 30px;
  box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -moz-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  
  
`

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const InputContact = styled.input`
  margin-bottom: 15px;
  padding: 8px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 8px;
  font-size: 16px;
`;

export const SubmitButtonContact = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`