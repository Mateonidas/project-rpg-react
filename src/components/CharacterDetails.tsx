import {Box, Button, Typography} from "@mui/material";

interface CharacterDetailsProps {
    character: any
}

export default function CharacterDetails({character}: CharacterDetailsProps) {
    return character ? <>
        <Typography variant="h4">{character.name}</Typography>
        <Button variant="contained">Zarządzaj Postacią</Button>

        <Section title="Opis">
            <Typography>{character.description}</Typography>
        </Section>

        <Section title="Grupa">
            <Typography>{character.group}</Typography>
        </Section>
    </> : <Typography>Wybierz postać</Typography>
}

interface SectionProps {
    title: string
    children?: JSX.Element
}

const Section = ({title, children}: SectionProps) =>
    <Box>
        <Typography variant="h5">{title}</Typography>
        {children}
    </Box>