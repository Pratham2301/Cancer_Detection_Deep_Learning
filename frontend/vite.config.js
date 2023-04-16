import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import dotenv from 'dotenv'
// dotenv.config()

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


// https://vitejs.dev/config/

export default defineConfig({
    define: {
        _VALUE_: `"${process.env.VITE_API_URL}"` // wrapping in "" since it's a string
    },
    plugins: [react()],
})