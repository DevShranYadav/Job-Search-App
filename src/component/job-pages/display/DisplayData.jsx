import { Button, Table, TableBody, TableCell } from 'semantic-ui-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchData } from '../../API1/data';
import { useDispatch } from 'react-redux';
import { addJobData } from '../../../redux/job-reducer';

function DisplayData() {
  const dispatch = useDispatch();
  console.log(searchData);
  return (
                  <>
                    <h2>Your Search Result</h2>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Company Name</Table.HeaderCell>
                                <Table.HeaderCell>Language</Table.HeaderCell>
                                <Table.HeaderCell>Job Description</Table.HeaderCell>
                                <Table.HeaderCell>Role</Table.HeaderCell>
                                <Table.HeaderCell>place</Table.HeaderCell>
                                <Table.HeaderCell>Salary</Table.HeaderCell>
                                <Table.HeaderCell>See Deatils</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {searchData.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell>{item.company_name}</Table.Cell>
                                    <Table.Cell>{item.language}</Table.Cell>
                                    <Table.Cell>{item.description}</Table.Cell>
                                    <Table.Cell>{item.role}</Table.Cell>
                                    <Table.Cell>{item.place}</Table.Cell>
                                    <Table.Cell>{item.salary}</Table.Cell>

                                    <TableCell>
                                        <Link to='/job-details' onClick={()=>dispatch(addJobData(item))}>Click Here</Link>
                                    </TableCell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </>
  
  )
}

export default DisplayData