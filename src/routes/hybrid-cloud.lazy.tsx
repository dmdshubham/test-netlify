import { createLazyFileRoute } from '@tanstack/react-router'
import { HybridClouds } from '../pages/HybridClouds'

export const Route = createLazyFileRoute('/hybrid-cloud')({
  component: HybridClouds,
})
