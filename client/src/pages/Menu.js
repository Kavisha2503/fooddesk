import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Menu = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default Menu;