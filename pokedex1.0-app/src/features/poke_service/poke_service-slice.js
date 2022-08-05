import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// 1er argument = nom affiché pour les action/types
// 2ème argument = créateur de payload, doit toujours être une fonction asynchrone !
export const poke_service  = createAsyncThunk('service/fetchService', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const datas = await response.json();

    return datas;
});