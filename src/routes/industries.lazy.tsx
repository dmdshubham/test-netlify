import { createLazyFileRoute } from '@tanstack/react-router'
import Industries from '../pages/Industries'

export const Route = createLazyFileRoute('/industries')({
  component: () => <Industries />,
})
