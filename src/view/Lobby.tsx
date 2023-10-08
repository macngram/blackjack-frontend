import React from 'react'
import Room from "../model/Room";

interface LobbyProps {
    children?: React.ReactNode;
}

const Lobby: React.FC<LobbyProps> = ({ children }) => {
    const rooms : Room[] = [
        {name: '찬준방'},
        {name: '재우방'},
        {name: '윤복방'},
        {name: '범수방'},
    ]

    return (
        <>
            <div>로비입니다.</div>
            <table style={{border: "1px"}}>
                <thead>
                    <th>로비명</th>
                    <th>인원수</th>
                </thead>
                <tbody>
                {rooms.map((room:Room) => {
                    return (
                        <tr>
                            <td> {room.name}</td>
                            <td> {1}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};

export default Lobby;
