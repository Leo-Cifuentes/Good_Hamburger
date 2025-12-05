type FilterProps = {
    innerText: string;
    handler: string;
};

const FilterButton = ({ innerText, handler }: FilterProps) => {
    return(
        <>
            <button onClick={() => handler(innerText)} type="button" className="filter-button col-3 col-sm-2 text-center mx-2 my-3">
                <span>{innerText}</span>
            </button>  
        </>
    )
}

export default FilterButton;