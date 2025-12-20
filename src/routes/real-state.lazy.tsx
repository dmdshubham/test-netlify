import { createLazyFileRoute } from '@tanstack/react-router'
import RealState from '../pages/RealState'

export const Route = createLazyFileRoute('/real-state')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RealState />
}
