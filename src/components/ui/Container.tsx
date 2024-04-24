import { ReactNode } from "react"

interface ContainerProps {
    children :ReactNode
}
const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-1">
        {children}
    </div>
  )
}

export default Container