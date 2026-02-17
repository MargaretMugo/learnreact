export default function TabButton({children , onSelect}) {
    console.log('TAB BUTTON RENDERING');
    return (
        <li>
            <button onClick={onSelect}>{children}
            </button>
        </li>
    );
}