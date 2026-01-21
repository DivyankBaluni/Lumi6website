
/**
 * Basic Monitoring and Performance Tracking Utility
 * This serves as a foundation for error tracking, real-user monitoring (RUM),
 * and performance analytics.
 */

interface PerformanceMetric {
    name: string;
    value: number;
    label?: string;
}

const isProduction = import.meta.env.PROD;

export const trackPerformance = (metric: PerformanceMetric) => {
    if (!isProduction) {
        console.log(`[Performance] ${metric.name}: ${metric.value}ms ${metric.label || ''}`);
        return;
    }

    // In production, this would send data to a service like Vercel Analytics, PostHog, or Sentry
    // Example:
    // posthog.capture('performance_metric', metric);
};

export const trackError = (error: Error, context?: Record<string, any>) => {
    console.error('[Error Tracking]:', error, context);

    if (isProduction) {
        // Send to Sentry or similar
        // Sentry.captureException(error, { extra: context });
    }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isProduction) {
        console.log(`[Event] ${eventName}:`, properties);
        return;
    }

    // Example for PostHog or Google Analytics
    // analytics.track(eventName, properties);
};

// Hook for tracking page load and Web Vitals
export const initMonitoring = () => {
    if (typeof window === 'undefined') return;

    // Track Web Vitals
    window.addEventListener('load', () => {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navEntry) {
            trackPerformance({
                name: 'page_load',
                value: navEntry.loadEventEnd - navEntry.loadEventStart,
                label: window.location.pathname
            });

            trackPerformance({
                name: 'ttfb',
                value: navEntry.responseStart - navEntry.requestStart,
                label: window.location.pathname
            });
        }
    });

    // Global error handler
    window.addEventListener('error', (event) => {
        trackError(event.error, {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno
        });
    });

    window.addEventListener('unhandledrejection', (event) => {
        trackError(new Error('Unhandled Rejection'), {
            reason: event.reason
        });
    });
};
