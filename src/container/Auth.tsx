import { Grid, Button } from "@mui/material";
import bgOne from '../assets/abstract-shape.png';

export default function Auth() {
    return (
            <Grid container spacing={3} style={{ padding: '20px'}}>
                <Grid item xs={6}>
                    <div style={{ backgroundColor: 'black', borderRadius: '7px', border: 'solid 1px #cdcdcd', height: '8 e0vh' }}>
                        <img src={bgOne} style={{ width: '80hw', padding: '50px' }} alt='abstract-image' />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ borderRadius: '7px', border: 'solid 1px #cdcdcd', padding: '20px', display: 'flex', justifyContent: 'center', height: '90vh' }}>
                        <h2>Productive Mind</h2>
                        <p>With only the feature you need, Organic Mind is customed for individual seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
                        <Button style={{ width: '100%'}} onClick={() => console.log('hello world')} variant="contained">Get Started</Button>
                        <Button style={{ width: '100% '}} onClick={() => console.log('go to login page')}>Already have an account? Sign In</Button>
                    </div>
                </Grid>
            </Grid>
    )
}