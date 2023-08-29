import { ButtonBase } from "@mui/material"
import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

type NavItemProps = PropsWithChildren & {
  to: string
}

export default function NavItem({ children, to }: NavItemProps) {
  return (
    <ButtonBase
      variant="contained"
      LinkComponent={Link}
      to={to}
      sx={{
        color: "white",
        height: "3rem",
        justifyContent: "start",
        paddingLeft: 4,
        fontSize: 20,
        margin: 0.5,
        borderRadius: 3,
      }}
    >
      {children}
    </ButtonBase>
  )
}