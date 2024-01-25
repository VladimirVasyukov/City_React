import { View } from "../types";

export function GridButton( { view, changeView, children }: { view: string, changeView: (view: View) => void, children: string} ) {      
    return (
        <button className={`btnPrimary ${view === 'grid' ? '' : 'active'}`} onClick={() => changeView('grid')}>
            {children}
        </button>
    );
}