
export interface RecRowProp {
    image: string;
    name: string;
    price: number;
}

const RecRow = ({ image,name, price} : RecRowProp) => {
    return(
        <tr>
            <td>{image}</td>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
} 

export default RecRow
