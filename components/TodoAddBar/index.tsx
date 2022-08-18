import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

export default function TodoAddBar() {
    const [todo, setTodo] = React.useState("");
    const onInput = (event: any) => {   
        setTodo(event.target.value)
    };
    console.log(todo);

    const onClickClear: () => void = () => {
        setTodo("");
    }

    const onClickCheck: () => void = () => {
    }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Hi a Edric, add a new To-do"
        value={todo}
        onChange={onInput}
        inputProps={{ 'aria-label': 'new todo' }}
      />
     <IconButton color="primary" sx={{ p: '10px' }} aria-label="cancel" onClick={onClickClear}>

        <CancelIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="check" onClick={onClickCheck}>
        <CheckIcon />
      </IconButton>
    </Paper>
  );
}
