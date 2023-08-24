'use client'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const Providers = ({ children }) => {
    const [queryClient] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false,
                },
            },
        })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers
