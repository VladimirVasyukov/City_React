import { View } from "../types";

export function BackButton( { changeView, children }: { changeView: (view: View) => void, children: string} ) {
      return (
        <button className="btnBack" onClick={() => changeView('list')}>
            {children}
        </button>
    );
}