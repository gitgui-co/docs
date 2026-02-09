import DefaultTheme from 'vitepress/theme'
import type { Router } from 'vitepress'
import './custom.css'
import { initMatomoTracking } from './matomo-tracking'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }: { router: Router }) {
    if (typeof window !== 'undefined') {
      initMatomoTracking(router)
    }
  }
}
