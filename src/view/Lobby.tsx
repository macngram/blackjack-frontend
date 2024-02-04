import React from 'react'
import Room from "../model/Room";
import Layout from '../layout/Layout';
import Button from "@mui/material/Button";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';

interface LobbyProps {
    children?: React.ReactNode;
}

export interface MakeRoomProps {
  open: boolean;
  onClose: (value: string) => void;
}

function MakeRoomDialog(props: MakeRoomProps) {
  const { onClose, open } = props;
  const [roomName,setRoomName] = React.useState("");

  const onClickButton = (value: string) => {
    onClose(value);
  };

  const onChangeText = (value: string) => {
    setRoomName(value);
  }

  return (
    <Dialog open={open}>
      <DialogTitle>방만들기</DialogTitle>
      <TextField id="outlined-basic" label="방이름" variant="outlined" onChange={(e) => onChangeText(e.target.value)}/>
      <Button variant="contained" onClick={() => onClickButton(roomName)}>방만들기</Button>
    </Dialog>
  );
}

const Lobby: React.FC<LobbyProps> = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const [rooms, setRooms] = React.useState([
        {name: '찬준방'},
        {name: '재우방'},
        {name: '윤복방'},
        {name: '범수방'}
    ]);

    const onClickOpen = () => {
        setOpen(true);
    };

    const onClose = (value: string) => {
        setOpen(false);
        setRooms([...rooms,{name: value}]);
    };

    return (
        <>
            <div>로비입니다.</div>
            <table style={{border: "1px"}}>
                <thead>
                    <tr>
                        <th>로비명</th>
                        <th>인원수</th>
                        <th>
                            <Button variant="contained" onClick={onClickOpen}>
                            방만들기
                            </Button>
                        </th>
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
            <MakeRoomDialog
                open={open}
                onClose={onClose}
            />
        </>
    );
};

export default Lobby;
