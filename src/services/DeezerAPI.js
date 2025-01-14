import axios from 'axios';

const API_BASE_URL = 'https://api.deezer.com';

const searchTracks = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, {
            params: { q: query },
        });
        return response.data.data; // Retorna a lista de músicas.
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
        return [];
    }
};

export default { searchTracks };