import { View } from "../types";

export function ListButton( { view, changeView, children }: { view: string, changeView: (view: View) => void, children: string} ) {
    return (
        <button className={`btnPrimary ${view === 'list' ? '' : 'active'}`} onClick={() => changeView('list')}>
            {children}
        </button>
    );
}