import { createLazyFileRoute } from '@tanstack/react-router'
import OurServices from '../pages/Services'

export const Route = createLazyFileRoute('/services')({
  component: () => <OurServices />,
})
