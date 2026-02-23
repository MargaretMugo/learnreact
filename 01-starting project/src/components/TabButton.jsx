export default function TabButton({children , onSelect, isSelected}) {
    console.log('TAB BUTTON RENDERING');
    return (
        <li>
            <button className = {isSelected ? 'active' : undefined} onClick={onSelect}>{children}
            </button>
        </li>
    );
}