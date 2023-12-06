import React, { FC, ReactNode } from 'react'

interface ButtonProps {
    label?: string,
    classname?: string,
    icon?: ReactNode
    onClick?: React.MouseEventHandler
}

const Button: FC<ButtonProps> = ({label, classname, icon, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={`${classname ? `${classname}` : 'text-white'} hover:border-inherit focus:outline-inherit`}> <span>{icon}</span> {label}</button>
    </div>
  )
}

export default Button