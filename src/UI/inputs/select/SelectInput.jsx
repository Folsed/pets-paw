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
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: 10,
                        backgroundColor: 'var(--background-color)',
                        border: '2px solid transparent',
                        borderColor: 0,
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#F8F8F7',
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
                        color: 'var(--grey-color)',
                    }),
                    dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        padding: 0,
                    }),
                }}
            />
        </div>
    )
}

export default SelectInput
