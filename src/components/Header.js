import React, { useEffect } from 'react'
import styled from 'styled-components'
/* import { auth, provider } from '../firebase'
import { 
    setUser, 
    setSignOut, 
    getUserName,  
    getUserPhoto
} from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom' */
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import styles from './Header.module.css'



const  Header = () => {

    // const classes = useStyles();
    /* const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(getUserName)
    const userPhoto = useSelector(getUserPhoto) */

    const [menanchorEl, setMenAnchorEl] = React.useState(null);
    const [womenanchorEl, setWomenAnchorEl] = React.useState(null);
    const [kidsanchorEl, setKidsAnchorEl] = React.useState(null);

    /* useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                saveUser(user)
                history.push('/home')
            }
        })
    }, [userName]) */

    // const open = Boolean(anchorEl);

    /* const handleAuth = () => {

        if  (!userName) {
            auth.signInWithPopup(provider)
                .then((res) => {
                    console.log(res)
                    saveUser(res.user)
                })
                .catch((err) => console.log(err))
        } else {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOut())
                    history.push('/')
                })
                .catch(err => console.log(err))
        }
    } */

    /* const saveUser = (user) => {
        dispatch(setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        })) 
    } */


    const handleMenPopoverOpen = (event) => {
        setMenAnchorEl(event.currentTarget);
      };
    
    const handleMenPopoverClose = () => {
        setMenAnchorEl(null);
    };

    const handleWomenPopoverOpen = (event) => {
        setWomenAnchorEl(event.currentTarget);
      };
    
    const handleWomenPopoverClose = () => {
        setWomenAnchorEl(null);
    };

    const handleKidsPopoverOpen = (event) => {
        setKidsAnchorEl(event.currentTarget)
    }

    const handleKidsPopoverClose = () => {
        setKidsAnchorEl(null);
    }


    return (
        <Nav>
            {/* <Logo>
                <img src = '/images/logo.svg' alt = 'Disney+' />
            </Logo> */}
            <>
            <NavMenu>
                <a href ="/home">
                    <img src = "/images/home-icon.svg" alt = "Home" />    
                    <span>HOME</span>
                </a>
                <a href ="/search">
                    <img src = "/images/search-icon.svg" alt = "" />    
                    <span>SEARCH</span>
                </a>
                
                <Menu
                    id="men"
                    anchorEl={menanchorEl}
                    open={Boolean(menanchorEl)}
                    onClose={handleMenPopoverClose}
                    MenuListProps={{ onMouseLeave: handleMenPopoverClose }}
                    style={{top: "5%"}}
                >
                    <MenuItem>
                        <Link to="/men-shirts">Shirts</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/men-pants">Pants</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/men-tshirts">T-shirts</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/men-combo">Shirt + Pant</Link>
                    </MenuItem>
                </Menu>


                <Typography
                aria-owns={menanchorEl ? "men" : undefined}
                aria-haspopup="true"
                onClick={handleMenPopoverOpen}
                onMouseOver={handleMenPopoverOpen}
                >
                    <a href ="/watchlist"> 
                        <span>MEN</span>
                    </a>
                </Typography>

                <Menu
                    id="women"
                    anchorEl={womenanchorEl}
                    open={Boolean(womenanchorEl)}
                    onClose={handleWomenPopoverClose}
                    MenuListProps={{ onMouseLeave: handleWomenPopoverClose }}
                    style={{top: "5%"}}
                >
                    <MenuItem>
                        <Link to="/women-shirts">Shirts & T-shirts</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-pants">Pants</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-dresses">Punjabi Dresses</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-sarees">Sarees</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-scarfs">Duppata's & Scarfs</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-lehangas">Lehanga's</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/women-night-wear">Night Wear</Link>
                    </MenuItem>
                </Menu>

                <Typography
                aria-owns={womenanchorEl ? "women" : undefined}
                aria-haspopup="true"
                onClick={handleWomenPopoverOpen}
                onMouseOver={handleWomenPopoverOpen}
                >
                    <a href ="/watchlist"> 
                        <span>WOMEN</span>
                    </a>
                </Typography>

                <Menu
                    id="kids"
                    anchorEl={kidsanchorEl}
                    open={Boolean(kidsanchorEl)}
                    onClose={handleKidsPopoverClose}
                    MenuListProps={{ onMouseLeave: handleKidsPopoverClose }}
                    style={{top: "5%"}}
                >
                    <MenuItem>
                        <Link to="/boy-section">
                            Boy
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/girl-section">
                            Girl
                        </Link>
                    </MenuItem>
                </Menu>

                <Typography
                aria-owns={kidsanchorEl ? "kids" : undefined}
                aria-haspopup="true"
                onClick={handleKidsPopoverOpen}
                onMouseOver={handleKidsPopoverOpen}
                >
                    <a href ="/watchlist"> 
                        <span>KIDS</span>
                    </a>
                </Typography>


                <a href ="/movies">
                    <span>CUSTOMERIZED</span>
                </a>
            </NavMenu>
            {/* <SignOut>
                <UserImg src = {userPhoto} alt = {userName} />
                <DropDown>
                    <span onClick = {handleAuth}>Sign out</span>
                </DropDown>
            </SignOut> */}
            </>
        </Nav>
    )
}

const Nav = styled.nav`
    position: relative;
    height: 70px;
    width: 100%;
    background-color: #343A40;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    display: flex;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    padding: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
          height: 20px;
          min-width: 20px;
          width: 20px;
          z-index: auto;
        }
        span {
          color: rgb(249, 249, 249);
          font-size: 13px;
          letter-spacing: 1.42px;
          line-height: 1.08;
          padding: 2px 0px;
          white-space: nowrap;
          position: relative;
          &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
          }
        }
        &:hover {
          span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
          }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;


const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgba(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s; 
        }
    }
`


export default Header