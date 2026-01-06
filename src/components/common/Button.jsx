const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
    const base =
        'inline-flex items-center justify-center rounded font-medium transition focus:outline-none disabled:opacity-50';

    const variants = {
        primary: 'bg-[#3E6EB4]-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
        outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
        ghost: 'text-blue-600 hover:bg-blue-50'
    };

    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
