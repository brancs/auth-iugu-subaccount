import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function DashboardNav() {
  const activeClassName = "btn-primary";
  const inactiveClassName = "btn-light";
  const defaultClassName = "btn text-start";

  const handleActive = (isActive:boolean) => isActive ? `${defaultClassName} ${activeClassName}` : `${defaultClassName} ${inactiveClassName}`

  return (
    <Stack gap={3}>
      <h3 className="mt-4">
        Subaccount.io 
      </h3>
      <NavLink to={'/'} className={({isActive}) => handleActive(isActive)} end>
        Início
      </NavLink>
      <NavLink to={'/settings'} className={({isActive}) => handleActive(isActive)}  >
        Configurações
      </NavLink>
    </Stack>
  )
}