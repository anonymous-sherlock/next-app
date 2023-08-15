import { BsExclamationTriangleFill } from "react-icons/bs"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AlertProps {
  title: string
  description: string
  width?: string
}
export function AlertDestructive({ title, description, width }: AlertProps) {
  return (
    <Alert
      variant="destructive"
      className={`fixed top-2 right-2  z-50 bg-primary-foreground w-[${width}]`}
    >
      <BsExclamationTriangleFill className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
