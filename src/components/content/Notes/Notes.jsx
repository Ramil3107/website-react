import { Button, Typography } from "@mui/material";
import React from "react";

function Notes(props) {
    return (

        <>
            <Typography
                variant="h6"
                color="textSecondary">
                Create a New Note
            </Typography>

            <Button
            type="submit"
            >
                Submit
            </Button>

        </>

    )
}

export default Notes