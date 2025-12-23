"use client"

import { useEffect, useState } from 'react'

interface VisitorStats {
  totalVisitors: number
  todayVisitors: number
  lastVisit: string | null
}

export function useVisitorTracking() {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    todayVisitors: 0,
    lastVisit: null
  })
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0]
    
    // Get existing visitor data from localStorage
    const existingData = localStorage.getItem('visitor-stats')
    let visitorData = existingData ? JSON.parse(existingData) : {
      totalVisitors: 0,
      dailyVisitors: {},
      lastVisit: null
    }

    // Check if this is a new visitor today
    const hasVisitedToday = visitorData.dailyVisitors[today] || false
    const isNewVisitor = !visitorData.lastVisit

    // Update visitor counts
    if (!hasVisitedToday) {
      // New visit today
      if (isNewVisitor) {
        visitorData.totalVisitors = (visitorData.totalVisitors || 0) + 1
      }
      visitorData.dailyVisitors[today] = true
      visitorData.lastVisit = new Date().toISOString()
      
      // Clean up old daily data (keep last 30 days)
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      Object.keys(visitorData.dailyVisitors).forEach(date => {
        if (new Date(date) < thirtyDaysAgo) {
          delete visitorData.dailyVisitors[date]
        }
      })

      // Save updated data
      localStorage.setItem('visitor-stats', JSON.stringify(visitorData))
    }

    // Count today's visitors
    const todayVisitors = Object.keys(visitorData.dailyVisitors).filter(date => date === today).length

    setStats({
      totalVisitors: visitorData.totalVisitors || 1,
      todayVisitors: todayVisitors,
      lastVisit: visitorData.lastVisit
    })
    
    setIsLoading(false)
  }, [mounted])

  return { stats, isLoading: isLoading || !mounted }
}