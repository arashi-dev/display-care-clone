import React from 'react'

type LogoSvgProps = {
    className?: string;
}

const LogoSvg: React.FC<LogoSvgProps> = ({ className }) => {
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="23" cy="23" r="23" fill="#FF9776" />
            <circle cx="12.6537" cy="25.8211" r="1.88095" fill="white" />
            <path d="M16.5483 29.992C22.702 33.6569 29.662 31.2622 30.5302 24.7364" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
            <path d="M32.4035 20.1783C32.4035 19.1395 31.5614 18.2974 30.5226 18.2974C29.4837 18.2974 28.6416 19.1395 28.6416 20.1783" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
            <line x1="25.8229" y1="15.4763" x2="25.8206" y2="15.474" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
            <line x1="0.666667" y1="-0.666667" x2="0.663367" y2="-0.666667" transform="matrix(-0.707107 0.707107 0.707107 0.707107 37.1062 15.4763)" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
            <line x1="29.3083" y1="13.3215" x2="29.3083" y2="13.8691" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
            <line x1="33.0707" y1="13.3215" x2="33.0707" y2="13.8691" stroke="white" stroke-width="1.33333" stroke-linecap="round" />
        </svg>
    )
}

export default LogoSvg