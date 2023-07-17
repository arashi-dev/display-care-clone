import React from 'react'

type ContainerProps = React.PropsWithChildren<{
    className?: string;
    style?: React.CSSProperties;
}>

const Container: React.FC<ContainerProps> = ({ children, className = "", style }) => {
    return (
        <div
            className={`w-full p-[2vw] ${className}`}
            style={style}
        >{children}</div>
    )
}

export default Container