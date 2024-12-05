import styled from "styled-components";

export const Container = styled.div`
    input {
        border-radius: 50px;
        width: 75%;
        height: 50px;
        border: none;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 18px;

        @media screen and (min-width: 768px) {
            width: 50%;
        }
    }
`