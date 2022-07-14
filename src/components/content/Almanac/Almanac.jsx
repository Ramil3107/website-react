import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Almanac.module.css"
import cardsInfo from "../../../data/cardsInfo";




function Almanac(props) {
    
    return (

        <Container sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            
            {cardsInfo.map(card => {
                return (
                    <Card component={Link} to={card.path} sx={{ width:"35%",minWidth:"300px",textDecoration: "none", margin: "1rem" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt={card.alt}
                    />
                    <CardContent >
                        <Typography textAlign="center" gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {card.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                )
            })}

        </Container>
    )
}

export default Almanac;