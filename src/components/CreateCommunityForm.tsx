import axios from "axios";
import React, { useState } from "react";
import { styled } from "styled-components";

interface CreateCommunityProps {
  communityName: string;
  about: string;
}

interface UserId {
  userId: string;
  handleClick: () => void;
}
const CreateCommunityForm = ({ userId, handleClick }: UserId) => {
  const [details, setDetails] = useState<CreateCommunityProps>({
    communityName: "",
    about: "",
  });
  console.log(details);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:3005/community/createCommunity/${userId}`,
      { communityName: details.communityName, about: details.about }
    );
    if (response.status === 201) {
      handleClick();
    }
    console.log(response);
  };

  return (
    <CreateForm onSubmit={handleFormSubmit}>
      <button className="close" onClick={handleClick}>
        &times;
      </button>
      <label htmlFor="communityName">Community Name</label>
      <input
        type="text"
        name="communityName"
        id="communityName"
        onChange={handleInputChange}
      />
      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        cols={30}
        rows={10}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Submit</button>
    </CreateForm>
  );
};

export default CreateCommunityForm;

//communityName, about

const CreateForm = styled.form`
  border: 1px solid #6821c3;
  background: #fff;
  display: flex;
  flex-direction: column;
  //   justify-content: space-around;
  width: 40vw;
  //   height: 80vh;
  padding: 1rem;
  input {
    margin-bottom: 2rem;
    padding: 0.5rem;
  }

  textarea {
    padding: 0.5rem;
  }

  button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: #6821c3;
    color: #fbf8ff;
    border: 1px solid #6821c3;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.75rem;
    padding: 0.5rem;
    cursor: pointer;
  }

  .close {
    margin-left: -1rem;
    margin-top: -1rem;
    background-color: transparent;
    color: #6821c3;
    border: none;
    font-size: 1.5rem;
  }
`;
