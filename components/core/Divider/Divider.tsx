'use client'
import { Divider, DividerProps } from "primereact/divider"
interface DividerClientProps extends DividerProps{
    children?:React.ReactNode
}
const DividerClient: React.FC<DividerClientProps> = ({ children,...rest }) => {
    return (
        <Divider align="center" pt={
            {
                content: {
                    style: {
                        backgroundColor: 'transparent'
                    }
                }
            }
        } {...rest}>
            {children}
        </Divider>
    )
}
export default DividerClient