 // src/routes/index.js
    import { Router } from 'express';
    import albumRoutes from './albumRoutes.js';
    import artistaAlbumRoutes from "./albumRoutes.js";
    import artistaCancionRoutes from "./artistaCancionRoutes.js";
    import artistaRoutes from "./artistaRoutes.js";
    import cancionRoutes from "./cancionRoutes.js";
    import planRoutes from "./planRoutes.js";
    import playlistCancionRoutes from "./playlistCancionRoutes.js";
    import reproduccionRoutes from "./reproduccionRoutes.js";
    import suscripcionRoutes from "./suscripcionRoutes.js";
    import usuarioRoutes from "./usuarioRoutes.js";


    /*
    Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
    */
    const router = Router(); 
    router.use("/api/usuario", usuarioRoutes);

    export default {router}; 