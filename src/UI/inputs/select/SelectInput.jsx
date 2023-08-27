import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styles from './select.module.css'

const SelectInput = ({
    options,
    value,
    setValue,
    isLoading,
    defaultValue,
    styles,
    title,
    white,
    className
}) => {
    return (
        <div style={styles} title={title}>
            <Select
                id='selectbox'
                instanceId='selectbox'
                defaultValue={defaultValue}
                options={options}
                isLoading={isLoading}
                value={value}
                isSearchable={false}
                onChange={(val) => setValue(val)}
                className={className}
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: 10,
                        backgroundColor: white
                            ? 'var(--box-color)'
                            : 'var(--background-color)',
                        border: '2px solid transparent',
                        borderColor: 0,
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: white
                                ? 'var(--box-color)'
                                : 'var(--background-color)',
                            border: '2px solid #FBE0DC',
                        },
                        width: 'inherit',
                        minHeight: '40px',
                        padding: 0,
                        fontSize: 16,
                    }),
                    valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        padding: '0px 5px',
                        alignItems: 'end',
                    }),
                    indicatorSeparator: (baseStyles) => ({
                        padding: 0,
                    }),
                    valueContainer: (baseStyles) => ({
                        ...baseStyles,
                        padding: '0 5px',
                    }),

                    singleValue: (baseStyles) => ({
                        ...baseStyles,
                        color: white
                            ? 'var(--dark-color)'
                            : 'var(--grey-color)',
                    }),
                    dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        padding: 0,
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: white
                            ? 'var(--box-color)'
                            : 'var(--background-color)',
                        color: white
                            ? 'var(--dark-color)'
                            : 'var(--grey-color)',
                    }),
                }}
            />
        </div>
    )
}

export default SelectInput
