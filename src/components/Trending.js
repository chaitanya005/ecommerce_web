import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOriginals } from '../features/movie/movieSlice'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
      boxShadow: 'none'
    },
    media: {
      height: 0,
      paddingTop: '150%', // 16:9

    },
  }));

const Trending = () => {
    const movies = useSelector(selectOriginals)
    // console.log(movies)
    const classes = useStyles();
    return (
        <Container>
            <H1>Trending Collections</H1>
            <Content>
              <Wrap>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
                        title="Paella "
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" component="h2">
                                Item One
                            </Typography>
                            <div className={styles.starsRow} style = {{flexDirection: 'row-reverse'}}>
                                <div className={styles.priceTag}>
                                    <div className={styles.priceTagPrice}>
                                    {'$100.00'}
                                    </div>
                                    <div className={styles.triangle}>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h6" component="h2">
                        Silk Saree
                        </Typography>
                    </CardContent>
                </Card> 
                </Wrap>
                <Wrap>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
                        title="Paella "
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" component="h2">
                                Item One
                            </Typography>
                            <div className={styles.starsRow} style = {{flexDirection: 'row-reverse'}}>
                                <div className={styles.priceTag}>
                                    <div className={styles.priceTagPrice}>
                                    {'$100.00'}
                                    </div>
                                    <div className={styles.triangle}>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h6" component="h2">
                        Silk Saree
                        </Typography>
                    </CardContent>
                </Card>
                </Wrap>
                <Wrap> 
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
                        title="Paella "
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" component="h2">
                                Item One
                            </Typography>
                            <div className={styles.starsRow} style = {{flexDirection: 'row-reverse'}}>
                                <div className={styles.priceTag}>
                                    <div className={styles.priceTagPrice}>
                                    {'$100.00'}
                                    </div>
                                    <div className={styles.triangle}>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h6" component="h2">
                        Silk Saree
                        </Typography>
                    </CardContent>
                </Card> 
                </Wrap>
                <Wrap>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="/images/photo_1.jpg"
                        title="Paella "
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" component="h2">
                                Item One
                            </Typography>
                            <div className={styles.starsRow} style = {{flexDirection: 'row-reverse'}}>
                                <div className={styles.priceTag}>
                                    <div className={styles.priceTagPrice}>
                                    {'$100.00'}
                                    </div>
                                    <div className={styles.triangle}>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h6" component="h2">
                        Silk Saree
                        </Typography>
                    </CardContent>
                </Card> 
                </Wrap>
                <Wrap>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="/images/photo_1.jpg"
                        title="Paella "
                    />
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography variant="h5" component="h2">
                                Item One
                            </Typography>
                            <div className={styles.starsRow} style = {{flexDirection: 'row-reverse'}}>
                                <div className={styles.priceTag}>
                                    <div className={styles.priceTagPrice}>
                                    {'$100.00'}
                                    </div>
                                    <div className={styles.triangle}>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h6" component="h2">
                        Silk Saree
                        </Typography>
                    </CardContent>
                </Card> 
                </Wrap>
            </Content>
        </Container>
    )
}


const Container = styled.div`
    padding: 0 0 26px;
`
const H1 = styled.h1`
    color: #3e4152;
    text-align: center;
    text-transform: uppercase;
`


const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    // padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgb(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        object-fit: cover;
        height: 100%;
        position: absolute;
        opacity: 1;
        transtion: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }


`

export default Trending