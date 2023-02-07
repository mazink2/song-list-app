/*
    Pagination:
    Renders the pagination component

    Parameters:
    - currentPage - current pagination page
    - totalPages - total number of pages
    - setCurrentPage - state setter for setting currentPage value
*/
import styles from './Pagination.module.scss'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  // Variables to check which pagination buttons to show
  const nextEnabled = totalPages > 1 && currentPage !== totalPages;
  const previousEnabled = currentPage > 1;
  const firstEnabled = currentPage > 3;
  const lastEnabled = currentPage < totalPages - 2;

  // Go to first page
  const onFirstClick = () => {
    firstEnabled && setCurrentPage(1)
  }

  // Go to next page
  const onNextClick = () => {
    nextEnabled && setCurrentPage(currentPage + 1);
  };

  // Go to previous page
  const onPreviousClick = () => {
    previousEnabled && setCurrentPage(currentPage - 1);
  };

  // Go to last page
  const onLastClick = () => {
    lastEnabled && setCurrentPage(totalPages);
  };

  return (
    <div className={styles.paginationList}>
      {/* First and previous page buttons */}
      <button
        className={`${styles.paginationButtonText} ${!firstEnabled ? styles.isDisabled : ""
          }`}
        onClick={onFirstClick}
      >
        {"<< First"}
      </button>
      <button
        className={`${styles.paginationButtonText} ${!previousEnabled ? styles.isDisabled : ""
          }`}
        onClick={onPreviousClick}
      >
        {"< Previous"}
      </button>

      {/* Pagination number buttons */}
      {[...new Array(totalPages)].map((_, index) => {
        const onClick = () => setCurrentPage(index + 1);
        const isSelected = index + 1 === currentPage;

        return (
          <>
            {index > currentPage - 4 && index < currentPage + 2 ? (
              <PaginationButton
                onClick={onClick}
                isSelected={isSelected}
                page={index + 1}
                key={Math.random()}
              />
            ) : (
              ""
            )}
          </>
        );
      })}

      {/* Next and last page buttons */}
      <button
        className={`${styles.paginationButtonText} ${!nextEnabled ? styles.isDisabled : ""
          }`}
        onClick={onNextClick}
      >
        {"Next >"}
      </button>
      <button
        className={`${styles.paginationButtonText} ${!lastEnabled ? styles.isDisabled : ""
          }`}
        onClick={onLastClick}
      >
        {"Last >>"}
      </button>
    </div>
  );
};

/*
    PaginationButton:
    Component that renders a pagination button    
    
    Parameters:
    - onClick - method to handle what happens when a pagination button is clicked
    - isSelected - boolean to check if the pagination button is for the current page
    - page - page number that the button is for 
*/
const PaginationButton = ({ onClick, isSelected, page }) => {
  return (
    <div>
      <button
        className={`${styles.paginationButton} ${isSelected ? styles.isSelected : ""
          }`}
        onClick={onClick}
      >
        {page}
      </button>
    </div>
  );
};

export default Pagination;
