import React from "react";

type ParentTwoProps = {
    children: React.ReactNode
}

const ParentTwo = (props: ParentTwoProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ParentTwo;