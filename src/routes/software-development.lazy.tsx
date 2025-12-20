import { createLazyFileRoute } from '@tanstack/react-router'
import SoftwareDevelopment from '../pages/SoftwareDevelopment'

export const Route = createLazyFileRoute('/software-development')({
  component: SoftwareDevelopment,
})
