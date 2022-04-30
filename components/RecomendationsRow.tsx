
export interface RecRowProp {
    id:number;
    type: string;
    name: string;
    price: number;
    category:number;
}

const RecRow = ({id, name, type, price, category} : RecRowProp) => {
    return(
        <tr>
            <td>{type}</td>
            <td>{name}</td>
            <td>{price} €</td>
        </tr>
    )
} 

export default RecRow
