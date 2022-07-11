import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Almanac.module.css"
import cardsInfo from "../../../data/cardsInfo";




function Almanac(props) {
    
    return (

        <div className={styles.wrapper}>
            
            {cardsInfo.map(card => {
                return (
                    <Card component={Link} to={card.path} sx={{ width:"35%", textDecoration: "none", margin: "1rem" }}>
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

        </div>
    )
}

export default Almanac;