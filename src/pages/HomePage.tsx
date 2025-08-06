
import axios from 'axios';

const HomePage = () => {
    (async () => {
        try {
            // Fetch token list JSON
            const { data } = await axios.get(
                'https://raw.githubusercontent.com/itzzzme/spotify-key/refs/heads/main/token.json'
            );

            // Pick the first token from the tokens array
            const accessToken = data.tokens?.[0]?.access_token;

            if (!accessToken) {
                throw new Error('No access token found');
            }

            // Call Spotify API with the token
            const response = await axios.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            console.log(response.data);
        } catch (err: any) {
            console.error('Error:', err.message || err);
        }
    })();

    return (
        <div>HomePage</div>
    )
}

export default HomePage