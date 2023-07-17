import React, { forwardRef } from 'react'

type ContainerProps = React.PropsWithChildren<{
    className?: string;
    style?: React.CSSProperties;
}>

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className = "", style }, ref) => {
    return (
        <div
            ref={ref}
            className={`w-full px-[6vw] ${className}`}
            style={style}
        >{children}</div>
    )
})

Container.displayName = "Container"

export default Container