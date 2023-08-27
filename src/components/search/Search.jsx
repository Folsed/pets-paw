'use client'
import SearchInput from '@/UI/inputs/search/SearchInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Search = () => {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const onSubmit = (e) => {
        e.preventDefault()
        router.push(`/search?q=${query}`)
    }

    return <SearchInput value={query} setValue={setQuery} onSubmit={onSubmit} />
}

export default Search
