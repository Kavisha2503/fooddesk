import { useState } from "react";
import { Avatar, Button, CssBaseline, InputAdornment, FormControl, InputLabel, FilledInput, FormHelperText, IconButton, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";

const theme = createTheme();

const SignUp = () => {

    const [cred, setCred] = useState({
        user: {
            value: "",
            warning: ""
        },
        pwd: {
            value: "",
            warning: ""
        },
        email: {
            value: "",
            warning: ""
        }
    });

    const [showPassword, setshowPassword] = useState(false);

    const [open, setOpen] = useState(false);

    const [otp, setOTP] = useState({
        new: "",
        confirm: "",
        warning: "check your email for OTP"
    });

    //checks the user input on every change in form fields
    function handleChange(e) {
        e.preventDefault();
        const pattern = /^[0-9a-zA-Z]*$/;
        const emailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //clear every warnings
        setCred({
            ...cred,
            user: {
                ...cred.user,
                warning: ""
            },
            pwd: {
                ...cred.pwd,
                warning: ""
            },
            email: {
                ...cred.email,
                warning: ""
            }
        });
        //check for the username
        if (e.target.name === "username") {
            //check whether its empty or not and set the warning
            if (e.target.value === "") {
                setCred({
                    ...cred,
                    user: {
                        ...cred.user,
                        value: "",
                        warning: "Username is required."
                    }
                });
            } else {
                //check whether it matches the pattern or not
                if (!pattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        user: {
                            ...cred.user,
                            warning: "Username must be alphanumerical."
                        }
                    });
                } else {
                    //set the username
                    setCred({
                        ...cred,
                        user: {
                            ...cred.user,
                            value: e.target.value,
                            warning: ""
                        }
                    });
                }
            }
        }

        if (e.target.name === "email") {
            //check whether its empty or not and set the warning
            if (e.target.value === "") {
                setCred({
                    ...cred,
                    email: {
                        ...cred.email,
                        value: "",
                        warning: "Email is required."
                    }
                });
            } else {
                //check whether it matches the pattern or not
                if (!emailpattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        email: {
                            ...cred.email,
                            warning: "Email is invalid."
                        }
                    });
                }
                setCred({
                    ...cred,
                    email: {
                        ...cred.email,
                        value: e.target.value,
                        warning: ""
                    }
                });
            }
        }

        if (e.target.name === "password") {
            //check whether its empty or not and set the warning
            if (e.target.value === "") {
                setCred({
                    ...cred,
                    pwd: {
                        ...cred.pwd,
                        value: "",
                        warning: "Password is required."
                    }
                });
            } else {
                //check whether it matches the pattern or not
                if (!pattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.pwd,
                            warning: "Password must be alphanumerical."
                        }
                    });
                } else {
                    //set the password
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.user,
                            value: e.target.value,
                            warning: ""
                        }
                    });
                }
            }
        }
    }

    function signupuser(e) {
        e.preventDefault();
        if ((cred.email.value === "") || (cred.user.value.length < 8) || (cred.user.value.length > 30) || (cred.pwd.value.length < 10) || (cred.pwd.value.length > 30)) {
            //check for the errors
            const warning = {
                user: "",
                pwd: "",
                email: ""
            }
            if (cred.email.value === "") {
                warning.email = "email is required."
            }
            if ((cred.user.value.length < 8) || (cred.user.value.length > 30)) {
                warning.user = (cred.user.value === "") ? "Username is required." : "Username must be 8 to 30 letters long."
            }
            if ((cred.pwd.value.length < 10) || (cred.pwd.value.length > 30)) {
                warning.pwd = (cred.pwd.value === "") ? "password is required." : "Password must be 10 to 30 letters long."
            }
            setCred({
                ...cred,
                user: {
                    ...cred.user,
                    warning: warning.user
                },
                pwd: {
                    ...cred.pwd,
                    warning: warning.pwd
                },
                email: {
                    ...cred.email,
                    warning: warning.email
                }
            });
        } else {
            fetch(
                'http://localhost:4000/API/sendotp', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "email",
                    value: cred.email.value
                })
            }).then(response => {
                if (response.status === 500) {
                    return undefined;
                }
                return response.json();
            }).then(data => {
                if (data === undefined) {
                    setCred({
                        ...cred,
                        user: {
                            ...cred.user,
                            value: ""
                        },
                        pwd: {
                            ...cred.pwd,
                            value: ""
                        },
                        email: {
                            ...cred.email,
                            value: "",
                            warning: "Something went wrong with mail."
                        }
                    });
                    window.alert("Password change unsuccessful.");
                } else {
                    setOTP({
                        ...otp,
                        confirm: data.otp
                    });
                    setOpen(true);
                }
            });
        }
    }

    function verifyOTP(e) {
        e.preventDefault();
        const pattern = /^[0-9a-zA-Z]{10}$/;
        if ((otp.new !== "") && (pattern.test(otp.new))) {
            if (otp.new === otp.confirm) {
                console.log('cred', cred);
                fetch('http://localhost:4000/API/signup', {
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: cred.user.value,
                        pwd: cred.pwd.value,
                        email: cred.email.value
                    })
                }).then(response => {
                    return response.status;
                }).then(status => {
                    if (status === 500) {
                        setCred({
                            ...cred,
                            user: {
                                ...cred.user,
                                value: ""
                            },
                            pwd: {
                                ...cred.pwd,
                                value: ""
                            },
                            email: {
                                ...cred.email,
                                value: ""
                            }
                        });
                        setOpen(false);
                        window.alert("SignUp unsuccessful.");
                    } else if (status === 200) {
                        setCred({
                            ...cred,
                            user: {
                                ...cred.user,
                                value: ""
                            },
                            pwd: {
                                ...cred.pwd,
                                value: ""
                            },
                            email: {
                                ...cred.email,
                                value: ""
                            }
                        });
                        setOpen(false);
                        window.alert("SignUp successful.");
                    }
                });
                setOTP({
                    ...otp,
                    new: "",
                    confirm: ""
                })
            } else {
                setOTP({
                    ...otp,
                    warning: "OTP doesn't match."
                })
            }
        } else {
            if (otp.new === "") {
                setOTP({
                    ...otp,
                    warning: "OTP required."
                })
                return;
            }
            if (!pattern.test(otp.new)) {
                setOTP({
                    ...otp,
                    warning: "OTP is invalid."
                })
                return;
            }
        }
    }

    return (
        <>
            <Modal
                show={open}
                backdrop="static"
                centered
            >
                <Modal.Header>
                    <Modal.Title>
                        Enter your OTP
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        variant="filled"
                        fullWidth
                    >
                        <InputLabel htmlFor="OTP" error={otp.warning !== "check your email for OTP"}>OTP</InputLabel>
                        <FilledInput
                            autoFocus
                            type="text"
                            id="OTP"
                            label="OTP"
                            name="OTP"
                            onChange={(e) => {
                                setOTP({
                                    ...otp,
                                    new: e.target.value
                                })
                            }}
                            value={otp.new}
                            error={otp.warning !== "check your email for OTP"}
                            aria-describedby="my-helper-text-otp"
                        />
                        <FormHelperText id="my-helper-text-otp" error={otp.warning !== "check your email for OTP"}>{otp.warning}</FormHelperText>
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={(event) => verifyOTP(event)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="div" sx={{ mt: 1 }}>
                            <Grid container spacing={2} style={{ marginBottom: '10px' }}>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="username" error={cred.user.warning !== ""}>Username</InputLabel>
                                        <FilledInput
                                            autoFocus
                                            type="text"
                                            id="username"
                                            label="username"
                                            name="username"
                                            onChange={(event) => handleChange(event)}
                                            value={cred.user.value}
                                            error={cred.user.warning !== ""}
                                            aria-describedby="my-helper-text-user"
                                        />
                                        <FormHelperText id="my-helper-text-user" error={cred.user.warning !== ""}>{cred.user.warning}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="email" error={cred.email.warning !== ""}>Email</InputLabel>
                                        <FilledInput
                                            autoFocus
                                            type="email"
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            onChange={(event) => handleChange(event)}
                                            value={cred.email.value}
                                            error={cred.email.warning !== ""}
                                            aria-describedby="my-helper-text-email"
                                        />
                                        <FormHelperText id="my-helper-text-email" error={cred.email.warning !== ""}>{cred.email.warning}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="password" error={cred.pwd.warning !== ""}>Password</InputLabel>
                                        <FilledInput
                                            id="password"
                                            name="password"
                                            label="Password"
                                            type={showPassword ? "text" : "password"}
                                            value={cred.pwd.value}
                                            onChange={(event) => handleChange(event)}
                                            error={cred.pwd.warning !== ""}
                                            aria-describedby="my-helper-text-pwd"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setshowPassword(!showPassword)}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <FormHelperText id="my-helper-text-pwd" error={cred.pwd.warning !== ""}>{cred.pwd.warning}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={(event) => signupuser(event)}
                                        style={{ backgroundColor: "#E35A5C", color: "#FFFFFF" }}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Grid item>
                                    <Link to="/LogIn">
                                        Already have an account?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/ForgotPassword">
                                        Forgot Password
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default SignUp;