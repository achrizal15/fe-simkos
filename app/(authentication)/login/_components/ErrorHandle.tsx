'use client'
import { Messages, MessagesMessage } from "primereact/messages"
import { useEffect, useRef } from "react"


const ErrorHandle = ({data}:{data:MessagesMessage|null}) => {
    const msg = useRef(null)
    useEffect(() => {
        const message: MessagesMessage = { sticky: true, severity: 'error', summary: 'Error', detail: 'Invalid credentials', closable: false, life: 10,...data }
        msg.current.show(message)
    }, [])

    return <div className="text-red-700 font-semibold">
        <Messages ref={msg} />
    </div>

}
export default ErrorHandle