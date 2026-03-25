import React from 'react';
import { cn } from '../lib/utils';

interface UserAvatarProps {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: (e: React.MouseEvent) => void;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ 
  firstName = '', 
  lastName = '', 
  fullName,
  className,
  size = 'md',
  onClick
}) => {
  let displayInitials = '';
  let nameForColor = '';

  if (fullName) {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      displayInitials = `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
    } else if (parts.length === 1) {
      displayInitials = parts[0].charAt(0).toUpperCase();
    }
    nameForColor = fullName;
  } else {
    displayInitials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    nameForColor = `${firstName} ${lastName}`;
  }
  
  const sizeClasses = {
    xs: 'w-6 h-6 text-[8px]',
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-12 h-12 text-sm',
    xl: 'w-24 h-24 text-2xl',
  };

  // Generate a consistent background color based on the name (SAP standard palette)
  const getBackgroundColor = (name: string) => {
    const colors = [
      'bg-[#E5F0FF] text-[#0070F2]', // Blue
      'bg-[#E7F4E9] text-[#107E3E]', // Green
      'bg-[#FFF4E5] text-[#E9730C]', // Orange
      'bg-[#F2EAF2] text-[#925696]', // Purple
      'bg-[#FFEBEB] text-[#BB0000]', // Red
      'bg-[#F2F2F2] text-[#32363A]', // Grey
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const colorClass = getBackgroundColor(nameForColor);

  return (
    <div 
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center font-bold shrink-0",
        sizeClasses[size],
        colorClass,
        onClick && "cursor-pointer",
        className
      )}
    >
      {displayInitials}
    </div>
  );
};
