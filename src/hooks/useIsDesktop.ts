import { useState, useEffect } from 'react'

export const useIsDesktopScreen = (widthThreshold = 768) => {
    const [isDesktopScreen, setIsDesktopScreen] = useState(window.innerWidth >= widthThreshold)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktopScreen(window.innerWidth >= widthThreshold)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [widthThreshold])

    return isDesktopScreen
}
