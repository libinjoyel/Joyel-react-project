import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    setOpen(false); // Close dialog on successful login
  };

  return (
    <div>
      {/* Login Button */}
      <Button variant="contained" data-testid="login" onClick={handleClickOpen}>
        Login
      </Button>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* Username Field */}
          <TextField
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Password Field */}
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel Button */}
          <Button data-testid="cancel" onClick={handleClose}>
            Cancel
          </Button>
          {/* Login Button */}
          <Button data-testid="dia-login" onClick={handleLogin}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;