import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#1a75d2',
            contrastText: '#fff'
        },
        secondary: {
            main: '#90c9f9'
        },
        warning: {
            main: '#f44336'
        },
        error: {
            main: '#e53935',
        },
        background: {
            default: '#fff'
        }

    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    color: '#1a75d2'
                }
            }
        }
    },
    typography: {
      h1: {
        fontFamily: "inherit",
        fontSize: '32px',
        fontWeight:'500',
        color: '#fff'
      },
      h2: {
        fontFamily: "inherit",
        fontSize: '24px',
        fontWeight: '400',
        color: '#e3f2fd'
      }
    },
  })




export const darkTheme = createTheme({
    palette: {
        primary: {
            light: '#ef5350',
            main: '#f44336',
            dark: '#e53935',
            contrastText: '#394e67'
        },
        secondary: {
            light: '#6d86a6',
            main: '#4e637c',
            dark: '#2c3b4d'
        },
        error: {
            main: '#e53935',
        },
        warning: {
            main: '#1a75d2'
        },

        background: {
            default: '#2c3b4d',
            paper: '#2c3b4d'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    color: '#fff'
                }
            }
        }
    },
    typography: {
      h1: {
        fontFamily: "inherit",
        fontSize: '32px',
        fontWeight:'500',
        color: '#2c3b4d'
      },
      h2: {
        fontFamily: "inherit",
        fontSize: '24px',
        fontWeight: '400',
        color:'#6d86a6'
      }
    }
  })
