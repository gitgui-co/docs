/**
 * Enhanced Matomo tracking for Gitux landing site.
 *
 * Tracks:
 *  - SPA page views (VitePress client-side navigation)
 *  - Hero CTA button clicks
 *  - CTA section button clicks (bottom of pages)
 *  - Download / pricing link clicks anywhere on the site
 *  - Outbound link clicks (GitHub releases, etc.)
 *  - Video engagement (play, pause, ended, 25/50/75% progress)
 *  - Scroll depth milestones (25%, 50%, 75%, 100%)
 *  - Feature comparison table visibility
 *  - FAQ accordion / section expansion (pricing page)
 *  - Time-on-page heartbeat (every 15s, capped at 5 min)
 *  - Nav bar link clicks
 *  - Footer link clicks
 *  - Sidebar link clicks
 */

declare global {
  interface Window {
    _paq: Array<Array<unknown>>
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function track(category: string, action: string, name?: string, value?: number) {
  const args: Array<unknown> = ['trackEvent', category, action]
  if (name !== undefined) args.push(name)
  if (value !== undefined) args.push(value)
  window._paq?.push(args)
}

function trackPageView(url: string, title: string) {
  window._paq?.push(['setCustomUrl', url])
  window._paq?.push(['setDocumentTitle', title])
  window._paq?.push(['trackPageView'])
}

function closestAnchor(el: EventTarget | null): HTMLAnchorElement | null {
  if (!el || !(el instanceof HTMLElement)) return null
  return el.closest('a')
}

// ---------------------------------------------------------------------------
// Scroll depth tracking
// ---------------------------------------------------------------------------

const scrollMilestones = new Set<number>()

function resetScrollTracking() {
  scrollMilestones.clear()
}

function handleScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) return
  const pct = Math.round((scrollTop / docHeight) * 100)

  for (const milestone of [25, 50, 75, 100]) {
    if (pct >= milestone && !scrollMilestones.has(milestone)) {
      scrollMilestones.add(milestone)
      track('Scroll', 'depth', `${milestone}%`, milestone)
    }
  }
}

// ---------------------------------------------------------------------------
// Video tracking
// ---------------------------------------------------------------------------

const videoProgressFired = new Set<string>()

function attachVideoTracking() {
  document.querySelectorAll('video').forEach((video) => {
    if ((video as any).__matomoBound) return
    ;(video as any).__matomoBound = true

    const src = video.querySelector('source')?.src || 'unknown'
    const label = src.split('/').pop() || src

    video.addEventListener('play', () => track('Video', 'play', label))
    video.addEventListener('pause', () => {
      if (!video.ended) track('Video', 'pause', label, Math.round(video.currentTime))
    })
    video.addEventListener('ended', () => track('Video', 'ended', label, Math.round(video.duration)))

    video.addEventListener('timeupdate', () => {
      if (!video.duration) return
      const pct = (video.currentTime / video.duration) * 100
      for (const m of [25, 50, 75]) {
        const key = `${label}-${m}`
        if (pct >= m && !videoProgressFired.has(key)) {
          videoProgressFired.add(key)
          track('Video', 'progress', `${label} ${m}%`, m)
        }
      }
    })
  })
}

// ---------------------------------------------------------------------------
// Click tracking (delegated)
// ---------------------------------------------------------------------------

