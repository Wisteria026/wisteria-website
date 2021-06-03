import styled from "styled-components";
import { useState } from "react";

import Content from "../global/content";

import Fortress from "../../img/fortress.jpeg";

const Contact = ({ lang, colors }) => {
  const [elements, setElements] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElements((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(elements));
  };

  return (
    <ContactContainer colors={colors}>
      <h1>Pisite nam!</h1>
      <BackgroundImg background={Fortress}></BackgroundImg>
      <FormContainer colors={colors}>
        <form onSubmit={handleSubmit}>
          <div className="group-elements">
            <input name="name" value={elements.name} onChange={handleChange} />
            <label>Name</label>
          </div>
          <div className="group-elements">
            <input
              name="email"
              value={elements.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="group-elements">
            <input
              name="phone"
              value={elements.phone}
              onChange={handleChange}
            />
            <label>Phone</label>
          </div>
          <div name="message" className="group-elements">
            <textarea value={elements.message} onChange={handleChange} />
            <label>Message</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin-top: 150px;
  width: 100%;
  min-height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
    color: black;
  }
`;

const FormContainer = styled(Content)`
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    border: 3px solid ${(props) => props.colors.lightBrown};
    padding: 4rem 10rem;
    display: flex;
    flex-direction: column;

    button {
      padding: 1rem 3rem;
      font-size: 18px;
      border: 1px solid black;
      background: (0, 0, 0, 0.4);
      cursor: pointer;
      position: relative;
      margin: 0 auto;
    }

    button:hover {
      border: 1px solid rgb(216, 194, 157);
      font-weight: bold;
      background: white;
    }
  }

  .group-elements {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    input {
      width: 200px;
      border-bottom: 1px solid black;
      border-left: none;
      border-right: none;
      border-top: none;
      background: transparent;
    }
    textarea {
      border-bottom: 1px solid black;
      border-left: none;
      border-right: none;
      border-top: none;
      background: transparent;
      height: 100px;
      width: 300px;
      resize: none;
    }
  }
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  opacity: 0.5;
`;
