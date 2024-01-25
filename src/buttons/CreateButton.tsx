import { View } from "../types";

export function CreateButton( { changeView, children }: { changeView: (view: View) => void, children: string} ) {
      return (
        <button className="btnCreate" onClick={() => changeView('edit')}>
            {children}
        </button>
    );
}