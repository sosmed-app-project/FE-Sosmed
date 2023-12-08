import React, { FC } from 'react';

interface inputLoginProps {
    id: string;
    label?: string;
    name?: string;
    type?: string;
    value?: string;
    icons?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputLogin: FC<inputLoginProps> = ({
    id, label, name, type, value,placeholder, icons, onChange,
}) => {
    return (
        <div className='mt-4'>
            <label htmlFor="email" className='block text-gray-700 font-semibold mb-2'>{label}</label>
            <div className='flex'>
                <span className='inline-flex bg-gray-400 items-center px-3 text-sm border border-r-0 border-gray-300 rounded-l-md'>
                    <img src={icons} alt="icons" />
                </span>
                <input
                    id={id}
                    name={name}
                    type={type}
                    required
                    className='p-2.5 rounded-none rounded-r-lg bg-gray-50 block border border-gray-300 text-gray-900 w-full'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default InputLogin