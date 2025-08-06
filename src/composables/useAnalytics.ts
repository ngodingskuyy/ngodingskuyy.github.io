import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase/config'

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
    try {
      if (analytics && import.meta.env.PROD) {
        logEvent(analytics, eventName, eventParams)
      } else if (import.meta.env.DEV) {
        console.log('📊 Analytics (dev):', eventName, eventParams)
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.log('Analytics skipped in development:', error)
      }
    }
  }

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    })
  }

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location || 'unknown',
      timestamp: new Date().toISOString()
    })
  }

  const trackJoinCommunity = (source: string) => {
    trackEvent('join_community', {
      source,
      timestamp: new Date().toISOString()
    })
  }

  const trackProjectView = (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
      timestamp: new Date().toISOString()
    })
  }

  // Enhanced tracking with performance correlation
  const trackPerformanceEvent = (eventName: string, performanceData: Record<string, number>, eventParams?: Record<string, unknown>) => {
    trackEvent(`perf_${eventName}`, {
      ...eventParams,
      ...performanceData,
      timestamp: new Date().toISOString()
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackJoinCommunity,
    trackProjectView,
    trackPerformanceEvent
  }
}
