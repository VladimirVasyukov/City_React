export function Header({ view }: {view: string}) {
    if (view === 'list' || view === 'grid') {
        return <h1>Список городов</h1>
    } else {
        return <h1>Создание города</h1>         
    }
}