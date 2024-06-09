import React from 'react'
import Row from './Row'

const Table = ({data}) => {
  return (
    <table className='table-container'>
        {data.map(element => (
            <Row rowData={element}/>
        ))}
    </table>
  )
}

export default Table
