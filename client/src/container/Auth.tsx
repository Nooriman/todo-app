import { Grid, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import bgOne from '../assets/abstract-shape.png';
import { useState } from "react";
import HorizontalLineWithText from "../components/HorizontalLineWithText/HorizontalLineWithText";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import content from '../data/content.json';

interface Cred {
    email: string,
    password: string,
}

export default function Auth() {

    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const [cred, setCred] = useState<Cred>({email: '', password: ''});
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSignIn = () => {
        // setUp a proper authentication method. (e.g Auth2, saml, openid, auth0)

        alert('logged in');
    }

    const handleGoogleLogin = () => {
        alert('Google Login');
    }

    const handleFacebookLogin = () => {
        alert('Facebook Login');
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Grid container spacing={4} style={{ padding: '20px' }}>
            <Grid item xs={6}>
                <div style={{ backgroundColor: 'black', borderRadius: '2%', border: 'solidj1px #cdcdcd', height: '90vh', padding: '20px' }}>
                    <h1 style={{ color: 'white', fontSize: '3rem'}}>{content.appName}</h1>
                    <img src={bgOne} style={{ width: '80hw', padding: '50px', margin: 'auto' }} alt='abstract-image' />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ borderRadius: '2%', border: 'solid 1px #cdcdcd', padding: '20px', display: 'flex', justifyContent: 'center', height: '90vh', flexDirection: 'column' }}>
                    {!isSignIn ? 
                    <div style={{ width: '70%', margin: 'auto'}}>
                        <h1>Productive Mind</h1>
                        <p>With only the feature you need, Organic Mind is customed for individual seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
                        <Button style={{ width: '100%', backgroundColor: '#fcba03', color: 'black' }} className='bg-pri' onClick={() => console.log('hello world')} variant="contained">Get Started</Button>
                        <Button style={{ width: '100% ', color: 'darkgrey' }} onClick={() => setIsSignIn(true)}> Already have an account? Sign In</Button>
                    </div> : 
                    <div style={{ width: '50%', margin: 'auto'}}>
                        <h1>Sign In</h1>
                        <TextField variant="outlined" label="Email" value={cred.email} style={{width: '100%'}} onChange={e => setCred({...cred, email: e.target.value})} size='small' />
                        <FormControl sx={{ width: '100%'}} size="small" variant="outlined">
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput 
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                         >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                         </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button onClick={handleSignIn} variant="contained" style={{ width: '100%'}} className="bg-pri">Sign In</Button>
                        <HorizontalLineWithText text='or' />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button onClick={handleGoogleLogin} variant="contained" color="secondary"  style={{width: '100%'}}>Google</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={handleFacebookLogin} variant="contained" color="secondary"  style={{width: '100%'}}>Facebook</Button>
                            </Grid>
                        </Grid>
                        <Button onClick={() => setIsSignIn(false)} style={{ width: '100%'}}>Don't have an account? Sign Up</Button>
                    </div>
                    }
                </div>
            </Grid>
        </Grid>
    )
}