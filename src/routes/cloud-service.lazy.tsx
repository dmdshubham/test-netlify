import { createLazyFileRoute } from '@tanstack/react-router'
import { CloudServices } from '../pages/CloudServices'

export const Route = createLazyFileRoute('/cloud-service')({
  component: CloudServices,
})
