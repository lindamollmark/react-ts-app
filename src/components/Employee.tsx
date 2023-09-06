type EmployeeProps = {
    name: string,
    address: {
        city: string,
        country: string,
    }
}
const Employee = (props: EmployeeProps) => {
    return (
        <div>
            {props.name}, is living in {props.address.city}, {props.address.country}
        </div>
    )
}

export default Employee;