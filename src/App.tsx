import './App.scss'
import { useState } from 'react';
import { View, City, CityForm } from './types'
import { Header } from './header/Header'
import { ListButton, GridButton, BackButton, CreateButton } from './buttons'
import { AppListItem } from './list-item/AppListItem'    
import { AppGridItem } from './grid-item/AppGridItem'
import { AppEditForm } from './edit-form/AppEditForm'
import { defaultCities } from './data';

export default function CityApp() {
    const [view, setView] = useState<View>('list');
    
    function changeView(updatedView: View) {  
        setView(updatedView) 
    } 

  return (
    <>
        <header className="header">
            <div className="content headerContent">
                <Header view={ view } />
            </div>
        </header>

        <main className="content citiesWrapper">
            <CurrentButton view={ view } changeView={changeView}/>
            <CurrentView view={ view } />    
        </main>
        <footer className="footer"></footer>    
    </>
    );
}

function CurrentButton({ view, changeView }: {view: View, changeView: (view: View) => void}) {
    switch (view) {
        case 'list': 
        case 'grid':         
            return (
                <div className="btnWrapper">
                    <div>
                        <ListButton view={ view } changeView={ changeView }>Список</ListButton>
                        <GridButton view={ view } changeView={ changeView }>Плитка</GridButton>
                    </div>
                    <CreateButton changeView={ changeView }>Создать</CreateButton>
                </div>      
            )
        case 'edit':
            return <BackButton changeView={ changeView }>Назад</BackButton>
    }
}

function CurrentView({ view }: {view: View}) {
    const [cities, setCities] = useState<City[]>(initCities());

    function initCities() {
        try {
          const cities = JSON.parse(localStorage.getItem('cities') || '');
          return Array.isArray(cities) ? cities : defaultCities;
        } catch {
          return defaultCities;
        }
      }

    function editCity(city: City) {
        const updatedCities = cities.map((c) => {
            if (c.id === city.id) {
              return { ...c, ...city };
            }
            return c;
          })

        setCities(updatedCities)
        saveCitiesToLocalStorage(updatedCities)
    }

    function updateCities(cityForm: CityForm) {      
        const updatedCities = [{ ...cityForm, id: cities.length, favorite: false }, ...cities]
        setCities(updatedCities);  
        saveCitiesToLocalStorage(updatedCities)
    }

    function saveCitiesToLocalStorage(cities: City[]) {
        localStorage.setItem('cities', JSON.stringify(cities));
    }


    switch (view) {
        case 'list': 
            return <AppListItem cities={ cities } editCity = { editCity }/>
        case 'grid': 
            return <AppGridItem cities={ cities } editCity = { editCity }/>
        case 'edit':
            return <AppEditForm updateCity = { updateCities }/>
    }
}