import { useState } from 'react'

const useFilter = (props) => {
  const { emptyText, listElements, defaultOption } = props
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const generateOptions = () => {
    const allOptions = listElements?.reduce((prev, curr) => {
      if (!Array.isArray(curr)) return prev
      const currOptions = curr?.map((op) => op.label)
      return [...prev, ...currOptions]
    }, [])
    const uniqueOptions = [...new Set(allOptions)]
    const options = uniqueOptions.map((option) => ({
      label: option,
      value: option,
    }))
    return options
  }

  const emptyOption = { label: emptyText, value: null }
  const filterOptions = [emptyOption, ...generateOptions()]
  const initialOption = filterOptions.find((op) => op.value === defaultOption)
  const [activeFilter, setActiveFilter] = useState(initialOption || emptyOption)

  const handleFilterClick = (value) => () => {
    setActiveFilter(filterOptions.find((option) => option.label === value))
    setIsFilterOpen(false)
  }

  return [
    filterOptions,
    activeFilter,
    handleFilterClick,
    isFilterOpen,
    setIsFilterOpen,
  ]
}

export { useFilter }
