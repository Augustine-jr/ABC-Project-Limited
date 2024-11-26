import React, { useState } from 'react';


interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          {value || 'Select an option'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, { onValueChange, setIsOpen })
          )}
        </div>
      )}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;

  setIsOpen?: (isOpen: boolean) => void;
   className?: string;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children, onValueChange, setIsOpen, className }) => (
  <div
    onClick={() => {
      onValueChange?.(value);
      setIsOpen?.(false);
    }}
    className={`cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${className}`}
  >
    {children}
  </div>
);

export const SelectTrigger: React.FC<{ children: React.ReactNode;  className?: string  }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectValue: React.FC<{ placeholder?: string;  className?: string  }> = ({ placeholder, className }) => (
  <span className={className}>{placeholder}</span>
);

export const SelectContent: React.FC<{ children: React.ReactNode;  className?: string  }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
