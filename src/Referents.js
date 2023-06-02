import React from 'react';
import { Button, Grid, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Referents.css";

const Referents = ({referents, handleAddReferents, handleReferentChange}) => {
    return (
        <div>
            {referents.map((referents, index) => (
                <Accordion key={index} style={{marginBottom:'10px'}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <InputLabel>{referents.companyReferent ? `${referents.companyReferent} - ${referents.position}` : '(sin especificar)'}</InputLabel>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2} className='experience-form'>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Nombre de la Empresa"
                                variant="outlined"
                                name='companyReferent'
                                fullWidth
                                value={referents.companyReferent}
                                onChange={(event) => 
                                    handleReferentChange(event, index)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Nombre del Referente"    
                                variant="outlined"
                                fullWidth
                                name='nameReferent'
                                value={referents.nameReferent}
                                onChange={(event) =>
                                    handleReferentChange(event, index)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Número del Referente"    
                                variant="outlined"
                                fullWidth
                                name='phoneReferent'
                                value={referents.phoneReferent}
                                onChange={(event) =>
                                    handleReferentChange(event, index)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                label="Puesto que ocupaba"    
                                variant="outlined"
                                fullWidth
                                name='position'
                                value={referents.position}
                                onChange={(event) =>
                                    handleReferentChange( event, index)
                                }
                            />
                        </Grid>
                    </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
            <Button variant="outlined" onClick={handleAddReferents} style={{color: '#DF321A', borderColor: '#DF321A'}}>
                Añadir Referencias
            </Button>
        </div>
    );
};

export default Referents;