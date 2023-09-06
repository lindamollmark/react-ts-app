type ParentOneProps = {
    children: string,
}
const ParentOne = (props: ParentOneProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ParentOne;