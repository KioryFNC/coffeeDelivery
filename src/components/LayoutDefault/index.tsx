import { Header } from "../Header"
import * as Element from "./styles"
import { Outlet } from "react-router-dom"

export function DefaultLayout() {
  return (
    <Element.Root>
      <Header />
      <Element.Content>
        <Outlet />
      </Element.Content>
    </Element.Root>
  )
}