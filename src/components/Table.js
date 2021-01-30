import React from 'react';

//material import
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//CSS
import styled from 'styled-components';
const TableContainer = styled(Paper)`
  max-height : 200px;
  width : 100%;
  overflow:auto;
`;

const rows = [
	{
		name : 'kim',
		birthday : '2020-12-25',
	},
	{
		name : 'park',
		birthday : '2015-12-25',
	},
	{
		name : 'yu',
		birthday : '2002-12-25',
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
	},
]

const Tables = () => {
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center"> Name </TableCell>
                        <TableCell align="center"> BirthDay </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index)=>{
                        const key = `upload-list-${index}`;
                        return (
                            <TableRow key={key}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.birthday}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default Tables;