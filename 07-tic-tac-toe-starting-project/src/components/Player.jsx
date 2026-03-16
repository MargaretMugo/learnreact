import useState from 'react';
export default function Player({ name, symbol }) {
    // isEditing = false, setIsEditing = true
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing(true);
    }
    if (isEditing) {
        <span className='player-name'></span>
    } else {
        <input type="text" />
    }
    return (
        <li>
            <span className='player'>
                <span className='player-name'>{name}</span>
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}