import { FaTriangleExclamation } from 'react-icons/fa6'

export function FormError({ message }: { message: string }) {
    return (
        <div className="alert text-sm text-red-400 gap-2 content-center flex border-red-400">
            <FaTriangleExclamation className="flex-shrink-0" />
            <span className="whitespace-normal">{message}</span>
        </div>
    )
}