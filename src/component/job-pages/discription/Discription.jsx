import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react'

function Discription() {
    const { jobInfo } = useSelector((state) => state.job.data);
    console.log(jobInfo)
    return (
        <div>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Card.Header>{jobInfo.company_name}</Card.Header>
                    <Card.Meta>
                        <span className='date'> Role: {jobInfo.role}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='date'> Language: {jobInfo.language}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='date'> Location : {jobInfo.place}</span>
                        <span className='date'> Salary: {jobInfo.salary}</span>
                    </Card.Meta>
                    <Card.Description>
                        {jobInfo.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Link to='/apply'>
                            <Icon name='user' />
                            Apply Now
                        </Link>
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Discription