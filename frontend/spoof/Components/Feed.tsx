import * as React from 'react';
import { Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Box, IconButton, Modal } from "@mui/material";
import MoodBadIcon from '@mui/icons-material/MoodBad';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import axios from 'axios';

type Item = {
    id: string,
    name: string,
    description: string,
};

type Props = {
    list: Array<Item>,
};

const Feed: React.FC<Props> = ({ list }) => {
    const [open, setOpen] = React.useState(false);
    const [mediaUrl, setMediaUrl] = React.useState<string | null>(null);
    const [mediaType, setMediaType] = React.useState<string | null>(null);
    const url = process.env.NEXT_PUBLIC_API_URL;
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setMediaUrl(null);
        setMediaType(null);
    };

    const getMidia = async (id: String) => {
        const token = sessionStorage.getItem('bearerToken');
        try {
            const response = await axios.get(url + `/objeto/${id}/upload`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                responseType: 'blob'  // Recebendo a mídia como Blob
            });

            if ([200, 201].includes(response.status)) {
                const mediaUrl = URL.createObjectURL(response.data);
                const mediaType = response.data.type.split('/')[0]; // "image", "video" ou "audio"
                setMediaUrl(mediaUrl);
                setMediaType(mediaType);
                handleOpen();
            } else if ([400, 401].includes(response.status)) {
                enqueueSnackbar(`Erro: ${response.data.message}`, { variant: 'error' });
            } else {
                enqueueSnackbar('Ocorreu um erro ao carregar a mídia.', { variant: 'error' });
            }
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                enqueueSnackbar(`Erro: ${error.response.data.message}`, { variant: 'error' });
            } else {
                enqueueSnackbar('Ocorreu um erro ao carregar a mídia.', { variant: 'error' });
            }
        }
    };

    const removerItem = async (id: String) => {
        const user = sessionStorage.getItem('user');
        const token = sessionStorage.getItem('bearerToken');
        try {
            const response = await axios.delete(url + `/objeto/${user}/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            });

            if ([200, 201].includes(response.status)) {
                enqueueSnackbar(`Post removido com sucesso!`, { variant: 'success' });
                router.reload()
            } else if ([400, 401].includes(response.status)) {
                enqueueSnackbar(`Erro: ${response.data.message}`, { variant: 'error' });
            } else {
                enqueueSnackbar('Ocorreu um erro ao remover a mídia.', { variant: 'error' });
            }
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                enqueueSnackbar(`Erro: ${error.response.data.message}`, { variant: 'error' });
            } else {
                enqueueSnackbar('Ocorreu um erro ao remover a mídia.', { variant: 'error' });
            }
        }
    };

    return (
        <Container id="feed" sx={{ py: { xs: 8, sm: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h4" color="text.primary">
                        Meus Posts
                    </Typography>
                </Grid>
                <Box
                    sx={{
                        m: 'auto',
                        width: 1200,
                        height: 500,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    {list.length > 0 ? (
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome</TableCell>
                                            <TableCell>Descrição</TableCell>
                                            <TableCell>Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {list.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>{row.description}</TableCell>
                                                <TableCell>
                                                    <Stack direction="row" spacing={2}>
                                                        <IconButton onClick={() => getMidia(row.id)} color="primary" aria-label="Visualizar">
                                                            <SendIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => router.push(`/posts/new/${row.id}`)} aria-label="Editar">
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => removerItem(row.id)} aria-label="delete">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    ) : (
                        <Grid item xs={12}>
                            <Stack direction="row" spacing={2}>
                                <MoodBadIcon />
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mb: { xs: 2, sm: 4 } }}
                                >
                                    Nenhum resultado encontrado.
                                </Typography>
                            </Stack>
                        </Grid>
                    )}
                </Box>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: mediaType === 'image' ? 'auto' : 600,
                        height: mediaType === 'image' ? 'auto' : 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {mediaType === 'image' && mediaUrl && (
                        <Box
                            component="img"
                            src={mediaUrl}
                            alt="Media"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                    {mediaType === 'video' && mediaUrl && (
                        <video controls width="100%" height="100%">
                            <source src={mediaUrl} type="video/mp4" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                    )}
                    {mediaType === 'audio' && mediaUrl && (
                        <audio controls>
                            <source src={mediaUrl} type="audio/mp3" />
                            Seu navegador não suporta a reprodução de áudio.
                        </audio>
                    )}
                </Box>
            </Modal>
        </Container>
    );
}

export default Feed;