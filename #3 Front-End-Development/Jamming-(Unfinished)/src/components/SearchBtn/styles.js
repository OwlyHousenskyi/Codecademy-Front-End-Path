import styled from "styled-components";

export const Container = styled.div`
    button {
        margin-top: 25px;
        width: 50%;
        height: 35px;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        color: gray;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
    
    button:hover {
        background-color: #0056b3;
        color: white;
        cursor: pointer;
    }
`;
