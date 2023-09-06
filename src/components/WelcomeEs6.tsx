interface Props {
    firstName: string,
    lastName: string,
    age: number,
    isDrivingAllowed: boolean
}
const WelcomeEs6 = (props: Props) => {
    return (
        <div>
            <h3 style={{backgroundColor: 'aqua'}}>
                Welcome {props.firstName} {props.lastName} to the world of React with Typescript! (ES6)</h3>
            <h4>Your age is {props.age}</h4>
            <h2>{props.isDrivingAllowed ? `Your age is ${props.age} and are you allowed for Driving` :
                `Your are not allowed for Driving`}</h2>
        </div>
    )
}

export default WelcomeEs6;