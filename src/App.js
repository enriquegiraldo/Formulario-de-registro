import './App.css';
import Container from '@mui/material/Container';
import FormSingUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';
function App() {

  const handleSubmit = ( valores) =>{
    console.log('APPJS: ',valores);
    
  }

  return (
    <Container component="section" maxWidth="sm">
    <Typography variant='h3' align='center' >Formulario Registro</Typography>
     <FormSingUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
