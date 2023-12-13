const SearchField = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className='input'
            placeholder="Search by brand"
            value={value}
            onChange={onChange}
            style={{ width: '250px' }}
        />
    );
};

export default SearchField;