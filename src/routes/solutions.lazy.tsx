import { createLazyFileRoute } from '@tanstack/react-router'
import Solutions from '../pages/Solutions'

export const Route = createLazyFileRoute('/solutions')({
  component: () => <Solutions />,
})
