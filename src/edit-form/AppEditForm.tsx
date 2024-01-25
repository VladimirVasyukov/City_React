import { CityForm, UsernameFormElement } from '../types';
import styles from'./AppEditForm.module.scss'

export function AppEditForm({ updateCity }: { updateCity: (City: CityForm) => void}) {
    
     function addCity (event: React.FormEvent<UsernameFormElement>) {   
        event.preventDefault()
        const cityObject = {
        image: event.currentTarget.elements.image.value,
        name: event.currentTarget.elements.name.value,
        description: event.currentTarget.elements.description.value,
        };

        updateCity (cityObject);
    }

    return (
        <form onSubmit={ addCity }>
            <label htmlFor="name" className={styles.inputTitle}>Название города</label>
            <input type="text" name="name" id="name" required className={styles['city-name']} />

            <label htmlFor="description" className={styles.inputTitle}>Описание города</label>
            <textarea
                name="description"
                id="description"
                required
                className={styles.cityDescription}
            ></textarea>

            <label htmlFor="image" className={styles.inputTitle}>Ссылка на картинку</label>
            <input
                type="text"
                name="image"
                id="image"
                required
            />

            <button className={styles.btnCreate}>Создать</button>
        </form>
    )
}