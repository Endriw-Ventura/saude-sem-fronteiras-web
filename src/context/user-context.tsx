import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'
import axios from 'axios'
import { useState } from 'react'

interface ProviderProps {
    children: ReactNode
}

