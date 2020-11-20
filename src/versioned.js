
import { inCategory } from 'nextein/filters'

/**
 * Filter for versioned categories.
 * Reads version from filter's query param and append it to the category.
 * @param {*} category 
 * @param {*} options 
 */
export function inVersionedCategory(category, options = { includeSubCategories: true }) {
  return (value, idx, array, { version }) => (
    inCategory(`${category}${version ? `/${version}` : ''}`, options)(value)
  )
} 
