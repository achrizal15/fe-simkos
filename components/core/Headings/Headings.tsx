import { ALBERT_SANS_500 } from 'constant/fonts';
import React from 'react';

export const H1: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-4xl leading-relaxed; ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
export const H2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-3xl  leading-relaxed; ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
export const H3: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-2xl  leading-relaxed; ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
export const H4: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-xl  leading-relaxed; ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
export const H5: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-lg   leading-relaxed; ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
