/*
    usePagination:
    Hook that provides pagination values to be used alongside the Pagination UI component

    Parameters:
    - data - Array of objects with data to be rendered

    Outputs:
    - rowType - Can be either "header" or "data". This parameter is used to decide whether the header row or data row should be rendered. If this is set to "data", the data parameter must also be provided or nothing will be rendered. Default value: "header"
    - data - Object with song data to render. Default value: null
    - handleSort - Method to sort song names alphabetically. Default value: null
    - sortType - Used to show whether the songs are sorted alphabetically from a to z or z to a. Values can be "asc" or "desc". Default value: null (when data hasn't been sorted yet)
    - currentPage - Page that the user is currently on
    - totalPages - Total number of pages
    - itemsPerPage - Number of items on the current page
    - setCurrentPage, setTotalPages, setItemsPerPage - State setter functions for the above outputs
*/


import { useEffect, useState } from 'react'

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Method to calculate pagination values using data array and itemsPerPage value
  const getTotalPages = () => {
    let length = data.length;
    let total = Math.ceil(length / itemsPerPage);

    setTotalPages(total);

    // If the total number of pages becomes less than the current page,
    // reset the current page to 1
    if (currentPage > total) {
      setCurrentPage(1);
    }
  };

  // Update pagination values when data or itemsPerPage values are updated
  useEffect(() => {
    if (data.length) {
      getTotalPages();
    }
  }, [data, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    itemsPerPage,
    setItemsPerPage
  }
}

export default usePagination