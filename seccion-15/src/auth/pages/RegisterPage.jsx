import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
        <form>
            <Grid2>
                <Grid2  xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Nombre Completo" 
                        type="text" 
                        placeholder='John Doe' 
                        fullWidth
                    />
                </Grid2>
                <Grid2  xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Correo" 
                        type="email" 
                        placeholder='correo@google.com' 
                        fullWidth
                    />
                </Grid2>

                <Grid2  xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                    />
                </Grid2>
                
                <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid2 xs={ 12 } sm={ 6 }>
                        <Button variant='contained' fullWidth>
                        Crear Cuenta
                        </Button>
                    </Grid2>
                </Grid2>

                <Grid2 direction="row" justifyContent="end">
                  <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color="inherit" to="/auth/login">
                        Ingresar
                    </Link>
                </Grid2>

            </Grid2>
        </form>

    </AuthLayout>

  )
}
