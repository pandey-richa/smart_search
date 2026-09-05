import styled from "styled-components";

export const SearchFilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin: auto;    
    width:80%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    input{
        padding: 8px;
        width:90%;
        margin:6px;
        outline: none;
        border: 1px solid #efe3e3;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px; 
        font-size: 16px;  
    }
    
    button{
        height: 40px;
        margin:10px;
        outline: none;
        background:none;  
        border: none;
        cursor: pointer;

        *{
            font-size:30px;
        }
    }
    
`;