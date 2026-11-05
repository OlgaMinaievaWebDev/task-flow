import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  };
  return (
    <button
      type={type}
      {...rest}
      className={`inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
