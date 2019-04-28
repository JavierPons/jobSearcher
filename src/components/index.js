import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

 const Component = (props) => {
    const {
        job,
        onChangeCampo,
        onKeyPress,
        fetcher,
     } = props;

    return(
        <React.Fragment>
            <AppBar >
                <Toolbar>
                    <Typography
                        variant="h5"
                        color="inherit"
                    >
                        Search Job
                    </Typography>

                </Toolbar>
            </AppBar >
                <br/>
                <br/>
                <br/>
                <br/>
            <div className='type'>
                <TextField
                    label='Type a job name here'
                    fullWidth
                    value={job}
                    onChange={e => onChangeCampo( e.target.value)}
                    onKeyPress={onKeyPress}
                />

                <Button
                    style={{position:'relative', top:'5px'}}
                    variant='contained'
                    color='primary'
                    fullWidth
                    onClick={fetcher}
                    
                    
                    
                    
                >
                    Search
                </Button>
            </div>
               
        </React.Fragment>    
    )
}

export default Component;