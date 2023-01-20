import { React } from 'react'
import { Bouton } from '../commons/Bouton'


export const FormulaireMeteo = (props) => {
    // export const FormulaireMeteo = ({ville, handleChange, rechercheVille, rechercheLocalisation}) => {

    const { ville, handleChange, rechercheVille, rechercheLocalisation } = props;
    const label = {
        fontSize: '1.25em',
        fontWeight: 'bold'
    }

    return (
        <form style={{ display: "flex", flexDirection: "row", justifyContent: "true" }} onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="ville" style={label}>Rechercher une ville: </label>
            <input id="ville" name="ville" type="text" value={ville} onChange={handleChange} />
            <Bouton onClick={rechercheLocalisation}>📍</Bouton>
            <Bouton onClick={rechercheVille}>Chercher</Bouton>
        </form>
    )
}
