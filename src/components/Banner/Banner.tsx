import './Banner.css'
import { ReactNode } from 'react'

interface BannerProps {
    children: ReactNode
}
export function Banner({ children}: BannerProps) {
    return (
        <div className="content-banner">
            <div className="img-banner">
                <img src="/banner_madame_modas.png" alt="" />
            </div>
            <div className="input-banner">
                {children}
            </div>
        </div>
    )
}