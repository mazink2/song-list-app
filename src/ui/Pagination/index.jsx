/*
    Pagination:
    Renders the pagination component

    Parameters:
    - currentPage - current pagination page
    - totalPages - total number of pages
    - setCurrentPage - state setter for setting currentPage value
    - type - if set to "above", it will have less margin below it
    - scrollToRef - if this ref is provided, all click handlers will trigger a
    smooth scroll to the top of the provided ref when updating the current page
*/
import styles from "./Pagination.module.scss";

const Pagination = ({
    currentPage,
    totalPages,
    setCurrentPage,
    type,
    scrollToRef,
}) => {
    // Variables to check which pagination buttons to show
    const nextEnabled = totalPages > 1 && currentPage !== totalPages;
    const previousEnabled = currentPage > 1;
    const firstEnabled = currentPage > 3;
    const lastEnabled = currentPage < totalPages - 2;

    const scroll = () => {
        // Scroll to ref if provided
        if (scrollToRef) {
            window.scrollTo({
                top: scrollToRef.current.offsetTop - 120,
                behavior: "smooth",
            });
        }
    };

    const handleClick = (type) => {
        switch (type) {
            case "first":
                // Go to first page
                firstEnabled && setCurrentPage(1);
                break;
            case "prev":
                // Go to previous page
                previousEnabled && setCurrentPage(currentPage - 1);
                break;
            case "next":
                // Go to next page
                nextEnabled && setCurrentPage(currentPage + 1);
                break;
            case "last":
                // Go to last page
                lastEnabled && setCurrentPage(totalPages);
                break;
        }

        scroll();
    };

    return (
        <div
            className={`${styles.paginationList} ${
                type === "above" ? styles.above : ""
            }`}
        >
            {/* First and previous page buttons */}
            <button
                className={`${styles.paginationButtonText} ${
                    !firstEnabled ? styles.isDisabled : ""
                }`}
                onClick={() => handleClick("first")}
            >
                {"<< First"}
            </button>
            <button
                className={`${styles.paginationButtonText} ${
                    !previousEnabled ? styles.isDisabled : ""
                }`}
                onClick={() => handleClick("prev")}
            >
                {"< Prev"}
            </button>

            {/* Pagination number buttons */}
            {[...new Array(totalPages)].map((_, index) => {
                const onClick = () => {
                    setCurrentPage(index + 1);
                    scroll();
                };
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
                className={`${styles.paginationButtonText} ${
                    !nextEnabled ? styles.isDisabled : ""
                }`}
                onClick={() => handleClick("next")}
            >
                {"Next >"}
            </button>
            <button
                className={`${styles.paginationButtonText} ${
                    !lastEnabled ? styles.isDisabled : ""
                }`}
                onClick={() => handleClick("last")}
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
                className={`${styles.paginationButton} ${
                    isSelected ? styles.isSelected : ""
                }`}
                onClick={onClick}
            >
                {page}
            </button>
        </div>
    );
};

export default Pagination;
