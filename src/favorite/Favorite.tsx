import styles from'./Favorite.module.scss'
import favoriteFalse from "../assets/favorite-false.svg"
import favoriteTrue from "../assets/favorite-true.svg"
import { City } from '../types'

export function Favorite({ city, editCity }: {city: City, editCity: (city: City, value: boolean) => void} ) {

    if (city.favorite) {
        return (
            <button className={styles.star} onClick={() => editCity(city, false)}>
                <img src={favoriteTrue} alt="favoriteTrue"/>
            </button>
        )
    }
    return (
        <button className={styles.star} onClick={() => editCity(city, true)}>
            <img src={favoriteFalse} alt="favoriteFalse"/>
        </button>
    )
}