import { useState } from "react";
import { Avatar, Grid, CssBaseline, Button, Box, FormControl, FilledInput, InputLabel, FormHelperText, InputAdornment, Typography, IconButton, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const theme = createTheme();

const ForgotPassword = () => {

    const [cred, setCred] = useState({
        user: {
            value: "",
            warning: ""
        },
        pwd: {
            new: {
                value: "",
                warning: ""
            },
            confirm: {
                value: "",
                warning: ""
            }
        }
    });

    const [showPWD, setshowPWD] = useState({
        new: false,
        confirm: false
    });

    const [otp, setOTP] = useState({
        new: "",
        confirm: "",
        warning: "check your email for OTP"
    });

    const [open, setOpen] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        const pattern = /^[0-9a-zA-Z]*$/;
        //clear every warnings
        setCred({
            ...cred,
            user: {
                ...cred.user,
                warning: ""
            },
            pwd: {
                ...cred.pwd,
                new: {
                    ...cred.pwd.new,
                    warning: ""
                },
                confirm: {
                    ...cred.pwd.confirm,
                    warning: ""
                }
            }
        });

        if (e.target.name === "username") {
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
                if (!pattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        user: {
                            ...cred.user,
                            warning: "Username must be alphanumerical."
                        }
                    });
                } else {
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

        if (e.target.name === "new-password") {
            if (e.target.value === "") {
                setCred({
                    ...cred,
                    pwd: {
                        ...cred.pwd,
                        new: {
                            ...cred.pwd.new,
                            value: "",
                            warning: "New password is required."
                        }
                    }
                });
            } else {
                if (!pattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.pwd,
                            new: {
                                ...cred.pwd.new,
                                warning: "New password must be alphanumerical."
                            }
                        }
                    });
                } else {
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.pwd,
                            new: {
                                ...cred.pwd.new,
                                value: e.target.value,
                                warning: ""
                            }
                        }
                    });
                }
            }
        }

        if (e.target.name === "confirm-password") {
            if (e.target.value === "") {
                setCred({
                    ...cred,
                    pwd: {
                        ...cred.pwd,
                        confirm: {
                            ...cred.pwd.confirm,
                            value: "",
                            warning: "Confirm password is required."
                        }
                    }
                });
            } else {
                if (!pattern.test(e.target.value)) {
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.pwd,
                            confirm: {
                                ...cred.pwd.confirm,
                                value: "",
                                warning: "Confirm password must be alphanumerical."
                            }
                        }
                    });
                } else {
                    setCred({
                        ...cred,
                        pwd: {
                            ...cred.pwd,
                            confirm: {
                                ...cred.pwd.confirm,
                                value: e.target.value,
                                warning: ""
                            }
                        }
                    });
                }
            }
        }
    }

    function changePwd(e) {
        e.preventDefault();

        if (cred.pwd.new.value !== cred.pwd.confirm.value) {
            setCred({
                ...cred,
                pwd: {
                    ...cred.pwd,
                    new: {
                        ...cred.pwd.new,
                        value: "",
                        warning: "New and confirm password must be same."
                    },
                    confirm: {
                        ...cred.pwd.confirm,
                        value: "",
                        warning: "Confirm and new password must be same."
                    }
                }
            });
            return;
        }

        if ((cred.user.value.length < 8) || (cred.user.value.length > 30) || (cred.pwd.new.value.length < 10) || (cred.pwd.new.value.length > 30) || (cred.pwd.confirm.value.length < 10) || (cred.pwd.confirm.value.length > 30)) {
            const warning = {
                user: "",
                new: "",
                confirm: ""
            }
            if ((cred.user.value.length < 8) || (cred.user.value.length > 30)) {
                warning.user = (cred.user.value === "") ? "Username is required." : "Username must be 8 to 30 letters long."
            }
            if ((cred.pwd.new.value.length < 10) || (cred.pwd.new.value.length > 30)) {
                warning.new = (cred.pwd.new.value === "") ? "New password is required." : "New Password must be 10 to 30 letters long."
            }
            if ((cred.pwd.confirm.value.length < 10) || (cred.pwd.confirm.value.length > 30)) {
                warning.confirm = (cred.pwd.confirm.value === "") ? "Confirm password is required." : "Confirm Password must be 10 to 30 letters long."
            }
            setCred({
                ...cred,
                user: {
                    ...cred.user,
                    warning: warning.user
                },
                pwd: {
                    ...cred.pwd,
                    new: {
                        ...cred.pwd.new,
                        warning: warning.new
                    },
                    confirm: {
                        ...cred.pwd.confirm,
                        warning: warning.confirm
                    }
                }
            });
        } else {
            //code for changing password
            fetch('http://localhost:4000/API/sendotp', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: "user",
                    value: cred.user.value
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
                            value: "",
                            warning: ""
                        },
                        pwd: {
                            ...cred.pwd,
                            new: {
                                ...cred.pwd.new,
                                value: ""
                            },
                            confirm: {
                                ...cred.pwd.confirm,
                                value: ""
                            }
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
        if ((otp.new !== "") && pattern.test(otp.new)) {
            if (otp.new === otp.confirm) {
                //code for changing password
                fetch('http://localhost:4000/API/changepwd', {
                    method: 'PUT',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: cred.user.value,
                        newpwd: cred.pwd.new.value
                    })
                }).then(response => {
                    return response.status;
                }).then(status => {
                    if (status === 500) {
                        setCred({
                            ...cred,
                            user: {
                                ...cred.user,
                                value: "",
                                warning: "Username is Invalid."
                            },
                            pwd: {
                                ...cred.pwd,
                                new: {
                                    ...cred.pwd.new,
                                    value: ""
                                },
                                confirm: {
                                    ...cred.pwd.confirm,
                                    value: ""
                                }
                            }
                        });
                        setOpen(false);
                        window.alert("Password change unsuccessful.");
                    } else if (status === 200) {
                        setCred({
                            ...cred,
                            user: {
                                ...cred.user,
                                value: ""
                            },
                            pwd: {
                                ...cred.pwd,
                                new: {
                                    ...cred.pwd.new,
                                    value: ""
                                },
                                confirm: {
                                    ...cred.pwd.confirm,
                                    value: ""
                                }
                            }
                        });
                        setOpen(false);
                        window.alert("Password change successful.");
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
                    <Button onClick={verifyOTP}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            < ThemeProvider theme={theme}>
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
                            <VpnKeyIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Change Password
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
                                            onChange={handleChange}
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
                                        <InputLabel htmlFor="new-password" error={cred.pwd.new.warning !== ""}>New password</InputLabel>
                                        <FilledInput
                                            id="new-password"
                                            name="new-password"
                                            label="New password"
                                            value={cred.pwd.new.value}
                                            onChange={handleChange}
                                            error={cred.pwd.new.warning !== ""}
                                            type={showPWD.new ? 'text' : 'password'}
                                            aria-describedby="my-helper-text-new-pwd"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => {
                                                            setshowPWD({
                                                                ...showPWD,
                                                                new: !showPWD.new
                                                            })
                                                        }}
                                                        edge="end"
                                                    >
                                                        {showPWD.new ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <FormHelperText id="my-helper-text-pwd" error={cred.pwd.new.warning !== ""}>{cred.pwd.new.warning}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="filled"
                                        fullWidth
                                    >
                                        <InputLabel htmlFor="confirm-password" error={cred.pwd.confirm.warning !== ""}>Confirm Password</InputLabel>
                                        <FilledInput
                                            id="confirm-password"
                                            name="confirm-password"
                                            label="Confirm Password"
                                            value={cred.pwd.confirm.value}
                                            onChange={handleChange}
                                            error={cred.pwd.confirm.warning !== ""}
                                            type={showPWD.confirm ? 'text' : 'password'}
                                            aria-describedby="my-helper-text-confirm-pwd"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => {
                                                            setshowPWD({
                                                                ...showPWD,
                                                                confirm: !showPWD.confirm
                                                            });
                                                        }}
                                                        edge="end"
                                                    >
                                                        {showPWD.confirm ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <FormHelperText id="my-helper-text-pwd" error={cred.pwd.confirm.warning !== ""}>{cred.pwd.confirm.warning}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={changePwd}
                                        style={{ backgroundColor: "#E35A5C", color: "#FFFFFF" }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2} >
                                <Grid item xs>
                                    <Link to="/LogIn">
                                        Already have an account?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/SignUp" >
                                        Don't have an account?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
        </>
    );
}

export default ForgotPassword;