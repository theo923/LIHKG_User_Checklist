export const SearchField = ({ searchFieldChange }) => {
    return (
        <div className='container mx-auto text-center md:p-28 p-20'>
            <input className="input input-lg input-bordered" type="text" placeholder="Please type any LIHKG ID" onChange={searchFieldChange}/>
        </div>
    )
}