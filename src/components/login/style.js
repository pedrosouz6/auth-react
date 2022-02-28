import Style from "styled-components";

export const Section = Style.section `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    .container {
        width: 350px;
        height: auto;
        padding: 30px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 15px rgb(190, 190, 190);
    }

    h1 {
        display: inline-block;
        margin-bottom: 1.5rem;
        color: rgb(14, 90, 231);
        font-size: 20pt;
        border-bottom: 3px solid rgb(14, 90, 231);
    }

    form input {
        display: block;
    }

    input {
        width: 100%;
        height: 40px;
        margin-bottom: 1.5rem;
        border-radius: 3px;
        padding: 0 10px;
        background: rgb(235, 235, 235);
        transition: background .3s ease-in-out;
        letter-spacing: .3px;
    }

    input:focus {
        border: 1px solid rgb(14, 90, 231);
        background: rgb(245, 245, 245);
    }

    input:last-child {
        margin-bottom: 0;
        background: rgb(14, 90, 231);
        color: white;
        font-size: 11pt;
        letter-spacing: .5px;
        cursor: pointer;
    }

    input:last-child:hover {
        background: rgba(14, 90, 231, .9);
    }

    p {
        text-align: center;
        margin-bottom: 1.5rem;
    }
`