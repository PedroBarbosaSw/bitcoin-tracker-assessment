import { describe, it, expect } from 'vitest'
import { formatDateToDDMMYYYY } from './dateUtils'

describe('formatDateToDDMMYYYY', () => {
  it('converts date from YYYY-MM-DD to DD-MM-YYYY format', () => {
    expect(formatDateToDDMMYYYY('2023-04-12')).toBe('12-04-2023')
    expect(formatDateToDDMMYYYY('1990-12-31')).toBe('31-12-1990')
  })

  it('handles incorrect date formats gracefully', () => {
    expect(formatDateToDDMMYYYY('04-12-2023')).toBe('2023-12-04')
  })
})
