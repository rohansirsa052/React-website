
import React from "react";
import styled from "styled-components";


const Wrapper = styled.section`
  padding: 0 0 5rem 0;
  // .map {
  //   margin-top: 2rem;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
 
  
`;

const Container = styled.div`
  width: 100%;
  background: #fff;
  padding: 25px 40px 10px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  /* Background image properties */
  background-image: url("https://wallpapercave.com/dwp2x/wp4863905.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0.9;
 
`;


const Text = styled.div`
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: -webkit-linear-gradient(right, #000000, #9913d9, #0ad4e6, #9900e2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  padding: 30px 0 0 0;
`;

const FormRow = styled.div`
  display: flex;
  margin: 32px 0;
`;

const InputData = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
`;

// const Label = styled.label`
//   position: absolute;
//   pointer-events: none;
//   bottom: 10px;
//   font-size: 16px;
//   transition: all 0.3s ease;
// `;

const Textarea = styled.textarea`
  height: 70px;
  resize: none;
  padding-top: 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
`;


const SubmitBtn = styled.div`
  width: 25% !important;
  padding: 3rem;
  transition: all 0.3s ease 0s;
  
`;



const SubmitInput = styled.input`
  background: none;
  border: solid black;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  border: 2px solid red; /* Corrected border syntax */
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  background: linear-gradient(red, black); /* Corrected background syntax */
  

`;

const Contact = () => {
  return (
    <Wrapper>
          <Container>
        <Text>Feel Free to Contact us</Text>
        <Form action="#">
        // ...

<FormRow>
  <InputData>
    <Input type="text" placeholder="First Name" required />
    <Underline></Underline>
  </InputData>
  <InputData>
    <Input type="text" placeholder="Last Name" required />
    <Underline></Underline>
  </InputData>
</FormRow>
<FormRow>
  <InputData>
    <Input type="text" placeholder="Email Address" required />
    <Underline></Underline>
  </InputData>
  <InputData>
    <Input type="text" placeholder="Website Name" required />
    <Underline></Underline>
  </InputData>
</FormRow>
<FormRow className="Lastrow" style={{ flexDirection: "column" }}>
  <InputData className="textarea">
    <Textarea rows="8" cols="80" placeholder="Write your message" required></Textarea>
    <br />
    <Underline></Underline>
  </InputData>
  <SubmitBtn>
    <SubmitInput type="submit" value="Submit" />
  </SubmitBtn>
</FormRow>

// ...

        </Form>
      </Container>
      
      {/* Second Column - Map */}
    
    </Wrapper>
  );
};

export default Contact;