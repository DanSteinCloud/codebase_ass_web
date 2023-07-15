import useFormContext from "../hooks/useFormContext"

const Billing = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="billFirstName">Nom</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Ama"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billFirstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billLastName">Prenom</label>
                    <input
                        type="text"
                        id="billLastName"
                        name="billLastName"
                        placeholder="Eli"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billLastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="billAddress1">Email</label>
            <input
                type="text"
                id="billAddress2"
                name="billAddress1"
                placeholder="example@yahoo.fr"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress1">Telephone</label>
            <input
                type="text"
                id="billAddress3"
                name="billAddress1"
                placeholder="09753523"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress1">Adresse</label>
            <input
                type="text"
                id="billAddress1"
                name="billAddress1"
                placeholder="124 Djidjole"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress2" className="offscreen">Seconde adresse</label>
            <input
                type="text"
                id="billAddress2"
                name="billAddress2"
                placeholder="Imm. 45 Apt. 2"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress2}
                onChange={handleChange}
            />

            <label htmlFor="billCity">Region</label>
            <input
                type="text"
                id="billCity"
                name="billCity"
                placeholder="Maritime"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.billCity}
                onChange={handleChange}
            />

            <label htmlFor="billState">Ville</label>
            <select
                id="billState"
                name="billState"
                value={data.billState}
                onChange={handleChange}
            >
                <option value="AL">Lome</option>
                <option value="AK">Agoe</option>
                <option value="AZ">Tsevie</option>
                <option value="AR">Tabligbo</option>
                <option value="CA">Kpalime</option>
                <option value="CO">Anie</option>
                <option value="CT">Atakpame</option>
                <option value="DE">Sokode</option>
                <option value="DC">Bafilo</option>
                <option value="FL">Kara</option>
                <option value="GA">Sotouboua</option>
                <option value="HI">Niamtougou</option>
                <option value="ID">Dankpeng</option>
                <option value="IL">Dapaong</option>
                <option value="IN">Doufelgou</option>
                <option value="IA">Aflao</option>
                <option value="KS">Agbonou</option>
                <option value="KY">Yamassile</option>
            </select>

            <label htmlFor="billZipCode">Code Postal</label>
            <input
                type="text"
                id="billZipCode"
                name="billZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.billZipCode}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Billing