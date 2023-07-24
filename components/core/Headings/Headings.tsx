import { ALBERT_SANS_500 } from 'constant/fonts';
import React from 'react';

export const H1: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <h1
            className={`${ALBERT_SANS_500.className} text-3xl font-bold ${className}`}
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
            className={`${ALBERT_SANS_500.className} text-2xl font-bold ${className}`}
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
            className={`${ALBERT_SANS_500.className} text-xl font-bold ${className}`}
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
            className={`${ALBERT_SANS_500.className} text-lg font-bold ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};
