import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ResponsiveSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function ResponsiveSection({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullWidth = false,
}: ResponsiveSectionProps) {
  return (
    <section 
      id={id} 
      className={`
        relative py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      <div className={fullWidth ? "w-full max-w-full" : "max-w-6xl mx-auto"}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

interface ResponsiveCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function ResponsiveCard({ 
  children, 
  className = "", 
  glow = false,
  hover = true 
}: ResponsiveCardProps) {
  return (
    <div
      className={`
        glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8
        ${glow ? "glow-ring" : ""}
        ${hover ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface ResponsiveGridProps {
  children: ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

export function ResponsiveGrid({ 
  children, 
  cols = { default: 1, sm: 2, lg: 3 },
  gap = "gap-4 md:gap-6",
  className = "" 
}: ResponsiveGridProps) {
  const getGridCols = () => {
    const base = cols.default || 1;
    const smVal = cols.sm ? `sm:grid-cols-${cols.sm}` : "";
    const mdVal = cols.md ? `md:grid-cols-${cols.md}` : "";
    const lgVal = cols.lg ? `lg:grid-cols-${cols.lg}` : "";
    const xlVal = cols.xl ? `xl:grid-cols-${cols.xl}` : "";
    
    // Build inline styles for responsive columns
    return {
      gridTemplateColumns: `repeat(${base}, minmax(0, 1fr))`,
    };
  };

  return (
    <div 
      className={`grid ${gap} ${className}`}
      style={getGridCols()}
    >
      {children}
    </div>
  );
}

interface ResponsiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export function ResponsiveButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  fullWidth = false,
}: ResponsiveButtonProps) {
  const variants = {
    primary: "btn-luxury text-white",
    secondary: "bg-secondary hover:bg-secondary/80 text-foreground",
    ghost: "hover:bg-secondary/50 text-foreground",
    danger: "bg-destructive/20 hover:bg-destructive/30 text-destructive",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2.5 text-base rounded-xl",
    lg: "px-6 py-3 text-lg rounded-2xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-semibold transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

interface ResponsiveInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  required?: boolean;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
  icon?: ReactNode;
}

export function ResponsiveInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  label,
  error,
  className = "",
  icon,
}: ResponsiveInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-muted-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            w-full rounded-xl bg-secondary/70 px-4 py-3 
            outline-none focus:ring-2 ring-primary transition
            disabled:opacity-50 disabled:cursor-not-allowed
            ${icon ? "pl-10" : ""}
            ${error ? "ring-destructive" : ""}
          `}
        />
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

interface ResponsiveTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  error?: string;
  rows?: number;
  className?: string;
}

export function ResponsiveTextarea({
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  label,
  error,
  rows = 4,
  className = "",
}: ResponsiveTextareaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-muted-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          w-full rounded-xl bg-secondary/70 px-4 py-3 
          outline-none focus:ring-2 ring-primary transition
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
          ${error ? "ring-destructive" : ""}
        `}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

interface ResponsiveSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ResponsiveSelect({
  value,
  onChange,
  options,
  label,
  required = false,
  disabled = false,
  className = "",
}: ResponsiveSelectProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-muted-foreground">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl bg-secondary/70 px-4 py-3 outline-none focus:ring-2 ring-primary transition disabled:opacity-50"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-secondary/50 rounded-lg ${className}`} />
  );
}

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };
  
  return (
    <div className={`${sizes[size]} border-2 border-primary/30 border-t-primary rounded-full animate-spin`} />
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}