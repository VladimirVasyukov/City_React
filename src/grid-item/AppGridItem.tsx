import { Favorite } from '../favorite/Favorite';
import { City } from '../types';
import styles from'./AppGridItem.module.scss'

export function AppGridItem({ cities, editCity }: { cities: City[], editCity: (City: City) => void}) {

    const editCityHandler = (city: City, value: boolean) => {
        editCity({ ...city, favorite: value })       
    }

    const listItems = cities.map(city =>
        <div key={city.id} className={styles.tile}>
          <img 
            src={city.image}
            alt={city.name}
            className={styles.image}/>
            <div className={styles.info}>
                <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>{city.name}</h3>
                    <Favorite city={ city } editCity={editCityHandler} />
                </div>
                <p className={styles.description}>{city.description}</p>
            </div>
        </div>
      );
    return <ul className={styles.gridView}>{listItems}</ul>;
}