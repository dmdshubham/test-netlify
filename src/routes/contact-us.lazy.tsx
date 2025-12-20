import { createLazyFileRoute } from '@tanstack/react-router'
import ContactUs from '../pages/ContactUs'

export const Route = createLazyFileRoute('/contact-us')({
  component: () => <ContactUs />,
})
