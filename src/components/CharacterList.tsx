import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, {SyntheticEvent, useState} from "react";

interface CharacterListProps {
    charactersListByGroup: Map<string, object[]>
    onSelect: (character: any) => void
}

//TODO Reacts hooks
export default function CharacterList({charactersListByGroup, onSelect}: CharacterListProps) {
    const [expanded, setExpanded] = useState<string | undefined>(undefined)

    const handleChange = (panelName: string) =>
        (event: SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panelName : undefined)

    return <>
        {Array.from(charactersListByGroup).map(([group, characters]) => {
            return <Accordion expanded={expanded === group} onChange={handleChange(group)} key={group}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>{group}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {characters.map((character: any) =>
                        <List sx={{width: '100%'}}>
                            <ListItemButton key={character.id} onClick={() => onSelect(character)}>
                                <ListItemText primary={character.name} secondary={character.description}/>
                            </ListItemButton>
                        </List>
                    )}
                </AccordionDetails>
            </Accordion>
        })
        }
    </>
}