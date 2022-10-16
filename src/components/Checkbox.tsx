import {clsx} from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { ReactNode } from 'react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps) {

  let className = clsx('w-6 h-6 p-[2px] bg-gray-800 rounded',
    {
    
    }
  )

  return (
    <CheckboxPrimitive.Root className={className} {...props}>
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight='bold' className= 'h-5 w-5 text-cyan-500'/>
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
}
