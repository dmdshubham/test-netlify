import { createLazyFileRoute } from '@tanstack/react-router'
import Construction from '../pages/Construction'

export const Route = createLazyFileRoute('/construction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Construction />
}
