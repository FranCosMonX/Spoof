import { useState } from "react";
import { Box, Button, Chip, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { MuiFileInput } from 'mui-file-input';
import AttachFileIcon from '@mui/icons-material/AttachFile'

export default function New(){
  const [file, setFile] = useState<File | null>(null);
  const [descricao, setDescricao] = useState('');
  const [tags, setTags] = useState<String[]>([]);
  const [tag, setTag] = useState('');

    const defaultTheme = createTheme();

    const uploadFile = (newFile: File | null) => {
      setFile(newFile)
    }

    const addTag = () => {
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

      if (descricao.length === 0 || !file) {
        enqueueSnackbar('Arquivo e descrição são obrigatórios', { variant: 'error' });
        return;
      }

      //post para /objeto/user-id/upload
      //mandando o arquivo, description e tags

      console.log(file)
      console.log(descricao)
      console.log(tags)
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
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
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