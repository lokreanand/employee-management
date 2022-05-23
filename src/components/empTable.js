import React,{useMemo} from 'react'
import { useTable } from 'react-table';
import test_data from './test_data.json'
import {COLUMNS} from './column'
import './table.css'

export const EmpTable = () => {
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => test_data,[])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance

  return (
    <table {...getTableProps()}>
    <thead>
    {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((columns) => (
            <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
        ))}
        </tr>
    ))}
    </thead>
    <tbody {...getTableBodyProps()}>
    {
        rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                </tr>
            )
        })
    }  
    </tbody>
    </table>
  )
}
