'use client'
import Backward from '@/components/modules/backward/Backward'
import styles from './page.module.css'
import CatScreen from '@/components/voting/cat-screen/CatScreen'
import CatLogging from '@/components/voting/cat-logging/CatLogging'
import { useState } from 'react'
import LogsContext from '@/providers/LogsProvider'

const VotingPage = () => {
    const [userLogs, setUserLogs] = useState([])

    return (
        <>
            <LogsContext.Provider value={{ userLogs: userLogs, setUserLogs: setUserLogs }}>
                <Backward to={'/'} />
                <CatScreen />
                <CatLogging />
            </LogsContext.Provider>
        </>
    )
}

export default VotingPage
