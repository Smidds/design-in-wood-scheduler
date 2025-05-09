import { defineStore } from 'pinia'

import { first, last } from 'lodash-es'
import type { Calendar } from '~/types/calendar'
import calendarDatesAsDates from '~/utils/calendar-dates-as-dates'

export const useCalendarStore = defineStore('calendarStore', {
  state: () => ({
    isLoading: false,
    isError: false,
    error: null as Error | null,
    calendar: [] as Calendar
  }),

  getters: {
    firstDate: state => first(first(state.calendar)?.dates)?.date,
    lastDate: state => last(last(state.calendar)?.dates)?.date
  },

  actions: {
    async fetch() {
      this.isLoading = true

      const { data, error } = await useFetch<Calendar>('/api/calendar')

      if (error.value) {
        console.log('An error occurred in fetching the calendar.', error.value)
        this.isLoading = false
        this.isError = true
        this.error = error.value
        throw error.value
      }

      this.calendar = calendarDatesAsDates(data.value || [])
      this.isError = false
      this.error = null
      this.isLoading = false

      return this.calendar
    }
  }
})
