import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';


export default function ContactForm() {
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    message: ""
  })

  useEffect(() => {
    if (!values.firstName && !values.email && !values.message) {
      window.scrollTo({ top: 0, behavior: "auto" })
    }

  }, [values])


  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  return (
    <form>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { marginTop: 4, width: '100%' },
          '& label': {
            color: '#A0AAB4',
          },
          '& label.Mui-focused': {
            color: '#A0AAB4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
            color: '#A0AAB4',
          },
          '& .MuiOutlinedInput': {
            color: '#A0AAB4',
          },
          '& .MuiOutlinedInput-input': {
            color: "#FFFFFF",
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7',
              color: '#A0AAB4',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
              color: '#A0AAB4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6F7E8C',
              color: '#A0AAB4',
            },
          }
        }}
        noValidate
        autoComplete="off"
      >

        <TextField
          type='text'
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          required
        />

        <TextField
          type='email'
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name='email'
          value={values.email}
          onChange={handleChange}
          required
        />

        <TextField
          type='text'
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          minRows={4}
          name='message'
          value={values.message}
          onChange={handleChange}
          required
        />
      </Box>
    </form>
  );
}