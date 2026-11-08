type ClassValue = string | number | null | undefined | false | ClassValue[]

/** Small class-name joiner so components stay readable without another dependency. */
export function cn(...values: ClassValue[]): string {
  const out: string[] = []

  for (const value of values) {
    if (!value && value !== 0) continue
    if (Array.isArray(value)) {
      const nested = cn(...value)
      if (nested) out.push(nested)
    } else {
      out.push(String(value))
    }
  }

  return out.join(' ')
}
