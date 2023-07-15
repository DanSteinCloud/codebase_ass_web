import useFormContext from "../hooks/useFormContext"

const OptIn = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
                Souscrire
            </label>
            <ul className="flex-col">
                <li>Economisez 10%</li>
                <li>Recevez votre Coupons Discount</li>
                <li>En savoir plus sur les privileges</li>
            </ul>
        </>
    )

    return content
}
export default OptIn