import { useEffect, useState } from "react";
import { Box, Button, Chip, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { MuiFileInput } from 'mui-file-input';
import AttachFileIcon from '@mui/icons-material/AttachFile'
import axios from "axios";
import { useRouter } from "next/router";

export default function New(){
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState('');
  const [id, setId] = useState<string | null>(null);

    const defaultTheme = createTheme();
    const router = useRouter();

    const url = process.env.NEXT_PUBLIC_API_URL;
    let userID: String | null; 

    let form = new FormData();

    useEffect(() => {
      const userId = sessionStorage.getItem('user');
      setId(userId);
    }, []);    

    const uploadFile = (newFile: File | null) => {
      setFile(newFile)
    }

    const addTag = () => {
      if(tag.length === 0) return;
      
      setTag('');
      const newTags = [...tags, tag];
      setTags(newTags);
    }

    const handleDelete = (tagToDelete: String) => {
      const newTags = tags.filter(tag => tag !== tagToDelete);
      setTags(newTags);
    }
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const token = sessionStorage.getItem('bearerToken');

      if (description.length === 0 || !file) {
        enqueueSnackbar('Arquivo e descrição são obrigatórios', { variant: 'error' });
        return;
      }

      form.set('file', file);
      form.set('description', description);
      form.set('tags', tags.join());

      await axios.post(`${url}/objeto/${id}/upload`, form, {
        headers:{
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => {
        enqueueSnackbar('Post criado com sucesso!', { variant: 'success' });
        router.push('/');
      })
      .catch(error => {
        console.error(error);
      })
    }

    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
                Novo Post
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MuiFileInput 
                value={file} 
                onChange={uploadFile} 
                placeholder="Inserir arquivo"
                InputProps={{
                  startAdornment: <AttachFileIcon/>
                }}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="descricao"
                  required
                  fullWidth
                  id="descricao"
                  label="Descrição"
                  autoFocus
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              {
                tags.length === 0 ? (
                  <></>
                ): (
                  (
                    <Grid item xs={12}>
                      {
                        tags.map(tag => {
                          return (
                            <Chip label={tag} key={tag} onDelete={() => handleDelete(tag)}/>
                          )
                        })
                      }
                    </Grid>
                  )
                )
              }

              <Grid item xs={12}>
                <TextField
                label="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                variant="outlined"
                onClick={addTag}
                >
                  Adicionar tag
                  </Button>
              </Grid>

              <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Novo Post
                    </Button>
                </Grid>
            </Grid>
            </Box>
        
            </Container>
        </ThemeProvider>
    )
}