function classifyClick(anchor: HTMLAnchorElement): { category: string; action: string; label: string } | null {
  const href = anchor.getAttribute('href') || ''
  const text = anchor.textContent?.trim() || ''
  const classList = anchor.classList

  // Hero CTA buttons (VPButton inside .VPHero)
  if (anchor.closest('.VPHero') || anchor.classList.contains('VPButton')) {
    return { category: 'Hero', action: 'click', label: text }
  }

  // CTA section buttons at bottom of pages
  if (classList.contains('cta-button') || classList.contains('cta-button-alt') || classList.contains('buy-button')) {
    return { category: 'CTA', action: 'click', label: text }
  }

  // Pricing card download button
  if (anchor.closest('.pricing-card')) {
    return { category: 'Pricing', action: 'click', label: text }
  }

  // Nav bar links
  if (anchor.closest('.VPNavBar') || anchor.closest('.VPNavBarMenu')) {
    return { category: 'Navigation', action: 'navbar-click', label: text || href }
  }

  // Sidebar links
  if (anchor.closest('.VPSidebar')) {
    return { category: 'Navigation', action: 'sidebar-click', label: text || href }
  }

  // Footer links
  if (anchor.closest('.VPFooter')) {
    return { category: 'Navigation', action: 'footer-click', label: text || href }
  }

  // Download page — GitHub releases link
  if (href.includes('github.com') && href.includes('releases')) {
    return { category: 'Download', action: 'github-releases', label: href }
  }

  // Any link pointing to /download
  if (href === '/download' || href.startsWith('/download')) {
    return { category: 'Download', action: 'internal-link', label: `${text} (from ${window.location.pathname})` }
  }

  // Any link pointing to /pricing
  if (href === '/pricing' || href.startsWith('/pricing')) {
    return { category: 'Pricing', action: 'internal-link', label: `${text} (from ${window.location.pathname})` }
  }

  // Feature comparison links (feature page)
  if (anchor.closest('table')) {
    return { category: 'Features', action: 'comparison-click', label: text || href }
  }

  // Outbound links
  if (href.startsWith('http') && !href.includes('gitux.co')) {
    return { category: 'Outbound', action: 'click', label: href }
  }

  return null
}

function handleClick(e: MouseEvent) {
  const anchor = closestAnchor(e.target)
  if (!anchor) return

  const info = classifyClick(anchor)
  if (info) {
    track(info.category, info.action, info.label)
  }
}

// ---------------------------------------------------------------------------
// Feature comparison table visibility tracking
// ---------------------------------------------------------------------------

function attachComparisonTableObserver() {
  const tables = document.querySelectorAll('table')
  if (!tables.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          track('Features', 'comparison-table-viewed', window.location.pathname)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  tables.forEach((table) => observer.observe(table))
}

// ---------------------------------------------------------------------------
// Demo section visibility tracking
// ---------------------------------------------------------------------------

function attachDemoSectionObserver() {
  const demo = document.getElementById('demo')
  if (!demo) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          track('Demo', 'section-viewed', window.location.pathname)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(demo)
}

// ---------------------------------------------------------------------------
// Time-on-page heartbeat
// ---------------------------------------------------------------------------

let heartbeatInterval: ReturnType<typeof setInterval> | null = null
let heartbeatCount = 0
const HEARTBEAT_INTERVAL_MS = 15_000
const HEARTBEAT_MAX = 20 // 5 minutes

function startHeartbeat() {
  stopHeartbeat()
  heartbeatCount = 0
  heartbeatInterval = setInterval(() => {
    heartbeatCount++
    track('Engagement', 'time-on-page', window.location.pathname, heartbeatCount * 15)
    if (heartbeatCount >= HEARTBEAT_MAX) stopHeartbeat()
  }, HEARTBEAT_INTERVAL_MS)
}

function stopHeartbeat() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval)
    heartbeatInterval = null
  }
}

// ---------------------------------------------------------------------------
// Page-level setup (called on every SPA navigation)
// ---------------------------------------------------------------------------

function onPageReady() {
  // Small delay to let VitePress render the new page DOM
  setTimeout(() => {
    resetScrollTracking()
    attachVideoTracking()
    attachComparisonTableObserver()
    attachDemoSectionObserver()
    startHeartbeat()
    videoProgressFired.clear()
  }, 300)
}

// ---------------------------------------------------------------------------
// Public init — called once from enhanceApp
// ---------------------------------------------------------------------------

let initialized = false

export function initMatomoTracking(router: any) {
  if (initialized) return
  initialized = true

  // Global delegated click listener
  document.addEventListener('click', handleClick, true)

  // Scroll depth (throttled)
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null
  window.addEventListener(
    'scroll',
    () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
        handleScroll()
      }, 250)
    },
    { passive: true }
  )

  // Track SPA navigations
  router.onAfterRouteChanged = (to: string) => {
    trackPageView(window.location.origin + to, document.title)
    onPageReady()
  }

  // Initial page
  onPageReady()
}
