type FilterProps = {
    innerText: string;
    handler: string;
};

const FilterButton = ({ innerText, handler, isActive }: FilterProps) => {
    return(
        <>
            <button onClick={() => handler(innerText)} type="button" className={`${isActive ? "filter-button-active" : ""} filter-button col-3 col-sm-2 text-center mx-2 my-31`}>
                <span>{innerText}</span>
            </button>  
        </>
    )
}

export default FilterButton;