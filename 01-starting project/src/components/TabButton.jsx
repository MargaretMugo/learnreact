export default function TabButton({children , onSelect}) {
    
    return (
        <li>
            <button onSelect={handleClick}>{children}
            </button>
        </li>
    );
}