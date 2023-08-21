import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
    title: 'PetsPaw',
    description: 'Because everyday is a Caturday.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={jost.className}>
                <div className='content'>{children}</div>
            </body>
        </html>
    )
}
