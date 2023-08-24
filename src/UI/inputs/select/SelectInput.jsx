import React, { useState } from 'react'
import Select from 'react-select'

const SelectInput = ({
    options,
    placeholder,
    value,
    setValue,
    isLoading,
}) => {
    const labels = options.map((item) => ({
        value: item.id,
        label: item.name,
    }))

    const noneOption = {
        value: '',
        label: 'All breeds',
    }

    return (
        <Select
            id='selectbox'
            instanceId='selectbox'
            options={[noneOption, ...labels]}
            isLoading={isLoading}
            // placeholder={placeholder}
            defaultValue={noneOption}
            value={value}
            isSearchable={false}
            onChange={(val) => setValue(val)}
        />
    )
}

export default SelectInput
