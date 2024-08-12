import { useEffect, useState } from "react";
import { Box, Button, Chip, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useRouter } from "next/router";

const EditPost = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState('');

    const defaultTheme = createTheme();
    const router = useRouter();
    const { id: postId } = router.query;
    const url = process.env.NEXT_PUBLIC_API_URL;
    let form = new FormData();

    useEffect(() => {
        if (postId) {
            fetchPostData(postId as string);
        }
    }, [postId]);

    const fetchPostData = async (postId: string) => {
        const userId = sessionStorage.getItem('user');
        const token = sessionStorage.getItem('bearerToken');
        try {
            const response = await axios.get(`${url}/objeto/${userId}/${postId}/detalhes`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.status === 200) {
                const { description, tags, name } = response.data.data;
                setDescription(description);
                setTags(tags);
                setName(name)
            } else {
                enqueueSnackbar('Erro ao carregar os dados do post.', { variant: 'error' });
            }
        } catch (error: any) {
            console.error(error);
            enqueueSnackbar('Erro ao carregar os dados do post.', { variant: 'error' });
        }
    };

    const addTag = () => {
        if (tag.length === 0) return;

        setTag('');
        const newTags = [...tags, tag];
        setTags(newTags);
    };

    const handleDelete = (tagToDelete: String) => {
        const newTags = tags.filter(tag => tag !== tagToDelete);
        setTags(newTags);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userId = sessionStorage.getItem('user');
        const token = sessionStorage.getItem('bearerToken');

        if (description.length === 0) {
            enqueueSnackbar('Descrição é obrigatória', { variant: 'error' });
            return;
        }

        form.set('description', description);
        form.set('tags', tags.join());

        try {
            await axios.patch(`${url}/objeto/${userId}/${postId}`, form, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            enqueueSnackbar('Post atualizado com sucesso!', { variant: 'success' });
            router.push('/');
        } catch (error: any) {
            console.error(error);
            enqueueSnackbar('Ocorreu um erro ao salvar o post.', { variant: 'error' });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Typography component="h1" variant="h5" sx={{ marginTop: 5 }}>
                    Editar Post
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Arquivo"
                                autoFocus
                                value={name}
                                disabled
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
                            tags.length > 0 && (
                                <Grid item xs={12}>
                                    {
                                        tags.map(tag => (
                                            <Chip label={tag} key={tag} onDelete={() => handleDelete(tag)} />
                                        ))
                                    }
                                </Grid>
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
                                Atualizar Post
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default EditPost;