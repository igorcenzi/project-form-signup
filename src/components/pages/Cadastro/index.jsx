import { Button, Checkbox, TextField, FormControlLabel } from '@mui/material';
import  StyledDiv  from '../../styleds';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';

const Cadastro = ({addUser}) => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Insira nome de usuário'),
    fullName: yup.string().required('Insira seu nome completo'),
    age: yup.number().typeError('Idade inválida, digite um número').required('Idade obrigatória'),
    email: yup.string().email('Email inválido').required('Insira seu email'),
    confirmEmail: yup.string().email('Email inválido').oneOf([yup.ref('email')], 'Email não confere').required('Confirme o email'),
    password: yup.string().required('Insira uma senha').matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Senha precisa conter maiúscula, minúscula, número, caracter especial e no mínimo 8 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não conferem').required('Confirme sua senha')
  })

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

  const handleRegister = (data) => {
    delete data.confirmEmail
    delete data.confirmPassword
    toast.success('Usuário cadastrado com sucesso!',{position: toast.POSITION.TOP_CENTER})
    addUser(data)
  }

  return (
    
    <StyledDiv onSubmit={handleSubmit(handleRegister)}>
      <TextField margin='normal' fullWidth label='Nome de usuário*' inputProps={{ maxLength: '18' }} {...register('username')}
      helperText={errors.username?.message}
      error={!!errors.username}/>
      <TextField margin='normal' fullWidth label='Nome completo*' {...register('fullName')}
      helperText={errors.fullName?.message}
      error={!!errors.fullName}/>
      <TextField margin='normal' fullWidth label='Idade*' type='number'  {...register('age')}
      helperText={errors.age?.message}
      error={!!errors.age}/>
      <TextField margin='normal' type='email' fullWidth label='Endereço de Email*' {...register('email')} helperText={errors.email?.message}
      error={!!errors.email}/>
      <TextField margin='normal' type='email' fullWidth label='Confirme seu Email*' {...register('confirmEmail')}
      helperText={errors.confirmEmail?.message}
      error={!!errors.confirmEmail}/>
      <div style={{display: 'flex', gap: '10px'}}>
      <TextField margin='normal' type='password' fullWidth label='Senha*' {...register('password')}
      helperText={errors.password?.message}
      error={!!errors.password}/>
      <TextField margin='normal' type='password' fullWidth label='Confirme sua senha*' {...register('confirmPassword')} helperText={errors.confirmPassword?.message}
      error={!!errors.confirmPassword}/>
      </div>
      <FormControlLabel control={<Checkbox defaultChecked required/>} label="Eu aceito os termos de uso da aplicação" />
      <Button variant='contained' fullWidth sx={{mt: 2}} size='large' type='submit'>Cadastrar</Button>
    </StyledDiv>
  );
}

export default Cadastro