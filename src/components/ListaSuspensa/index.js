import styled from "styled-components";

const ListaSuspensa = ({label, times, obrigatorio, valor,aoAlterado})=> {

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
    
    return(
        <div>
            <Label>{label}</Label>
            <Select 
                onChange={(e) => aoAlterado(e.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                <option></option>
                {times.map( time => <option key={time}>{time}</option>)}
            </Select>
        </div>
    )
}

export default ListaSuspensa;