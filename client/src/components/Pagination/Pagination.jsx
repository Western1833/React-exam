import Pagination from 'react-bootstrap/Pagination';

export function PaginationComponent({ onPageChange, length, activePage }) {
    let items = [];

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    for (let number = 1; number <= Math.ceil(length / 2); number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageClick(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination size="lg">{items}</Pagination>
    );
}