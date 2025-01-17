const API_URL = 'https://api.deezer.com';

export const searchTracks = async (query) => {
    try {
        const response = await fetch(`${API_URL}/search?q=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data; // Ajuste baseado na estrutura da resposta da API do Deezer
    } catch (error) {
        console.error('Error fetching tracks:', error);
        throw error;
    }
};

export const fetchTrackDetails = async (trackId) => {
    try {
        const response = await fetch(`${API_URL}/track/${trackId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Ajuste baseado na estrutura da resposta da API do Deezer
    } catch (error) {
        console.error('Error fetching track details:', error);
        throw error;
    }
};