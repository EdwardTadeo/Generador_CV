import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import "./Referents.css";

const Referents = ({onChange}) => {
    const [referentsList , setReferentsList] = useState([]);

    useEffect(() => {
        onChange(referentsList);
    }, [referentsList, onChange]);

    const handleAddReferents = () => {
        const newReferents = {
            companyReferent: "",
            nameReferent: "",
            phoneReferent: "",
            position: "",
        };
        setReferentsList([...referentsList, newReferents]);
    };

    const handleReferentChange = (index, field, value) => {
        const updatedReferentsList = [...referentsList];
        updatedReferentsList[index][field] = value;
        setReferentsList(updatedReferentsList);
    };
    
    return (
        <div className="referents-container">
            <h1>Referencias Laborales</h1>
            {referentsList.map((referent, index) => (
                <div key={index} className="referent-form">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Nombre de la Empresa"
                                variant="outlined"
                                fullWidth
                                value={referent.companyReferent}
                                onChange={(event) => 
                                    handleReferentChange(index, "companyReferent", event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Nombre del Referente"    
                                variant="outlined"
                                fullWidth
                                value={referent.nameReferent}
                                onChange={(event) =>
                                    handleReferentChange(index, "nameReferent", event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Número del Referente"    
                                variant="outlined"
                                fullWidth
                                value={referent.phoneReferent}
                                onChange={(event) =>
                                    handleReferentChange(index, "phoneReferent", event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Puesto que ocupaba"    
                                variant="outlined"
                                fullWidth
                                value={referent.position}
                                onChange={(event) =>
                                    handleReferentChange(index, "position", event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                </div>
            ))}
            <Button variant="contained" onClick={handleAddReferents}>
                Añadir Referencias
            </Button>
        </div>
    );
};

export default Referents;