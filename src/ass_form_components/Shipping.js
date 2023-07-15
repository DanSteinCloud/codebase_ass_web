import useFormContext from "../hooks/useFormContext"

const Shipping = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={data.sameAsBilling}
                    onChange={handleChange}
                />
                Adresse identique ?
            </label>

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="shipFirstName">Dénomination</label>
                    <input
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        placeholder="SOBOA GROUP"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="shipLastName">Ninea</label>
                    <input
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        placeholder="TG-DDBV-4865-HDRT-0983"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipLastName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
            </div>

            <label htmlFor="shipAddress1">Localisation</label>
            <input
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                placeholder="555 Wallaby Way"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress1}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipAddress2">Domaine d'activité</label>
            <select
                id="shipAddress2"
                name="shipAddress2"
                placeholder="Agro business"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress2}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            >
                <option value="AL">Agro business</option>
                <option value="AK">Ferme agricole</option>
                <option value="AZ">Transformateur bio</option>
                <option value="AR">Tradeur</option>
                <option value="CA">Ferme d'elevage</option>
                <option value="CO">Fournisseur</option>
                <option value="CO">Commerce Import/ Export</option>
                <option value="AL">Production végétale</option>
                <option value="AK">Denrée alimentaires</option>
                <option value="AZ">Matiere premiere</option>
                <option value="AR">Production animale</option>
            </select>
            <label htmlFor="shipState">Type d'entreprise</label>
            <select
                id="shipState"
                name="shipState"
                value={data.shipState}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            >
                <option value="CA">SA de production</option>
                <option value="CA">SA de commerce</option>
                <option value="CA">SA de transformation</option>
                <option value="CA">SARL de production</option>
                <option value="CA">SARL de commerce</option>
                <option value="CA">SARL de transformation</option>
                <option value="CA">GIE de production</option>
                <option value="CA">GIE de commerce</option>
                <option value="CA">GIE de transformation</option>
                <option value="CA">Entreprise personnelle de production</option>
                <option value="CA">Entreprise personnelle de commerce</option>
                <option value="CA">Entreprise personnelle de transformation</option>
            </select>

            <label htmlFor="shipZipCode">Code Postal</label>
            <input
                type="text"
                id="shipZipCode"
                name="shipZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.shipZipCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />
               <label htmlFor="shipCity">Charger le justificatif</label>
            <input
                type="text"
                id="shipCity"
                name="ship-city"
                placeholder="Production brute"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.shipCity}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />
        </>
    )

    return content
}
export default Shipping