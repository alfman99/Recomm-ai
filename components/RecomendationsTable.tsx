import { Table } from "@mantine/core"
import RecRow from "./RecomendationsRow"
import { RecRowProp } from "./RecomendationsRow";

const Taula = (props:any) => {
    const elements:  RecRowProp[] | null = props.data ;

    console.log(elements)

    return (
        <Table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>                    
            </tr>       
            </thead>
            <tbody>
              {/*elements != null && elements.map((element, index) => {
                return <RecRow key={index} {...element}/>
              })*/}
            </tbody>
        </Table>
    )

}
export default Taula