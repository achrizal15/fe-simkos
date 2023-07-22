import React, { ButtonHTMLAttributes } from 'react';
import styles from '@/components/core/Button/button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    children,
    ...rest
}) => {
    const buttonStyles = `${styles.button} ${styles[variant]} ${className}`;
    return (
        <button className={buttonStyles} {...rest}>
            {children}
        </button>
    );
};

export default Button;
