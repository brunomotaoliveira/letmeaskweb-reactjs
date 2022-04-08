import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src="{copyImg}" alt="copy room code" />
            </div>

            <span>Sala #2324432423</span>
        </button>
    )
}