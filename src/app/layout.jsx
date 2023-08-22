import Navigation from '@/components/common/navigation/Navigation'
import './globals.css'
import { Jost } from 'next/font/google'
import Providers from '@/providers/Providers'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
    title: 'PetsPaw',
    description: 'Because everyday is a Caturday.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={jost.className}>
                <Providers>
                    <div className='content'>
                        <section className='navigation'>
                            <Navigation />
                        </section>
                        <section className='dynamic-wrapper'>
                            {children}
                        </section>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
