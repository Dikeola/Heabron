import Link from 'next/link';

const Button = ({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors duration-200';
  const colorStyles = 'bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600 hover:border';
  
  const buttonClasses = `${baseStyles} ${colorStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
