import React from 'react'
import Page from '../components/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Container extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            job: '',
            data: ['']
        }

        this.onChangeCampo = this.onChangeCampo.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
        this.fetcher= this.fetcher.bind(this)
    }

    
    onChangeCampo(value) {
        this.setState({job: value})
    }

    onKeyPress(ex){
            if(ex.key === 'Enter'){
                console.log('kkk')
                this.onChangeCampo()
            }
        }
  async fetcher() {
    const response = await fetch(`https://jobs.search.gov/jobs/search.json?query=${this.state.job}`)
    const json = await response.json()
     this.setState({data:json})
   }  



    render() { 

        const { job } = this.props
         if(this.state.data.length === 0) {
                return(
                    <React.Fragment>
                         <Page 
                    job={job}
                    onChangeCampo={this.onChangeCampo}
                    onKeyPress={this.onKeyPress}
                    fetcher={this.fetcher}
                />
                <br/>
                <br/>
                        <h4 style={{textAlign:'center'}}>There is not that kind of job possition at the moment.</h4>
                    </React.Fragment> 
                )
            }else {
        return (
            <React.Fragment>
                <Page 
                    job={job}
                    onChangeCampo={this.onChangeCampo}
                    onKeyPress={this.onKeyPress}
                    fetcher={this.fetcher}
                />
                <br/>
                <br/>
            
                <Paper style={{}}>
                        <Table style={{}}>
                            <TableHead>
                            <TableRow>
                                <TableCell>Position</TableCell>
                                <TableCell align="right">Organisation name</TableCell>
                                <TableCell align="right">Locations</TableCell>
                                <TableCell align="right">Start date</TableCell>
                                <TableCell align="right">End date</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.data.map(el => (
                                <TableRow key={el.id}>
                                <TableCell component="th" scope="row">
                                    {el.position_title}
                                </TableCell>
                                <TableCell align="right">
                                {el.organization_name}</TableCell>
                                <TableCell align="right">
                                {el.locations}</TableCell>
                                <TableCell align="right">
                                {el.start_date}</TableCell>
                                <TableCell align="right">
                                {el.end_date}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                </Paper>
            </React.Fragment>
        )

       } 
    }
}

export default Container