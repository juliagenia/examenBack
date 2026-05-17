 // src/routes/index.js
    import { Router } from 'express';
    import productRoutes from './productRoutes.js'
    // ... aqui importaríamos routers de otros modelos

    /*
    Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
    */
    const router = Router(); 


    export default router; 