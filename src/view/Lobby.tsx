import React from 'react'
import Room from "../model/Room";
import Button from "@mui/material/Button";
import Layout from '../layout/Layout';

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
                    <tr>
                        <th>로비명</th>
                        <th>인원수</th>
                    </tr>
                </thead>
                <tbody>
                {rooms.map((room:Room) => {
                    return (
                        <tr>
                            <td> {room.name}</td>
                            <td> {1}</td>
                            <td> <Button variant="contained"> 입장 </Button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};

export default Lobby;
