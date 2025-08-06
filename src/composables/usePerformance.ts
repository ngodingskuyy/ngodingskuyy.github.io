import { trace } from 'firebase/performance'
import { performance } from '../firebase/config'

export interface PerformanceTrace {
    start: () => void
    stop: () => void
    putAttribute: (name: string, value: string) => void
    putMetric: (name: string, value: number) => void
}

export const usePerformance = () => {

    // Create a custom trace
    const createTrace = (name: string): PerformanceTrace | null => {
        if (!performance) {
            // Return mock object for development
            return {
                start: () => console.log(`🏃‍♂️ Performance trace started: ${name}`),
                stop: () => console.log(`⏹️ Performance trace stopped: ${name}`),
                putAttribute: (attrName: string, value: string) =>
                    console.log(`📊 Trace ${name} attribute: ${attrName} = ${value}`),
                putMetric: (metricName: string, value: number) =>
                    console.log(`📈 Trace ${name} metric: ${metricName} = ${value}`)
            }
        }

        const customTrace = trace(performance, name)
        return {
            start: () => customTrace.start(),
            stop: () => customTrace.stop(),
            putAttribute: (attrName: string, value: string) =>
                customTrace.putAttribute(attrName, value),
            putMetric: (metricName: string, value: number) =>
                customTrace.putMetric(metricName, value)
        }
    }

    // Track page load performance
    const trackPageLoad = (pageName: string) => {
        const pageTrace = createTrace(`page_load_${pageName}`)
        if (pageTrace) {
            pageTrace.start()
            pageTrace.putAttribute('page_name', pageName)

            // Stop trace when page is loaded
            if (document.readyState === 'complete') {
                pageTrace.stop()
            } else {
                window.addEventListener('load', () => {
                    pageTrace.stop()
                })
            }
        }
    }

    // Track component mount time
    const trackComponentMount = (componentName: string) => {
        const startTime = performance ? Date.now() : 0
        const mountTrace = createTrace(`component_mount_${componentName}`)

        if (mountTrace) {
            mountTrace.start()
            mountTrace.putAttribute('component', componentName)
        }

        return {
            finish: () => {
                if (mountTrace) {
                    const mountTime = Date.now() - startTime
                    mountTrace.putMetric('mount_time_ms', mountTime)
                    mountTrace.stop()
                }
            }
        }
    }

    // Track API call performance
    const trackAPICall = (endpoint: string) => {
        const startTime = Date.now()
        const apiTrace = createTrace(`api_call_${endpoint.replace(/[^a-zA-Z0-9]/g, '_')}`)

        if (apiTrace) {
            apiTrace.start()
            apiTrace.putAttribute('endpoint', endpoint)
        }

        return {
            success: () => {
                if (apiTrace) {
                    const duration = Date.now() - startTime
                    apiTrace.putMetric('duration_ms', duration)
                    apiTrace.putAttribute('status', 'success')
                    apiTrace.stop()
                }
            },
            error: (errorCode?: string) => {
                if (apiTrace) {
                    const duration = Date.now() - startTime
                    apiTrace.putMetric('duration_ms', duration)
                    apiTrace.putAttribute('status', 'error')
                    if (errorCode) {
                        apiTrace.putAttribute('error_code', errorCode)
                    }
                    apiTrace.stop()
                }
            }
        }
    }

    // Track user interaction performance
    const trackUserAction = (action: string, target: string) => {
        const actionTrace = createTrace(`user_action_${action}`)

        if (actionTrace) {
            actionTrace.start()
            actionTrace.putAttribute('action', action)
            actionTrace.putAttribute('target', target)
            actionTrace.putAttribute('timestamp', new Date().toISOString())

            // Auto-stop after short delay for user actions
            setTimeout(() => {
                actionTrace.stop()
            }, 100)
        }
    }

    // Track navigation performance
    const trackNavigation = (from: string, to: string) => {
        const navTrace = createTrace('navigation')

        if (navTrace) {
            navTrace.start()
            navTrace.putAttribute('from', from)
            navTrace.putAttribute('to', to)

            // Stop trace after a short delay
            setTimeout(() => {
                navTrace.stop()
            }, 500)
        }
    }

    return {
        createTrace,
        trackPageLoad,
        trackComponentMount,
        trackAPICall,
        trackUserAction,
        trackNavigation
    }
}
