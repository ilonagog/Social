import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <div>
            <AppBar position="static">
            </AppBar>
            <Container maxWidth="md" sx={{ pt: 4 }}>
                <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
                    Connect with Friends
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                    Share Your Posts
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Write Comments about your experiences, thoughts, and ideas.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                    Connect with Friends
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Stay connected with your friends and family, send messages.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                    Discover New Places,Food, Books and any new interests!
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Explore new interests, enhance education.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                    Stay Updated!
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    You can get updates on the latest news, and events from your network and the wider community.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
