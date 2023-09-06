type EmployeeListProps = {
    empNames: {
        fname: string,
        lname: string
    }[]
}

const EmployeeList = (props: EmployeeListProps) => {
    return (
        <div>
            <h3> Employee List</h3>
            <ul>
                {props.empNames.map((name) => {
                    return (
                        <li key={name.fname}>
                            {name.fname} {name.lname}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EmployeeList;