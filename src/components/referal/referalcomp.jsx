import React from 'react';

export const GlobalFilter = ( {filter, setFilter} ) =>{
	return(
		<div>
			Search : {' '}
			<input className="ml-2 input-search form-control"
				value={filter || ''}  onChange={e => setFilter(e.target.value)} style={{width: "20%"}}
            />
		</div>
	)
} 

export const ColumnFilter = ( { column } ) => {
	
	const {filterValue, setFilter} = column
	return(
		<div>
		
			<input className="form-control input-search"
				value={filterValue || ''}  onChange={e => setFilter(e.target.value)} />
		</div>
	)
} 