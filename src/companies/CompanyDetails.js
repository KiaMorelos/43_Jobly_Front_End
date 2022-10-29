import { useParams } from "react-router-dom";

function CompanyDetails(){
    const { company } = useParams()
    return(
        <h1>{ company } component</h1>
    )
}

export default CompanyDetails;