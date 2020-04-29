import React from 'react';
import TextField from '@material-ui/core/TextField';
import './LocationInput.css';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    input: {
        color: "black",
        "& $notchedOutline": {   //add this nested selector
            borderColor: "red",
        },
    }
};

class LocationInput extends React.Component {
    constructor(props) {
        super(props);

        this.passInputBack = this.passInputBack.bind(this);
    }

    passInputBack(e) {
        this.props.getInput(e.target.value);
    }
    
    render() {
        const { classes } = this.props;
        return(
            <form className="form" onSubmit={this.passInputBack}>
                <TextField 
                    InputProps={{
                        className: classes.input
                    }}
                    onChange={this.passInputBack} value={this.props.input} className="input" id="standard-basic" label="Location"
                />
            </form>
        );
    }
}

export default withStyles(styles)(LocationInput);