import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    loading = false,
    icon,
    iconPosition = 'left',
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'
    
    const variants = {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg focus:ring-primary-500 active:bg-primary-700',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 active:bg-primary-600',
      secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800 focus:ring-secondary-500 active:bg-secondary-300',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200',
      danger: 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg focus:ring-red-500 active:bg-red-700'
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-sm gap-2',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-3',
      xl: 'px-8 py-4 text-lg gap-3'
    }

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6'
    }

    return (
      <button
        className={cn(
          baseClasses, 
          variants[variant], 
          sizes[size],
          loading && 'cursor-wait',
          'btn-animate',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Content */}
        <div className={cn(
          "flex items-center gap-2",
          loading && "opacity-0"
        )}>
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
            <span className={iconSizes[size]}>
              {icon}
            </span>
          )}
          
          {/* Text */}
          <span>{children}</span>
          
          {/* Right Icon */}
          {icon && iconPosition === 'right' && (
            <span className={iconSizes[size]}>
              {icon}
            </span>
          )}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button