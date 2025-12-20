import { createLazyFileRoute } from '@tanstack/react-router'
import AboutUs from './../pages/AboutUs'

export const Route = createLazyFileRoute('/about-us')({
  component: About,
})

function About() {
  return <AboutUs />
}
