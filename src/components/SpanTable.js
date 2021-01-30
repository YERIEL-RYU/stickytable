import React from 'react';

//material import
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//CSS
import styled from 'styled-components';
import { Radio } from '@material-ui/core';
const TableContainer = styled.div`
  max-height : 400px;
  width : 100%;
  overflow-x:auto;
`;

const rows = [
	{
		name : 'kim',
		birthday : '2020-12-25',
		gender : 'F'
	},
	{
		name : 'park',
		birthday : '2015-12-25',
		gender : 'M'
	},
	{
		name : 'yu',
		birthday : '2002-12-25',
		gender : 'F'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
	{
		name : 'lee',
		birthday : '2000-12-25',
		gender : 'M'
	},
]

const SpanTable = () => {
    return (
        <TableContainer>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" rowSpan="2"> Name </TableCell>
                        <TableCell align="center" rowSpan="2"> BirthDay </TableCell>
                        <TableCell align="center" colSpan="2"> Gender </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Female</TableCell>
                        <TableCell align="center">Male</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index)=>{
                        const key = `upload-list-${index}`;
                        return (
                            <TableRow key={key}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.birthday}</TableCell>
                                <TableCell align="center"><Radio checked={row.gender === 'F'} disabled /></TableCell>
                                <TableCell align="center"><Radio checked={row.gender === 'M'} disabled /></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SpanTable;