import styled from "styled-components";

const ListaSuspensa = ()=> {

    const Label = styled.label`
        display:block;
        font-weight: 600;
        font-family: "Arial", sans-serif;
        margin-bottom: .5rem;
    `

    const Select = styled.select`
        padding: 1rem;
        width: 100%;
        outline: none;
        border-radius: 5px;
        border: none;
    `

    const times = [
        'Front-end',
        'Back-end',
        'Data-Science',
        'DevOps'
    ]

    return(
        <div>
            <Label>Time</Label>
            <Select>
                <option></option>
                {times.map( time => <option>{time}</option>)}
            </Select>
        </div>
    )
}

export default ListaSuspensa;