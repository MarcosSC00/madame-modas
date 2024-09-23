import { ReactNode } from 'react'
import './ProductBubble.css'

interface ProductBubbleProps {
    left: boolean,
    children: ReactNode
}
export function ProductBubble({ children, left }: ProductBubbleProps) {
    return (
        <div className="content-bubble">
            {left ? (
                <div className="product-bubble-left">
                    <span>{children}</span>
                </div>
            ) : (
                <div className="product-bubble-right">
                    <span>{children}</span>
                </div>
            )}
        </div>
    )
} 