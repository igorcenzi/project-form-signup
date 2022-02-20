import {Box, Typography} from '@mui/material'
import './styles.css'

const CardUsuario = ({usuario, logout}) => {


  return(
    <Box sx={{backgroundColor: 'lightblue', padding: '36px', borderRadius: '4px', color: 'darkblue'}}>
      <Typography variant='h1' sx={{fontSize: '36px'}} >Bem vindo, {usuario.fullName}</Typography>
      <p>Seu nome de usuário: {usuario.username}</p>
      <p>Sua idade: {usuario.age}</p>
      <p>Seu email: {usuario.email}</p>
      <p>Seu senha: {usuario.password}</p>
      <Typography variant='h3' onClick={() => logout()} sx={{cursor: 'pointer', fontSize: '14px', border: '1px solid white', width: 'fit-content', padding: '12px', textAlign: 'center', borderRadius: '4px'}}>Logout</Typography>
    </Box>
  )
}

export default CardUsuario