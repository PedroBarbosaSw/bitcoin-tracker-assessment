import { describe, it, expect } from 'vitest'
import { formatAsUSD } from './formatUtils'

describe('formatAsUSD', () => {
  it('formats positive numbers correctly', () => {
    expect(formatAsUSD(1234.56)).toBe('$1,234.560')
  })

  it('formats zero correctly', () => {
    expect(formatAsUSD(0)).toBe('$0.000')
  })

  it('formats negative numbers correctly', () => {
    expect(formatAsUSD(-1234.56)).toBe('-$1,234.560')
  })

  it('formats numbers with more than three decimal places correctly', () => {
    expect(formatAsUSD(1234.56789)).toBe('$1,234.568')
  })

  it('formats very large numbers correctly', () => {
    expect(formatAsUSD(123456789)).toBe('$123,456,789.000')
  })
})
