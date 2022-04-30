import { Table } from "@mantine/core"
import RecRow from "./RecomendationsRow"
import { RecRowProp } from "./RecomendationsRow";

const Taula = (props:any) => {
    const elements:  RecRowProp[] = props.data ;

    return (
        <Table striped highlightOnHover>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price[€]</th>                    
            </tr>       
            </thead>
            <tbody>
            {elements && elements.map((element, index) => {
            return <RecRow  key={index} {...element}/>
            })}
            </tbody>
        </Table>
    )

}
export default Taula