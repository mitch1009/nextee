import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { IPaginationProps } from "./PaginationDTO";



export const PaginationModule: React.FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <button
                    onClick={handlePrevious}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    disabled={currentPage === 1}
                >
                    <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {/* Display page numbers and ellipsis */}
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={`inline-flex items-center border-t-2 ${
                                page === currentPage ? 'border-green-500 text-green-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } px-4 pt-4 text-sm font-medium`}
                        >
                            {page}
                        </button>
                    );
                })}
                {/* Optional: Add ellipsis or other page number controls as needed */}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    onClick={handleNext}
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    disabled={currentPage === totalPages}
                >
                    Next
                    <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>
        </nav>
    );
};
