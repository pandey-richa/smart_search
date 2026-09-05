'use client'

import React from 'react'
import { SearchFilterContainer } from './SearchFilter.styles'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function SearchFilter() {
  return (
    <SearchFilterContainer>
        <input type="text" placeholder="Search..." />
        <button type="button"><FilterAltIcon /></button>
    </SearchFilterContainer>
  )
}

export default SearchFilter;